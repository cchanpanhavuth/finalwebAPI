<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Orders;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrdersController extends Controller
{
    public function addOrder(Request $rq){
        $customer_id= $rq->input('txtcustomer');     
        $user_id= $rq->input("txtuser");
        $product_id= $rq->input("txtproduct");
        $price = DB::table('products')->where('id', $product_id)->value('price');
        $qty = $rq->input("txtqty");
        $total = $price * $qty;


        $createddate = date("Y-m-d H:i:s");

       // submit data into table of database 
       DB::table('orders')->insert([
            'customer_id' => $customer_id,
            'user_id' => $user_id,
            'created_at' => $createddate
        ]);
        DB::table('orders_items')->insert([
            'order_id' => DB::getPdo()->lastInsertId(),
            'product_id' => $product_id,
            'price' => $price,
            'quantity' => $qty,
            'total' => $total,
            'created_at' => $createddate,
        ]);
    
        echo ('1');
    }

    public function updateOrder(Request $rq){
        $id= $rq->input('txtid');
        $customer_id= $rq->input('txtcustomer');     
        $user_id= $rq->input("txtuser");
        $product_id= $rq->input("txtproduct");
        $price = DB::table('products')->where('id', $product_id)->value('price');
        $qty = $rq->input("txtqty");
        $total = $price * $qty;


        $updatedDate = date("Y-m-d H:i:s");

       // submit data into table of database 
       DB::table('orders')->where('id',$id)->update([
            'customer_id' => $customer_id,
            'user_id' => $user_id,
            'updated_at' => $updatedDate
        ]);
        DB::table('orders_items')->where('order_id',$id)->update([
            'product_id' => $product_id,
            'price' => $price,
            'quantity' => $qty,
            'total' => $total,
            'updated_at' => $updatedDate,
        ]);
    
        echo ('1');
    }

    public function deleteOrder(Request $rq){
        $id = $rq->input('txtid');
        
        DB::table('orders')->where('id', '=',$id)->delete();
        
        echo '1';
    }

    public function viewOrder() {
        $res = DB::table('orders')->get();

        return $res;
    }
    public function viewOrderItems() {
        $result = DB::table('orders_items')->get();

        return $result;
    }
}
