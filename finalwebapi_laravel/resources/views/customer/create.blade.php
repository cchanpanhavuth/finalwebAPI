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
    <form method="post", action="{{route('customer.store')}}">
        @csrf
        @method('post')
        <div>
            <label>First Name</label>
            <input type="firstname" name="firstname" placeholder="First Name">
        </div>
        <div>
            <label>Last Name</label>
            <input type="lastname" name="lastname" placeholder="Last Name">
        </div>
        <div>
            <label>Email</label>
            <input type="email" name="email" placeholder="email">
        </div>
        <div>
            <label>Phone Number</label>
            <input type="phonenumber" name="phonenumber" placeholder="phonenumber">
        </div>
        <div>
            <label>Password</label>
            <input type="password" name="password" placeholder="password">
        </div>
    </form>
</body>
</html>