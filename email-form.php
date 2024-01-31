<!DOCTYPE html>
<html lang="en">
<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	
	<title>Document</title>
</head>
<body>
	

	<form method="post" enctype="multipart/form-data" action="">
            <div class="row">
              <div class="col-lg-6 col-md-6 mb-4">
                <input type="text" class="form-control" placeholder="First Name" name="fname" required>
              </div>
              <div class="col-lg-6 col-md-6 mb-4">
                <input type="text" class="form-control" placeholder="Last Name" name="lname" required>
              </div>
              <div class="col-lg-6 col-md-6 mb-4">
                <input type="email" class="form-control" placeholder="Email" name="email" required>
              </div>
              <div class="col-lg-6 col-md-6 mb-4">
                <input type="text" class="form-control" placeholder="Subject" name="subject" required>
              </div>
              <div class="col-lg-12 col-md-12 mb-4">
                <textarea class="form-control" placeholder="Tape your message here..." name="message" required></textarea>
              </div>
              <div class="col-lg-12 col-md-12 mb-4">
                <button class="btn-submit" name="submit" type="submit" >Submit</button>
              </div>
            </div>
          </form>

          
</body>
</html>







<?php
if(isset($_POST["submit"]))
{
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];


    $email_to = "shoaib.developer1@gmail.com";
    $email_subject = "Contact us";
	
	$fullname = $fname." ".$lname; 

    $email_message = "Name: $fullname \n";
    $email_message .= "Email: $email \n";
    $email_message .= "Subject: $subject \n";
    $email_message .= "Message: $message \n";
	if(@mail($email_to, $email_subject, $email_message))
	{
		echo '<script type="text/javascript">$("#email-message").html("");$("#email-message").html("Email Sent Successfully");$("#email-message").css({"color":"green"});$("#email-message").show().delay(2000).fadeOut();</script>';
		}
		else
		{
			echo '<script type="text/javascript">$("#email-message").html("");$("#email-message").html("Something went wrong! Please try again later");$("#email-message").css({"color":"red"});$("#email-message").show().delay(2000).fadeOut();</script>';
			
			}

}
?>