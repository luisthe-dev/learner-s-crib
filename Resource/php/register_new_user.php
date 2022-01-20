<?php

include('./learners_crib_resource.php');

$Return['status'] = 0;
$Return['message'] = 'Access Denied';

if (isset($_POST['Email'])) {

    $Name = mysqli_real_escape_string($LearnersCribResource, $_POST['Full_Name']);
    $User = mysqli_real_escape_string($LearnersCribResource, $_POST['User_Name']);
    $Email = mysqli_real_escape_string($LearnersCribResource, $_POST['Email']);
    $Password = mysqli_real_escape_string($LearnersCribResource, $_POST['Password']);

    $Find_User = "SELECT * FROM users WHERE Email = '$Email' OR Username = '$User' ";
    $Found_User = mysqli_query($LearnersCribResource, $Find_User);

    if (mysqli_num_rows($Found_User) == 0) {
        $Password = password_hash($Password, PASSWORD_DEFAULT);
        $Accept_User = "INSERT INTO users (Name, Username, Email, Password) VALUES ('$Name', '$User', '$Email', '$Password') ";
        if (mysqli_query($LearnersCribResource, $Accept_User)) {
            $Return['status'] = 1;
            $Return['message'] = 'User Registered Successfully!';
        } else {
            $Return['message'] = 'Server Error. Please Try Again Later.';
        }
    } else {
        $Return['message'] = 'User Details Have Already Been Registered';
    }
}

echo json_encode($Return);
