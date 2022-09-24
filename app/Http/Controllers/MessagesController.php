<?php

namespace App\Http\Controllers;

use App\Models\Number;
use App\Models\Report;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use GuzzleHttp\Client;
class MessagesController extends Controller
{
    
    public function index(Request $request){
        return view('pages.messagetest',[
            'numbers' => $request->user()->numbers()->latest()->paginate(10),
        ]);
       
    }


    public function textMessageTest(Request $request){

        $text = trim($request->number);
        $textAr = explode("\n", $text);
        $textAr = array_filter($textAr, 'trim'); // remove any extra \r characters left behind
        $number = Number::whereBody($request->sender)->first();
        if($number->status == 'Disconnect'){
            return redirect()->back()->with('alert',['type' => 'danger','msg' => 'Sender is disconnected']);
        }
        foreach ($textAr as $line) {
        
        $data = [
            'type' => 'text',
            'token' => $request->sender,
            'number' => $line,
            'text' => $request->message
        ];
       

        $sendMessage = json_decode($this->postMsg($data,'backend-send-text'));
        
     try {
        $data['response']=$sendMessage;
        $this->saveReport($request,$data,'text');

     } catch (\Throwable $th) {
       
     }
        

        if(!$sendMessage->status){
           // continue;
           return redirect()->back()->with('alert',['type' => 'danger','msg' => $sendMessage->msg ?? $sendMessage->message]);
        }

     

        $number->messages_sent += 1;
        
        /* Starting of Devendra's Code  */
        $user = User::whereId($number->user_id)->first();
        $user->credit -= 1;
        $user->save();
        /* End of Devendra's Code */
        
        $number->save();
    }
        return redirect()->back()->with('alert',['type' => 'success','msg' => 'Message Processing successfully. Please check the status']);
    }


    public function saveReport($request,$data,$message){


        $data['user_id']=$request->user()->id;
      
        $report=new Report();

       $report->user_id=$data['user_id'];
        $report->response=Serialize($data['response']);
        $report->sender=$data['token'];
        $report->type=$data['type'];
        $report->receiver=$data['number'];
        $report->message=$data[$message];
        $report->status=$data['response']->status;

        $report->save();



    }



    public function imageMessageTest(Request $request){


        
        $text = trim($request->number);
        $textAr = explode("\n", $text);
        $textAr = array_filter($textAr, 'trim'); // remove any extra \r characters left behind
        $number = Number::whereBody($request->sender)->first();
        if($number->status == 'Disconnect'){
            return redirect()->back()->with('alert',['type' => 'danger','msg' => 'Sender is disconnected']);
        }
    foreach ($textAr as $line) {

        $url = $request->url;
        $fileName = pathinfo($url, PATHINFO_FILENAME);
        $data = [
            'type' => $request->type,
            'token' => $request->sender,
            'url' => $request->url,
            'number' => $line,
            'caption' => $request->message,
            'fileName' => $fileName,
            'type' => $request->type
        ];
      

        $sendMessage = json_decode($this->postMsg($data,'backend-send-media'));
       
        try {
            $data['response']=$sendMessage;
            $this->saveReport($request,$data,'caption');
    
         } catch (\Throwable $e) {
          
         }
        if (!$sendMessage->status) {
            return redirect()->back()->with('alert', ['type' => 'danger', 'msg' => $sendMessage->msg ?? $sendMessage->message]);
        }
        $number->messages_sent += 1;
        /* Starting of Devendra's Code  */
        $user = User::whereId($number->user_id)->first();
        $user->credit -= 1;
        $user->save();
        /* End of Devendra's Code */
        $number->save();

    }
        return redirect()->back()->with('alert', ['type' => 'success', 'msg' => 'Message Processing successfully. Please check the status.']);
    
       

    }
    public function buttonMessageTest(Request $request){
        
        if(!$request->has('button')){
            return redirect()->back()->with('alert',['type' => 'danger','msg' => 'No buttons selected']);
        }
        $buttons = [
          
        ];
        if(count($request->button) > 0){
            for($i = 1; $i <= count($request->button); $i++){
                $buttons[] = ['displayText' => $request->button[$i]];
            }
        }

        
        $data = [
            'token' => $request->sender,
            'number' => $request->number,
            'button' => json_encode($buttons),
            'message' => $request->message,
            'footer' => $request->footer ?? '',
            'image' => $request->url ?? '',
        ];
       
        $number = Number::whereBody($request->sender)->first();
        if($number->status == 'Disconnect'){
            return redirect()->back()->with('alert',['type' => 'danger','msg' => 'Sender is disconnected']);
        }
        $sendMessage = json_decode($this->postMsg($data,'backend-send-button'));
       
        try {
          
            $data['type']='button';
            $data['response']=$sendMessage;
            $this->saveReport($request,$data,'message');
         } catch (\Throwable $th) {
           
         }
        if (!$sendMessage->status) {
            return redirect()->back()->with('alert', ['type' => 'danger', 'msg' => $sendMessage->msg ?? $sendMessage->message]);
        }
        $number->messages_sent += 1;
        /* Starting of Devendra's Code  */
        $user = User::whereId($number->user_id)->first();
        $user->credit -= 1;
        $user->save();
        /* End of Devendra's Code */
        $number->save();
        return redirect()->back()->with('alert', ['type' => 'success', 'msg' => 'Message sent successfully.']);
    
       
    }
    public function templateMessageTest(Request $request){
      if(!$request->has('template')){
            return redirect()->back()->with('alert',['type' => 'danger','msg' => 'No template selected']);
        }
        
        $templates = [];
            $ii = 0;
            foreach($request->template as $template){
                $ii++;
             $allowType = ['callButton', 'urlButton','idButton'];
             $type = explode('|', $template)[0] . 'Button';
             $text = explode('|', $template)[1];
             $urlOrNumber = explode('|', $template)[2];

             if (!in_array($type, $allowType)) {
                return back()->with('alert', [
                    'type' => 'danger',
                    'msg' => 'The Templates are not valid!'
                ]);
             }

            $ty = explode('|', $template)[0];
            $type = $ty ==  'id' ? 'quickReplyButton' : $type;
            if($ty == 'url') {
                $typePurpose = 'url';
            } else if($ty == 'call'){
                $typePurpose = 'phoneNumber';
            } else {
                $typePurpose = 'id';
            }
            $templates[] = ["index" => $ii, $type => ["displayText" => $text, $typePurpose => $urlOrNumber]];
        }
            
        
        $data = [
            'token' => $request->sender,
            'number' => $request->number,
            'button' => json_encode($templates),
            'text' => $request->message,
            'footer' => $request->footer ?? '',
            'image' => $request->url ?? '',
        ];
       

        $number = Number::whereBody($request->sender)->first();
        if($number->status == 'Disconnect'){
            return redirect()->back()->with('alert',['type' => 'danger','msg' => 'Sender is disconnected']);
        }
        $sendMessage = json_decode($this->postMsg($data,'backend-send-template'));
        try {
            $data['type']='templateMessage';
            $data['response']=$sendMessage;
            $this->saveReport($request,$data,'text');
    
         } catch (\Throwable $th) {
           
         }
        if (!$sendMessage->status) {
            return redirect()->back()->with('alert', ['type' => 'danger', 'msg' => $sendMessage->msg ?? $sendMessage->message]);
        }
        $number->messages_sent += 1;
        /* Starting of Devendra's Code  */
        $user = User::whereId($number->user_id)->first();
        $user->credit -= 1;
        $user->save();
        /* End of Devendra's Code */
        $number->save();
        return redirect()->back()->with('alert', ['type' => 'success', 'msg' => 'Message sent successfully.']);
    }


