<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = 'm.paglierani@outlook.com';

    $subject = 'New Form Submission';

    $body = "First Name: $fname\n";
    $body .= "Last Name: $lname\n";
    $body .= "Email: $email\n";
    $body .= "Message:\n$message";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo 'Thank you for your submission!';
    } else {
        echo 'Sorry, there was an error while processing your request.';
    }
}
?>
