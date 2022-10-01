<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use App\Models\Number;
use App\Models\Template as TemplateModel;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;

class Template extends Controller
{
    public function index(){

        return view('pages.listTemplate',[
            'tags' => Auth::user()->tags()->get(),
            'senders' => Auth::user()->numbers()->get(),
            'data' => TemplateModel::where('user_id',Auth::user()->id)->get()
        ]);

    }


    public function create(){
        return view('pages.createTemplate',[
            'tags' => Auth::user()->tags()->get(),
            'senders' => Auth::user()->numbers()->get()
        ]);

    }
    public function save(Request $request){
     

       
        TemplateModel::create([
            'user_id' => Auth::user()->id,
            'data' => serialize($request->post()),
            'type' =>$request->post()['type'],
            'name' =>$request->post()['name'],

        ]);

        
        return back()->with('alert',[
            'type' => 'success',
            'msg' => 'Success added Template!'
        ]);


    }


    public function destroy(Request $request){
        $t = TemplateModel::find($request->id);
        $t->delete();
        return back()->with('alert',[
            'type' => 'success',
            'msg' => 'Success delete template!'
        ]);
    }

    public function fetchGroups(Request $request){
       try {
        $number = Number::whereBody($request->sender)->first();
        if($number->status != 'Connected'){
                return back()->with('alert', [
                    'type' => 'danger',
                    'msg' => 'Your sender is not connected!'
                ]);
            }
           $fetch =Http::withOptions(['verify' => false])->asForm()->post(env('WA_URL_SERVER').'/backend-getgroups',['token' => $request->sender]);
          $respon = json_decode($fetch->body());

       if($respon->status === false){
        return back()->with('alert',[
            'type' => 'danger',
            'msg' => $respon->message
        ]);
       }
                foreach ($respon->data as $group) {
                    $tag = Tag::firstOrCreate(['user_id'=> Auth::user()->id,'name' => $group->subject .'( '.$group->id.' )']);
                    
                   foreach ($group->participants as $member) {
                      $number = str_replace('@s.whatsapp.net','',$member->id);
                      $cek = Number::whereId(Auth::user()->id)->whereBody($number)->count();
                     if($cek < 1){

                          $tag->contacts()->create(['user_id' => Auth::user()->id,'name' => $number,'number' => $number]);
                     }

                   }
                }
                return back()->with('alert',[
                    'type' => 'success',
                    'msg' => 'Generate success'
                ]);
         
       } catch (\Throwable $th) {
            throw $th;
       }
    }



}
