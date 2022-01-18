<?php

$DB = array(
    "HOST" => 'localhost',
    "USER" => 'root',
    "PASS" => '',
    "NAME" => 'LearnersCrib'
);

$LearnersCribResource = mysqli_connect($DB['HOST'], $DB['USER'], $DB['PASS'], $DB['NAME']);
