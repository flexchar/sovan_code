<?php
require_once "dbconfig.php";

if (isset($_REQUEST['last'])) {
  extract($_REQUEST);
  $reg = $_SESSION['RegID'];
  $error = $_FILES["myfile"]["error"];

  $name = $_FILES["myfile"]["name"];
  $type = $_FILES["myfile"]["type"];
  $size = $_FILES["myfile"]["size"];
  $tmp_name = $_FILES["myfile"]["tmp_name"];
  //$userid=$_SESSION['userid'];
  //$query="update user set image='$name' where userid='$userid'";

  if (move_uploaded_file($tmp_name, "img/" . $name)) {
    $q = "INSERT INTO `student_info`( `SubjectID`, `LifeID`, `RegID`, `StudentName`,`NameKhmer`, `Image`,
 `Sex`, `Dob`, `Pob`, `Nationality`, `Id_Card`, `Mobile`, `Email`,
 `ParentName`, `Relationship`, `ParentMobile`, `Address`, `HighSchool`, `Province`)VALUES ('$subject','$life','$reg','$namestudent','$khmername','$name','$sex','$dob','$pob','$nationality','$ID','$mobile',
    '$email','$parentname','$relationship','$Parentmobile','$address','$high_school','$province')";
    $n = iud($q);
    if ($n == 1) {
      echo "<script>alert('Submit successfully');
         window.location='register.php';
         </script>";
    } else {
      echo "<script>alert('Something Wrong Try Again');
         window.location='register.php';
         </script>";
    }
  }
} else {
  echo "<script>alert('Something Wrong Try Again');
         window.location='register.php';
         </script>";
}

?>
