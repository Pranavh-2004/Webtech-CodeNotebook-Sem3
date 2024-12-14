<?php
// Get the raw POST data
$name = isset($_POST['name']) ? $_POST['name'] : 'Not provided';
$srn = isset($_POST['srn']) ? $_POST['srn'] : 'Not provided';

// Create an associative array to store the response data
$response = array(
    'name' => $name,
    'srn' => $srn
);

// Set the content type to application/json
header('Content-Type: application/json');

// Encode the response array to JSON and output it
echo json_encode($response);
?>