    public function listMessageTest(Request $request){
       if(!$request->has('list')){
            return redirect()->back()->with('alert',['type' => 'danger','msg' => 'No list selected']);
        }

        $section['title'] = $request->title;
      
        $i = 0;
        foreach ($request->list as $menu) {
            $i++;
            $section['rows'][] = [
                'title' => $menu,
                'rowId' => 'id' . $i,
                'description' => '',
            ];
        }
       
        $data = [
            'token' => $request->sender,
            'number' => $request->number,
            'list' => json_encode($section),
            'text' => $request->message,
            'footer' => $request->footer ?? '',
            'title' => $request->title,
            'buttonText' => $request->buttontext,
        ];
     
        $number = Number::whereBody($request->sender)->first();
        if($number->status == 'Disconnect'){
            return redirect()->back()->with('alert',['type' => 'danger','msg' => 'Sender is disconnected']);
        }
        $sendMessage = json_decode($this->postMsg($data,'backend-send-list'));
        try {
            $data['type']='list';
            $data['response']=$sendMessage;
            $this->saveReport($request,$data,'text');
    
         } catch (\Throwable $th) {
           
         }
        if (!$sendMessage->status) {
            return redirect()->back()->with('alert', ['type' => 'danger', 'msg' => $sendMessage->msg ?? $sendMessage->message]);
        }
        $number->messages_sent += 1;
        /* Starting of Devendra's Code  */
        $user = User::whereId($number->user_id)->first();
        $user->credit -= 1;
        $user->save();
        /* End of Devendra's Code */
        $number->save();
        return redirect()->back()->with('alert', ['type' => 'success', 'msg' => 'Message sent successfully.']);
       


       
       
    }
    



   


    public function postMsg($data,$url){
        try {
           
           $post = Http::withOptions(['verify' => false])->asForm()->post(env('WA_URL_SERVER').'/'.$url,$data);
              return $post->body();
           if(json_decode($post)->status === true){
              $c = Number::whereBody($data['sender'])->first();
              $c->messages_sent += 1;
              $c->save();
           }
           return $post;
        } catch (\Throwable $th) {
           return json_encode(['status' => false,'msg' => 'Make sure your server Node already running!']);
        }
    }
}
