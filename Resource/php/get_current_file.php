<?php

include('./learners_crib_resource.php');

$Return = array();
$Return['status'] = 0;
$Return['message'] = 'Access Denied';

if(isset($_POST['Current_File'])){

    $Search = mysqli_real_escape_string($LearnersCribResource, $_POST['Current_File']);

    $Material_Query = "SELECT * FROM materials WHERE Id = $Search AND Is_Deleted = 0";
    $Found_Materials = mysqli_query($LearnersCribResource, $Material_Query);

    if (mysqli_num_rows($Found_Materials) > 0) {
        $All_Materials = array();
        while ($Materials = mysqli_fetch_array($Found_Materials)) {
            $Material = array();
            $Material['File_Name'] = $Materials['File_Name'];
            $Material['File_Path'] = $Materials['File_Path'];
            $Material['File_Description'] = $Materials['File_Description'];
            $Material['File_Type'] = $Materials['File_Type'];
            $Material['Course_Code'] = $Materials['Course_Code'];
            $Material['Course_Title'] = $Materials['Course_Title'];
            $Material['Course_Level'] = $Materials['Course_Level'];
            $Material['User_Id'] = $Materials['User_Id'];
            $Material['Ratings'] = $Materials['Ratings'];
            $Material['Download_Count'] = $Materials['Download_Count'];
            $Material['View_Count'] = $Materials['View_Count'];
            $Needed_User = $Materials['User_Id'];
            $New_View_Count = intval($Materials['View_Count']) + 1;
            mysqli_query($LearnersCribResource, "UPDATE materials SET View_Count = $New_View_Count WHERE Id = $Search ");
            $Material['User'] = mysqli_fetch_array(mysqli_query($LearnersCribResource, "SELECT * FROM users WHERE Id = $Needed_User"))['Username'];
            $Material['When_Uploaded'] = $Materials['When_Uploaded'];
            array_push($All_Materials, $Material);
        }
        $Return['status'] = 1;
        $Return['message'] = 'Materials Found';
        $Return['Main'] = $All_Materials;
    } else {
        $Return['message'] = 'No Uploaded Materials Found';
    }

}

$Material_Query = "SELECT * FROM materials WHERE Is_Deleted = 0";
$Found_Materials = mysqli_query($LearnersCribResource, $Material_Query);

if (mysqli_num_rows($Found_Materials) > 0) {
    $All_Materials = array();
    $Side_Materials = array();
    while ($Materials = mysqli_fetch_array($Found_Materials)) {
        $Material = array();
        $Material['SN'] = $Materials['Id'];
        $Material['File_Name'] = $Materials['File_Name'];
        $Material['File_Path'] = $Materials['File_Path'];
        $Material['File_Description'] = $Materials['File_Description'];
        $Material['File_Type'] = $Materials['File_Type'];
        $Material['Course_Code'] = $Materials['Course_Code'];
        $Material['Course_Title'] = $Materials['Course_Title'];
        $Material['Course_Level'] = $Materials['Course_Level'];
        $Material['User_Id'] = $Materials['User_Id'];
        $Material['Ratings'] = $Materials['Ratings'];
        $Material['Download_Count'] = $Materials['Download_Count'];
        $Material['View_Count'] = $Materials['View_Count'];
        $Needed_User = $Materials['User_Id'];
        $Material['User'] = mysqli_fetch_array(mysqli_query($LearnersCribResource, "SELECT * FROM users WHERE Id = $Needed_User"))['Username'];
        $Material['When_Uploaded'] = $Materials['When_Uploaded'];
        array_push($All_Materials, $Material);
        array_push($Side_Materials, $Material);
    }
    $Return['status'] = 1;
    $Return['message'] = 'Materials Found';
    $Return['Side'] = $All_Materials;
} else {
    $Return['message'] = 'No Uploaded Materials Found';
}

echo json_encode($Return);
