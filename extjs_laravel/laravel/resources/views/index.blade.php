<!DOCTYPE html>
<html>

<head>


    <script type="text/javascript" src="file://C:/xampp/htdocs/bootstrap.js"></script>
    <script type="text/javascript" src="file://C:/xampp/htdocs/ext/ext-all.js"></script>
    <script type="text/javascript" href="https://github.com/teyfikavkan/LaravelProject/tree/master/laravelproject/resources/views/ext/ext-all.js"></script>

    <link type="text/css" href="file://C:/xampp/htdocs/homestyle.css" rel="stylesheet" />

    <title>Welcome!!!</title>
    <link rel="stylesheet" type="text/css" href="http://cdn.sencha.com/ext/gpl/5.0.0/build/packages/ext-theme-neptune/build/resources/ext-theme-neptune-all.css">

    <style>
        table {
            font-family: arial, sans-serif;
            border-collapse: collapse;
            width: 100%;
        }
        td, th {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
        }
        tr:nth-child(even) {
            background-color: #dddddd;
        }
    </style>

</head>
<body>
<div class="container">
    <div class="panel panel-default">
        <div class="panel-body">
            <div id="Info">
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>


                    @foreach($listofpeople as $data)
                        <tr>
                            <td>{{ $data->id }}</td>
                            <td>{{$data->name}}</td>
                            <td>{{$data->age}}</td>
                        </tr>
                    @endforeach
                    <script>
                        alert('Displayed Information of People')

                    </script>
                </table>
            </div>


        </div>
    </div>
</div>

</body>
</html>
