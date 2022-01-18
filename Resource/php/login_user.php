<?php

include('./learners_crib_resource.php');

$Return['status'] = 0;
$Return['message'] = 1;

if (isset($_POST['Email'])) {

    $Email = mysqli_real_escape_string($LearnersCribResource, $_POST['Email']);
    $Password = mysqli_real_escape_string($LearnersCribResource, $_POST['Password']);

    $Find_User = "SELECT * FROM users WHERE Email = '$Email' ";
    $Found_User = mysqli_query($LearnersCribResource, $Find_User);

    if (mysqli_num_rows($Found_User) == 1) {
        $User_Details = mysqli_fetch_array($Found_User);
        $Hash = $User_Details['Password'];
        if (password_verify($Password, $Hash)) {
            session_start();
            $_SESSION['resource_centre_user_id'] = bin2hex($Email);
            setcookie('resource_centre_user_id', bin2hex($Email), time() + (60 * 60 * 24 * 30));
            $Return['status'] = 1;
            $Return['message'] = 'User Logged In Successfully';
        } else {
            $Return['message'] = 'Incorrect Login Details';
        }
    } else {
        $Return['message'] = 'User Does Not Exist';
    }
}

echo json_encode($Return);
