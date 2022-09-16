<?php

include('index.php');
$apikey = $_GET['api'];
$sender = $_GET['sender'];
$receiver = $_GET['number'];
$message = $_GET['msg'];
$footer = $_GET['footer'];
$url=(isset($_GET['img'])? $_GET['img'] : '');
$btn1 = $_GET['btn1'];
$btn2 = $_GET['btn2'];
$btn3 = $_GET['btn3'];

$data = [
    'api_key' => "$apikey",
    'sender' => "$sender",
    'number' => "$receiver",
    'message' => "$message",
    'footer' => "$footer",
    'image' => "$url", //OPTIONAL
    'button1' => "$btn1", //REQUIRED ( Button minimal 1 )
    'button2' => "$btn2", //OPTIONAL
    'button3' => "$btn3",//OPTIONAL
];
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "$url/public/send-button",
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