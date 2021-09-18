<?php
$conn = mysqli_connect('localhost','root','','moj');
$sql = "SELECT * FROM tbl_ord";
$result = $conn->query($sql);
$data = null;
$response = null;
if ($result->num_rows > 0){

    while($row = $result->fetch_assoc()){
        $data[] = array(
            "id"=>$row['ORD_ID'],
            "year"=>$row['YEAR'],
            "ord_num"=>$row['ORD_NUM'],
            "title"=>$row['TITLE'],
            "doa"=>$row['DATE_APPROVED'],
        );
    }

    $response = array(
        "data"=>$data
    );

}
echo json_encode($response);
