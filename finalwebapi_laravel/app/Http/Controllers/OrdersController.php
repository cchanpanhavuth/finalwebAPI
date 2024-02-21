<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Orders;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrdersController extends Controller
{
    public function addOrder(Request $rq){
        $customer_id= $rq->input('customer');     
        $user_id= $rq->input("user");
        $createddate = date("Y-m-d H:i:s");

       // submit data into table of database 
       DB::table('orders')->insert([
            'customer_id' => $customer_id,
            'user_id' => $user_id,
            'created_at' => $createddate
        ]);
    
        echo ('1');
    }
    
}
