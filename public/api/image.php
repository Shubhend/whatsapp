<?php
include('index.php');
$apikey = $_GET['api'];
$sender = $_GET['sender'];
$receiver = $_GET['number'];
$message = $_GET['msg'];
$img = $_GET['img'];

$data = [
    'api_key' => "$apikey",
    'sender' => "$sender",
    'number' => "$receiver",
    'message' => "$message",
    'url' => "$img",
    'type' => 'image'//'audio / video / image / pdf / xls /xlsx /doc /docx /zip'//Choose One
];
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "$url/public/send-media",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS => json_encode($data),
  CURLOPT_HTTPHEADER => array(
    'Content-Type: application/json'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;

?>