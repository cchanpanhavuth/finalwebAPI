<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CategoryControllerAPI extends Controller
{
    //
//     category_id
// category_name
// description
    
    public function addCategory(Request $rq){
        $name = $rq->input('txtpass');     
        $desc = $rq ->input("txtdesc");

       // submit data into table of database 
       DB::table('tblcategory')->insert([
            'category_name' => $name,
            'description' => $desc
        ]);
    
        echo ('1');
    }

    public function updateCategory(Request $rq){
        $id = $rq->input('txtuser');
        $name = $rq->input('txtpass');     
        $desc = $rq ->input("txtdesc");

        DB::table('tblcategory')->where('category_id',$id)->update(
            ['category_name' => $name, 
            'description' => $desc, 
        ]);
        echo '1';
    }

    public function deleteCategory(Request $rq){
        $id = $rq->input('txtid');
        
        DB::table('tbluser')->where('userid', '=',$id)->delete();
        echo '1';
    }

    public function viewCategory() {
        $res = DB::table('tbluser')->get();
        return $res;
    }
}
