<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CategoryControllerAPI extends Controller
{
    //

    
    public function addCategory(Request $rq){
        $name = $rq->input('txtname');     
        $desc = $rq ->input("txtdesc");
        $createddate = date("Y-m-d H:i:s");

       // submit data into table of database 
       DB::table('categories')->insert([
            'category_name' => $name,
            'description' => $desc,
            'created_at' => $createddate
        ]);
    
        echo '1';
    }

    public function updateCategory(Request $rq){
        $id = $rq->input('txtid');
        $name = $rq->input('txtname');     
        $desc = $rq ->input("txtdesc");
        $updateddate = date("Y-m-d H:i:s");



        DB::table('categories')->where('id',$id)->update(
            ['category_name' => $name, 
            'description' => $desc, 
            'updated_at' => $updateddate
        ]);
        echo '1';
    }

    public function deleteCategory(Request $rq){
        $id = $rq->input('txtid');
        
        DB::table('categories')->where('id', '=',$id)->delete();
        echo '1';
    }

    public function viewCategory() {
        $res = DB::table('categories')->get();
        return $res;
    }
}
