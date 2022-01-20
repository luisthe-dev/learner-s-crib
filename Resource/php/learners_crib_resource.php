<?php

if (isset($_SERVER['HTTP_ORIGIN'])) {
    // Decide if the origin in $_SERVER['HTTP_ORIGIN'] is one
    // you want to allow, and if so:
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}

session_start();

$DB = array(
    "HOST" => 'localhost',
    "USER" => 'root',
    "PASS" => '',
    "NAME" => 'learnerscrib'
);

// $DB = array(
//     "HOST" => 'localhost',
//     "USER" => 'platdhvs_learnerscrib',
//     "PASS" => 'Learner\'sCrib2021',
//     "NAME" => 'platdhvs_learnerscrib'
// );

$LearnersCribResource = mysqli_connect($DB['HOST'], $DB['USER'], $DB['PASS'], $DB['NAME']);
