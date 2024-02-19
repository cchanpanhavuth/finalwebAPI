    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>Customer</h1>
        <div>
            @if(session()->has('success'))
                <div>
                    {{session('success')}}
                </div>
            @endif
        </div>
        <div>
            <table border = "1">
                <tr>ID</tr>
                <tr>First Name</tr>
                <tr>Last Name</tr>
                <tr>Email</tr>
                <tr>Phone Number</tr>
                <tr>Password</tr>
                <tr>Delete</tr>

            @foreach($customer as $customer)
                <tr>
                    <td>{{$customer->id}}</td>
                    <td>{{$customer->firstname}}</td>
                    <td>{{$customer->lastname}}</td>
                    <td>{{$customer->email}}</td>
                    <td>{{$customer->phonenumber}}</td>
                    <td>{{$customer->password}}</td>

                    <td>
                        <a href="{{route('customer.edit', ['customer'=> $customer])}}">Edit</a>
                    </td>
                    <td>
                        <form method="post" action="">
                            @csrf
                            method('delete')
                            <input type="submit" value="Delete">
                        </form>
                    </td>
                </tr>
            @endforeach
            </table>
        </div>
    </body>
    </html>