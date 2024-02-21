<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CustomerController extends Controller
{
    //index
    public function index(){
        $res = DB::table('customers')->get();
        return $res;
    }
    //store
    public function store(Request $request){

        $fname=$request->input('txtfname');
        $lname = $request->input('txtlname');
        $email =$request->input('txtemail');
        $phone =$request->input('txtphone');
        $createddate = date("Y-m-d H:i:s");


        DB::table('customers')->insert([
            'firstname' => $fname,
            'lastname' => $lname,
            'email' => $email,
            'phonenumber' => $phone,
            'created_at' => $createddate
    
        ]);

        echo ('1');
    }

    //update
    public function update(Request $rq){
        $id = $rq->input('txtid');
        $firstname = $rq->input('txtfname');     
        $lastname = $rq ->input("txtlname");
        $email = $rq ->input('txtemail');
        $phone = $rq -> input('txtphone');
        $updateddate = date("Y-m-d H:i:s");

        DB::table('customers')->where('id',$id)->update(
            ['firstname' => $firstname, 
            'lastname' => $lastname, 
            'email' => $email,
            'phonenumber' => $phone,
            'updated_at' => $updateddate
        ]);
        echo ('1');
    }

    //delete
    public function deleteCustomer(Request $rq){
        $id = $rq->input('txtid');
        
        DB::table('customers')->where('id', '=',$id)->delete();
        echo ('1');
    }

}

