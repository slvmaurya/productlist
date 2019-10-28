<?php
require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);

  // Validate.
  if (trim($request->Comments) == '') {
    return http_response_code(400);
  }

  // Sanitize.
  $Title    = mysqli_real_escape_string($con, trim($request->Title));
  $Description = mysqli_real_escape_string($con, trim($request->Description));
  $ProductImage = mysqli_real_escape_string($con, trim($request->ProductImage));
  $Price = mysqli_real_escape_string($con, (int)$request->Price);
  $Comments = mysqli_real_escape_string($con, trim($request->Comments));

  // Update.
  $sql = "UPDATE 'ProductList' SET 'Title'='$Title','Description'='$Description','ProductImage'='$ProductImage','Price'=$Price,'Comments'='$Comments' WHERE 'Title'='$Title' LIMIT 1";

  if(mysqli_query($con, $sql))
  {
    http_response_code(204);
  }
  else
  {
    return http_response_code(422);
  }  
}