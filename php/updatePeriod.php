<?php
include_once('database.php');
$_POST = json_decode(file_get_contents('php://input'), true);
if(isset($_POST) && !empty($_POST)) {
    $id = mysqli_real_escape_string($conn,$_POST['id']);
    $val = mysqli_real_escape_string($conn,$_POST['val']);
    $idin = mysqli_real_escape_string($conn,$_POST['idin']);

    $sql2="UPDATE `periods` SET `$idin`='$val' WHERE userid='$id';";
    $result2=mysqli_query($conn, $sql2);

    echo '
    {
        "message":"hhh"
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