<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductControllerAPI extends Controller
{
    //

//     product_id
// category_id
// product_name
// price
// image
    
    public function addProduct(Request $rq){
        $cat_id = $rq->input('txtcatid');
        $name = $rq->input('txtname');  
        $price = $rq ->input("txtdesc");
        $img = $rq ->input("txtimg");
        $createddate = date("Y-m-d H:i:s");

       // submit data into table of database 
       DB::table('products')->insert([
            'product_name' => $name,
            'category_id' => $cat_id,
            'image' => $img,
            'price' => $price,
            'created_at' => $createddate
        ]);
    
        echo ('1');
    }

    public function updateCategory(Request $rq){
        $id = $rq->input('txtid');
        $cat_id = $rq->input('txtcatid');
        $name = $rq->input('txtname');  
        $price = $rq ->input("txtdesc");
        $img = $rq ->input("txtimg");
        $updateddate = date("Y-m-d H:i:s");



        DB::table('products')->where('id',$id)->update(
            ['product_name' => $name, 
            'category_id' => $cat_id,
            'image' => $img,
            'price' => $price,
            'updated_at' => $updateddate
        ]);
        echo '1';
    }

    public function deleteCategory(Request $rq){
        $id = $rq->input('txtid');
        
        DB::table('products')->where('id', '=',$id)->delete();
        echo '1';
    }

    public function viewCategory() {
        $res = DB::table('products')->get();
        return $res;
    }
}