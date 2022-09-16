<?php

namespace App\Http\Controllers;

use App\Models\Number;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Report;
use Illuminate\Contracts\Session\Session;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Auth;
class ReportController extends Controller
{
    



    public function index(Request $request){
       
       
        $userId=$request->user()->id;

        $report=Report::where('user_id',$userId)->get();
     
        return view('report',[
            'report' => $report,
        ]);
    }

  
 
    

}
