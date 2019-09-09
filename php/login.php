<?php
include_once('database.php');
$_POST = json_decode(file_get_contents('php://input'), true);
if(isset($_POST) && !empty($_POST)) {
    $username = mysqli_real_escape_string($conn,$_POST['name']);;
    $password = mysqli_real_escape_string($conn,$_POST['password']);
    
    $pass="";
    $usee="";
    
   $sql2="SELECT * FROM users WHERE username='$username';";
   $result2=mysqli_query($conn, $sql2);

    if(mysqli_num_rows($result2)==0){
        $sql2="SELECT * FROM users WHERE email='$username';";
        $result2=mysqli_query($conn, $sql2);

        if(mysqli_num_rows($result2)!=0){
            $row = mysqli_fetch_assoc($result2);
            $pass = $row['password'];
            $usee = $row['email'];
        }else{
            echo'
            {
            "success": false,
            "message": "Account doesn\'t existed"
            }
            ';
            die();
        }
    }else{
        $row = mysqli_fetch_assoc($result2);
        $pass = $row['password'];
        $usee=$row['username'];
    }
      // || $password==$pass
      if(password_verify($password, $pass)){
        
        echo'
            {
            "success": true,
            "message": "You\'re good",
            "name": "'.$row['username'].'",
            "display": "'.$row['displayname'].'",
            "email":"'.$row['email'].'",
            "id": '.$row['id'].'
            }
            ';   
      }else{
          echo'
            {
            "success": false,
            "message": "Wrong password"
            }
            ';
      }
    }


else {
  echo'
{
  "success": false,
  "message": "e field"
}
  ';
}
?>