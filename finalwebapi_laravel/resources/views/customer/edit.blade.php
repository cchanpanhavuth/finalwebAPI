<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Create</h1>
    <div>
        @if($error->any())
            <ul>
                @foreach($errors->all() as $error)
                <li>{{$error}}</li>
            </ul>

        @endif
    </div>
    <form method="put", action="{{'customer.update', ['customer' => $customer]}}">
        @csrf
        @method('post')
        <div>
            <label>First Name</label>
            <input type="firstname" name="firstname" placeholder="First Name" value="{{$customer->firstname}}">
        </div>
        <div>
            <label>Last Name</label>
            <input type="lastname" name="lastname" placeholder="Last Name"value="{{$customer->lastname}}">
        </div>
        <div>
            <label>Email</label>
            <input type="email" name="email" placeholder="email"value="{{$customer->email}}">
        </div>
        <div>
            <label>Phone Number</label>
            <input type="phonenumber" name="phonenumber" placeholder="phonenumber"value="{{$customer->phonenumber}}">
        </div>
        <div>
            <label>Password</label>
            <input type="password" name="password" placeholder="password"value="{{$customer->password}}">
        </div>
    </form>
</body>
</html>