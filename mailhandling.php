<?php 
// function debug_to_console( $data ) {

//     if ( is_array( $data ) )
//       $output = "<script>console.log( 'Debug Objects: " . implode( ',', $data) . "' );</script>";
//     else
//       $output = "<script>console.log( 'Debug Objects: " . $data . "' );</script>";

//     echo $output;
//   }

    $result=$_POST['message'];
    
if(isset($_POST['submit'])){
    $to = $_POST['email']; // Email address to send
    
    
    $subject = "Form submission";
    
    $message =  "hello,this is email test";
   
    //$result=$_POST['data'];
    $headers = "From: webmaster@example.com" . "\r\n" .
      "CC: somebodyelse@example.com";
  
    if(mail($to, $subject, $message, $headers))
           
     {
      global $result;
      echo "the calculation result is :" . json_encode($result);
     }

         
      
  }

?>  
