<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Customer;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CustomerController extends Controller
{
    //index
    public function index(){
        $customer = DB::table('çustomers')->get();

        return $customer;
    }
    //store
    public function store(Request $request){
        $data = $request->validate([
            'firstname' => 'required',
            'lastname' => 'required',
            'email' => 'required',
            'password' => 'required',
            'phonenumber' => 'required|numeric',
        ]);

        DB::table('customers')->insert([
            'firstname' => $request->firstname,
            'lastname' => $request->lastname,
            'email' => $request->email,
            'phonenumber' => $request->phonenumber,
            'password' => $$request->password,
        ]);

        return '1';
    }

    //edit

    public function edit(Customer $customer){
        return view('customer.edit', ['customer' => $customer]);
    }
    public function update(Customer $customer, Request $request){
        $data = $request->validate([
            'firstname' => 'required',
            'lastname' => 'required',
            'email' => 'required',
            'password' => 'required',
            'phonenumber' => 'required|numeric',
        ]);

        $customer->update($data);

        return redirect(route('customer.index'))->with('success', 'Customer Updated Success');
    }
    public function destroy(Customer $customer){
        $customer->delete();
        return redirect(route('customer.index'))->with('success', 'Customer deleted Successful');
    }
}

