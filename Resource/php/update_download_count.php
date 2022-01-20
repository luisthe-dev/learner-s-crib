<?php

include('./learners_crib_resource.php');

$Return['status'] = 0;
$Return['message'] = 'Access Denied';

if (isset($_POST['Download_Id'])) {

    $Download_Id = mysqli_real_escape_string($LearnersCribResource, $_POST['Download_Id']);

    $Find_Material = "SELECT * FROM materials WHERE Id = $Download_Id ";
    $Found_Material = mysqli_query($LearnersCribResource, $Find_Material);

    if (mysqli_num_rows($Found_Material) == 1) {
        $Material_Details = mysqli_fetch_array($Found_Material);
        $New_Download_Count = $Material_Details['Download_Count'] + 1;
        $Update_Material = "UPDATE materials SET Download_Count = $New_Download_Count WHERE Id = $Download_Id";
        if(mysqli_query($LearnersCribResource, $Update_Material)){
            $Return['status'] = 1;
            $Return['message'] = 'Download Link Generated Successfully';
            $Return['File_Path'] = $Material_Details['File_Path'];
        }else{
            $Return['message'] = 'Server Error Try Again Later';
        }

    } else {
        $Return['message'] = 'Material Does Not Exist';
    }
}

echo json_encode($Return);
