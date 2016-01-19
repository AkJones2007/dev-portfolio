<?php

require('phpmailer/class.phpmailer.php');
require('phpmailer/class.smtp.php');


/* config start */

$emailAddress = 'AkJones2007@gmail.com';
$fromName = 'Alex Jones';
$smtp=false;

/* NOTE: IF YOU RECIEVED THIS MESSAGE "Error Occured:Could not instantiate mail function." YOU SHOULD SET SMTP CONFIG
 * AND SET $SMTP VALUE TO TRUE */

/* config end */
$name = $_POST['name'];
$company = $_POST['company'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];
$reason = $_POST['reason'];

$subject = ''.$name.' from '.$company.': '.$reason.'';

$emailBody =
'<strong>Name:</strong> '.$name.'<br>
 <strong>Company:</strong> '.$company.'<br>
 <strong>Phone Number:</strong> '.$phone.'<br><br>
 <strong>Message:</strong> '.nl2br($message).'';

$mail = new PHPMailer(); // create a object to that class.

if($smtp){

$mail->IsSMTP();
$mail->Host = "smtp.gmail.com";
$mail->SMTPSecure = "ssl";
$mail->Port       = 465;


// optional
// used only when SMTP requires authentication

$mail->SMTPAuth = true;
$mail->Username = 'GMAIL USERNAME';
$mail->Password = 'YOUR GMAIL PASSWORD';

}



$mail->Timeout  = 360;

$mail->Subject = $subject;
$from = $fromName;
$mail->From = $email;
$mail->FromName = $name;
$mail->AddReplyTo($emailAddress, $from);
$to = $emailAddress;
$mail->AddAddress($to, '');


$mail->MsgHTML($emailBody);

$mail->Body = $emailBody;



if($mail->Send()) {
     echo "<div class='alert alert-success' >Your Message Sent!</div>";


} else {
  echo "<div class='alert alert-error' >Error Occured:".$mail->ErrorInfo."</div>";
}






?>
