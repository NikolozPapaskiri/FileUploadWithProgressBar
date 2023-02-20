<?php
  $file_name =  $_FILES['file']['name'];
  $tmp_name = $_FILES['file']['tmp_name'];
  $file_up_name = time().$file_name;//makingf file name dynamic by adding time before file name
  move_uploaded_file($tmp_name, "files/".$file_up_name);//moving file to the specific folder with dynamic name
?>