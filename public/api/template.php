<?php

$sender = $_GET['sender'];
$receiver = $_GET['number'];
$message = $_GET['msg'];

    $data = [
        'api_key' => 'Vg7ync9oeePVvX4A0OjLGO243J7mFW',
        'sender' => "$sender",
        'number' => "$receiver",
        'message' => 'Your message',
        'footer' => 'Your footer message',
        //'image' => 'https://www.logodesign.net/logo/flying-rocket-inside-light-bulb-3987ld.png', //OPTIONAL
        'template1' => 'url|Visit Here|https://divineinfosec.com', //REQUIRED ( template minimal 1 )
        //'template2' => 'template 2', //OPTIONAL
        //'template3' => 'template 3',//OPTIONAL
    ];
    $curl = curl_init();
    
    curl_setopt_array($curl, array(
      CURLOPT_URL => "https://api.watzapiapp.com/public/send-template",
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