<?php
require 'database.php';

// Get the posted data.
$postdata = $_GET['Title'];

if(isset($postdata) && !empty($postdata))
{
 
  // Get by name.
  $sql = "SELECT * FROM `productlist` WHERE `Title` ='{$postdata}' LIMIT 1";

  $result = mysqli_query($con,$sql);
  $row = mysqli_fetch_assoc($result);
  
  $json = json_encode($row);
  echo $json;
}
exit;