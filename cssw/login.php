<?php
$severname="localhost";
$username="1809441";
$password="1809441";
$dbname="db1809441_peerr";
$conn=mysqli_connect($severname,$username,$password,$dbname);
echo("connection");
if(isset($_POST['Login'])){
    $user=$_POST['user'];
    $pass=$_POST['pass'];
    $usertype=$_POST['usertype'];
    $query="SELECT * FROM login WHERE  username='".$user."' and   password  = '".$pass."'  and usertype='".$usertype."'";
    $result=mysqli_query($conn,$query);
    if($result){
        while($row=mysqli_fetch_array($result)){
            echo'<script type="text/javascript">alert("you are logged in successfully and you are logged in as '   .$row['usertype']. '")</script>';

            }
    if(mysqli_num_rows($result)>0){
        ?>
        <script type="text/javascript">
    window.location.href="admin.php"</script>
        <?php

        }else{
            ?>
            <script type="text/javascript">
    window.location.href="user.php"</script>
            <?php
        }
    }else{
        echo  'no result';
        }
}
?>