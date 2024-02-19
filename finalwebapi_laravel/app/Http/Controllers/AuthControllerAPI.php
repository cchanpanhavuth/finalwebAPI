<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;


class AuthControllerAPI extends Controller
{
    //
    public function register(Request $request){


        $validator = Validator::make($request ->all(),[
            'name' => 'required|max:255',
            'email' => 'required|email|max:255|unique:users,email',
            'password' => 'required|min:8',
                    
        ]);
        if($validator->fails()){
            return response()->json([
                'validation_errors'=>$validator->messages(),
            ]);
        }
        else{
            
            $user = User::create([
                'name'=>$request->name,
                'email'=>$request->email,
                'password'=>Hash::make($request->password),
            ]);
            
            $token = $user -> createToken($user->email. 'Token')-> plainTextToken;
        
            return response()->json([
                'status'=>200,
                'username'=>$user->name,
                'token'=>$token

            ]);
        }
    }
    
}