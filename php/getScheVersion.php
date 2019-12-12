<?php
include_once('database.php');
$_POST = json_decode(file_get_contents('php://input'), true);
if(isset($_POST) && !empty($_POST)) {
    $sql2="SELECT `scheVersion` FROM versionSche WHERE id=1;";
    $result2=mysqli_query($conn, $sql2);
    $row = mysqli_fetch_assoc($result2);
    $version = $row['scheVersion'];

    echo '{"version" : "'.$version.'"}';

}
?>
