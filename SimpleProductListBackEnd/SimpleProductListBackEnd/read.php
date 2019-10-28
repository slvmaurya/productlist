<?php
/**
 * Returns the list of products.
 */
require 'database.php';

$listproduct = [];
$sql = "SELECT Title,Description,ProductImage,Price,Comments FROM ProductList";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $listproduct[$i]['Title']    = $row['Title'];
    $listproduct[$i]['Description'] = $row['Description'];
    $listproduct[$i]['ProductImage'] = $row['ProductImage'];
    $listproduct[$i]['Price'] = $row['Price'];
    $listproduct[$i]['Comments'] = $row['Comments'];
    $i++;
  }
   
  echo json_encode($listproduct);
}
else
{
  http_response_code(404);
}