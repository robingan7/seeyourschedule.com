<?php
include_once('database.php');
$_POST = json_decode(file_get_contents('php://input'), true);
if(isset($_POST) && !empty($_POST)) {
    $id = mysqli_real_escape_string($conn,$_POST['id']);
    $val = mysqli_real_escape_string($conn,$_POST['val']);

    $sql2="SELECT `username` FROM `users` WHERE username='$val';";
    $result2=mysqli_query($conn, $sql2);

    if(mysqli_num_rows($result2) == 1) {
      $row = mysqli_fetch_row($result2);
      
      if($row[0] == $val) {
        echo '
        {
            "meesage":"hhh"
        }';
      }
    } else if(mysqli_num_rows($result2)==0){
        $sql2="UPDATE `users` SET username='$val' WHERE id='$id';";
        $result2=mysqli_query($conn, $sql2);

        echo '
        {
            "meesage":"hhh"
        }';
    }else{
        echo '
        {
            "meesage":"User name\'s already taken"
        }';
    }
}else {
  echo'
{
  "success": false,
  "message": "e field"
}
  ';
}
?>