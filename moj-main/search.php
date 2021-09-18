
<!DOCTYPE html>
<html lang="en">
<head>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script type="application/javascript" src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.6.0.js"></script>
	<link rel="stylesheet" href="//cdn.datatables.net/1.10.24/css/jquery.dataTables.min.css">
    <script type="application/javascript" src="//cdn.datatables.net/1.10.24/js/jquery.dataTables.min.js"></script>
	<meta charset="UTF-8">
	<title>PHP Search</title>
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col-md-8 col-md-offset-2" style="margin-top: 5%;">
                <table id="data_table" class="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>ORDINANCE ID</th>
                            <th>YEAR</th>
                            <th>ORDINANCE NUMBER</th>
                            <th>TITLE</th>
                            <th>DATE OF APPROVAL</th>
                        </tr>

                    </thead>
                    <tbody>


                    </tbody>
                </table>

			</div>
		</div>
	</div>
</body>
<script>
    $(document).ready(function (e){
        $("#data_table").dataTable({
            lengthChange: true,
            "paging": true,
            "processing": true,
            "serverMethod": "post",
            "ajax": {
                "url": "ajax.php"
            },
            'columnDefs':[
                {
                    "searchable": false,
                    'targets'       : [0,3,4]
                }
            ],
            "columns":[
                {data: 'id'},
                {data: 'year'},
                {data: 'ord_num'},
                {data: 'title'},
                {data: 'doa'},

            ],
        })
    })

</script>
</html>