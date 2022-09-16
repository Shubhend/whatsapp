<?php
include('index.php');
$apikey = $_GET['api'];
$sender = $_GET['sender'];
$receiver = $_GET['number'];
$message = $_GET['msg'];
$footer = $_GET['footer'];
$namelist=$_GET['listname'];
$title=$_GET['title'];
$list1 = (isset($_GET['list1']) ? $_GET['list1'] : '');
$list2 = (isset($_GET['list2']) ? $_GET['list2'] : '');
$list3 = (isset($_GET['list3']) ? $_GET['list3'] : '');
$list4 = (isset($_GET['list4']) ? $_GET['list4'] : '');
$list5 = (isset($_GET['list5']) ? $_GET['list5'] : '');

    $data = [
        'api_key' => "$apikey",
        'sender' => "$sender",
        'number' => "$receiver",
        'message' => "$message",
        'footer' => "$footer",
        'name' => "$namelist",
        'title' => "$title",
        'list1' => "$list1", //REQUIRED ( list minimal 1 )
        'list2' => "$list2", //OPTIONAL
        'list3' => "$list3",//OPTIONAL
        'list4' => "$list4",//OPTIONAL
        'list5' => "$list5",//OPTIONAL
    ];
    $curl = curl_init();
    
    curl_setopt_array($curl, array(
      CURLOPT_URL => "$url/public/send-list",
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