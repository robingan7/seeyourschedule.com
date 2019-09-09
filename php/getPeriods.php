<?php
include_once('database.php');
$_POST = json_decode(file_get_contents('php://input'), true);
if(isset($_POST) && !empty($_POST)) {
    $id = mysqli_real_escape_string($conn,$_POST['id']);

    $sql2="SELECT * FROM periods WHERE userid='$id';";
    $result2=mysqli_query($conn, $sql2);
    $row = mysqli_fetch_assoc($result2);

    echo '
    {
        "p1": "'.$row['p1'].'",
        "p2": "'.$row['p2'].'",
        "p3": "'.$row['p3'].'",
        "p4": "'.$row['p4'].'",
        "p5": "'.$row['p5'].'",
        "p6": "'.$row['p6'].'",
        "p7": "'.$row['p7'].'",
        "p8": "'.$row['p8'].'"
    }';
    
}else {
  echo'
{
  "success": false,
  "message": "e field"
}
  ';
}
?>