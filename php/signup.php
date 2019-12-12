<?php
include_once('database.php');
$_POST = json_decode(file_get_contents('php://input'), true);
if(isset($_POST) && !empty($_POST)) {
    $username = mysqli_real_escape_string($conn,$_POST['username']);
    $display = mysqli_real_escape_string($conn,$_POST['display']);
    $email = mysqli_real_escape_string($conn,$_POST['email']);
    $password = mysqli_real_escape_string($conn,$_POST['password']);
    $passwordRepeat = mysqli_real_escape_string($conn,$_POST['passwordc']);
    $check = $_POST['check'];
    $_SESSION['user'] = 'admin';
    
    $sql2="SELECT * FROM users WHERE email='$email';";
    $result2=mysqli_query($conn, $sql2);
    $numOfmanager=mysqli_num_rows($result2);

    $sql3="SELECT * FROM users WHERE username='$username';";
    $result3=mysqli_query($conn, $sql3);
    $numOfmanager2=mysqli_num_rows($result3);
    
    if(!$check){
        echo'
        {
        "success": false,
        "message": "Check the checkbox"
        }
        ';
    }else if($numOfmanager>0){
        echo'
        {
        "success": false,
        "message": "The email already existed"
        }
        ';
    }else if($numOfmanager2>0){
        echo'
        {
        "success": false,
        "message": "The user name already existed"
        }
        ';
    }
    else {
        $password=password_hash($password,PASSWORD_DEFAULT);
        
        $sql2="SELECT * FROM users WHERE email='$email' AND username='$username';";
        $result2=mysqli_query($conn, $sql2);

            if(mysqli_num_rows($result2)==0){
                $sql3="INSERT INTO `users`(`username`,`displayname`,`email`,`password`) VALUES ('$username','$display','$email','$password');";
                $insert=mysqli_query($conn,$sql3);

                $sql2="SELECT * FROM users WHERE email='$email' AND username='$username';";
                $result2=mysqli_query($conn, $sql2);
                $row = mysqli_fetch_assoc($result2);

                $userid = $row['id'];
                $email = $row['email'];
                $sql3="INSERT INTO `periods`(`userid`) VALUES ('$userid');";
                $insert=mysqli_query($conn,$sql3);

                echo'
                {
                "success": true,
                "message": "You\'re all set to login",
                "name": "'.$username.'",
                "display": "'.$display.'",
                "email":"'.$email.'",
                "id": '.$userid.'
                }
                ';
            }
            else{
                echo'
                {
                "success": false,
                "message": "Account is already taken, please log in"
                }
                ';
            }
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