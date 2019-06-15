<?php
require_once "dbconfig.php";
//print_r($_SESSION);
$p = "SELECT * FROM `subject` where status='1'";
$q = "SELECT * FROM `life_info` where status='1'";
?>
<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">
  <title>LIFE UNIVERSITY </title>
  <!-- Bootstrap core CSS-->
  <script src="vendor/bootstrap/js/registration-form-validation.js"></script>

  <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
</head>

<!-- checking form wih validate  document.registration.subject.focus();"
 * if we do not add (.subject) your validate will not work -->

<body onLoad="document.registration.subject.focus();">



  <!-- Navigation -->
  <?php include "nav.php"; ?>
  <!-- Page Content -->
  <div class="container">
  </br></br></br>
    <div class="row">
      <div class="col-lg-3"><img src="img/logo.png" style="height:100px" align="left"  ></br><b>សាកលវិទ្យាល័យឡាយហ្វ</br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Life University</b>
    </div>

    <div class="col-lg-6"><h5 style="text-align:center"><b>ពាក្យសុំប្រឡងអាហារូបករណ៍</b></h5>
         <h5 style="text-align:center">
    Scholarship Examination Form</h5>

    </div>
	</div>
	</div>




       <!--add name, onSubmit to return formValidate-->
<form  name='registration' onSubmit="return formValidation();" action="form_insert.php" method="post"  enctype="multipart/form-data">
  <!--name='registration' onSubmit="return formValidation();" -->

    <div class="form-row">
    <div class="form-group col-lg-12 ">

      <label for="i4" style=" margin-left: 20px" >  <b>មុខជំនាញជ្រើសរើស</b></br>
	 Major Selection

 </label>

   <select  class="form-control" style=" margin-left: 20px"  id="i4" name="subject">
	 <option value="Default">មុខជំនាញជ្រើសរើស Major Selection
	  </option>
	  <?php
   $result = select($p);
   while ($r = mysqli_fetch_array($result)) {
     extract($r); ?>
	  <option value="<?= $SubjectID ?>"><?= $SubjectName ?>
	  </option><?php
   }
   ?>
	  </select>
    </div>

    <div class="form-group "  >
      <label for="4" style=" margin-left: 20px"><b>តើអ្នកស្គាល់សាកលវិទ្យាល័យ ឡាយហ្វ តាមរយៈអ្វី?</b>
	  </br>How did you come to know about Life University?

</label></br>

	  <?php
   $result1 = select($q);
   while ($r1 = mysqli_fetch_array($result1)) {
     extract($r1); ?>
    <li>
	 <input type="checkbox" style="margin-left:20px" name="life" value="<?= $LifeID ?>">&nbsp;&nbsp;<?= $LName ?>
	  &nbsp;&nbsp;
  </li>

	  <?php
   }
   ?>

	  </div>
  </div>

  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4" style=" margin-left: 20px">
    <b>គោតនាម និង នាម</b>
	  </br>Sure Name & Name
	  </label>

      <input type="text" name="namestudent"  style=" margin-left: 20px"
      class="form-control" id="inputEmail4" >
    </div>
	<div class="form-group col-md-6">
      <label for="inputEmail4" style=" margin-left: 20px">
    <b>នាមជាអក្សរឡាតាំង</b>
	  </br>
    Name in Latin
	  </label>
      <input type="text"  style=" margin-left: 20px" name="khmername" class="form-control" id="inputEmail4" >
    </div>

  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmai07" style=" margin-left: 20px"><b>រូបភាព (4 x 6) </b>
      </br>Image
</label>
      <input type="file" style=" margin-left:20px" name="myfile" class="form-control" id="inputEmai07" >
    </div>
    <div class="form-group col-md-6">
      <label for="input8" style=" margin-left: 20px"><b>ភេទ</b>
      </br>Sex</label></br>
      <input type="radio"  name="sex" value="បុរស" id="input8" style=" margin-left: 20px" > <b>បុរស</b>&nbsp; Male &nbsp;
      <input type="radio"  name="sex" value="ស្រី" id="input8"  style=" margin-left: 20px" ><b>ស្រី</b> &nbsp; Female &nbsp;

    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmai0710" style=" margin-left: 20px"><b>ថ្ងៃខែ​ឆ្នាំ​កំណើត</b></br>
  Date Of Birth</label>
      <input type="date" style=" margin-left:20px" name ="dob" class="form-control" id="inputEmai0710" >
    </div>
    <div class="form-group col-md-6">
      <label for="input9" style=" margin-left: 20px" ><b>ទី​កន្លែង​កំណើត</b></br>
Place Of Birth</label></br>
     <input type="text" style="margin-left:20px" name="pob" class="form-control"  id="input9" >
      </div>
  </div>
   <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmai001" style=" margin-left: 20px"><b>សញ្ជាតិ</b></br>
Nationality</label>
      <input type="text" style="margin-left:20px" name ="nationality" class="form-control" id="inputEmai001" >
    </div>
    <div class="form-group col-md-6">
      <label for="input901" style=" margin-left: 20px"><b>លេខអត្តសញ្ញាណប័ណ្ណ</b>
	  </br>
ID Card Number</label></br>
     <input type="text" style="margin-left:20px"  name="id" class="form-control"  id="input901" >
      </div>
      <div class="form-group col-md-6">
          <label for="input9012202" style=" margin-left: 20px"><b>អាសយដ្ឋានបច្ចុប្បន្ន &nbsp;ខេត្ត &nbsp;ស្រុក&nbsp; ឃុំ</b>
          </br>
      Current Mailing Address</label></br>
          <input type="text" style="margin-left:20px" name="address" class="form-control"  id="input9012202" >
    </div>
  </div>

   <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmai0010" style=" margin-left: 20px"><b>លេខ​ទំនាក់​ទំនង</b></br>
Contact Number</label>
      <input type="text" name ="mobile" class="form-control" id="inputEmai0010" style=" margin-left: 20px">
    </div>
    <div class="form-group col-md-6">
      <label for="input90122" style=" margin-left: 20px"><b>អ៊ុីមែល</b></br>
Email  </label></br>
     <input type="text"  name="email" class="form-control"  id="input90122"style=" margin-left: 20px" >
      </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmai00101" style=" margin-left: 20px"><b>ឈ្មោះឪពុកម្ដាយ/អាណាព្យាបាល</b></br>
Parent/Gaurdian's Name</label>
      <input type="text" name ="parentname" class="form-control" id="inputEmai00101" style=" margin-left: 20px" >
    </div>
    <div class="form-group col-md-6">
      <label for="input901220" style=" margin-left: 20px"><b>ទំនាក់ទំនងភាព</b></br>
Relationship</label></br>
     <input type="text"  name="relationship" class="form-control"  id="input901220" style=" margin-left: 20px" >
      </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6" style=" margin-left: 20px">
      <label for="inputEmai001011"><b>លេខទំនាក់ទំនង</b></br>
Contact Number</label>
      <input type="text" name ="Parentmobile" class="form-control" id="inputEmai001011"  >
    </div>

  </div>

  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmai001011" style=" margin-left: 20px"><b>មកពីវិទ្យាល័យ</b></br>
High School</label>
      <input type="text" name ="high_school" class="form-control" id="inputEmai001011" style=" margin-left: 20px" >
    </div>
    <div class="form-group col-md-6" style=" margin-left: 20px">
      <label for="input9012202"><b>ខេត្ត</br> </b> Province</label></br>

     <select  name="province" class="form-control"  id="input9012202">
<option selected="" value="Default">ឈ្មោះខេត្ត(Please select a your province)</option>
<option value="ភ្នំពេញ">ភ្នំពេញ(Phnom Penh)</option>
<option value="តាកែវ">តាកែវ(Takeo)</option>
<option value="ព្រះសីហនុ">ព្រះសីហនុ(Sihanoukville)</option>
<option value="បាត់ដំបង	">បាត់ដំបង(Battambang)</option>
<option value="សៀមរាប">សៀមរាប(Siem Reap)</option>
<option value="ប៉ៃលិន">ប៉ៃលិន(Pailin)</option>
<option value="កំពង់ឆ្នាំង	">កំពង់ឆ្នាំង(Kampong Chhnang)</option>
<option value="កំពង់ចាម">កំពង់ចាម(Kampong Cham)</option>
<option value="ពោធិ៍សាត់">ពោធិ៍សាត់(Pursat)</option>
<option value="បន្ទាយមានជ័យ	">ពោធិ៍សាត់(Banteay Meanchey) </option>
<option value="កំពង់ស្ពឺ">កំពង់ស្ពឺ(Kampong Speu)</option>
<option value="កំពត">កំពត(Kampot)</option>
<option value="កណ្តាល">កណ្តាល(Kandal)</option>
<option value="កោះកុង">កោះកុង(Koh Kong)</option>
<option value="កែប">កែប(Kep)</option>
<option value="ក្រចេះ">ក្រចេះ(Kratié)</option>
<option value="មណ្ឌលគីរី">មណ្ឌលគីរី(Mondulkiri)</option>
<option value="ឧត្តរមានជ័យ">ឧត្តរមានជ័យ(Oddar Meanchey)</option>
<option value="ព្រះវិហារ">ព្រះវិហារ(Preah Vihear)</option>
<option value="ព្រៃវែង">ព្រៃវែង(Prey Veng)</option>
<option value="រតនគីរី">រតនគីរី(Ratanakiri)</option>
<option value="ស្ទឹងត្រែង">ស្ទឹងត្រែង(Stung Treng)</option>
<option value="ស្វាយរៀង">ស្វាយរៀង(Svay Rieng)</option>
<option value="ត្បូងឃ្មុំ">ត្បូងឃ្មុំ(Tbong Khmum)</option>
<option value="កំពង់ធំ	">កំពង់ធំ(Kampong Thom</option>
<option value="Others">ផ្សេងៗ(Others)</option>

</select>
      </div>
  </div>



  <div class="form-group" style=" margin-left: 20px">
    <div class="form-check">
    &nbsp;&nbsp;  <input class="form-check-input" name="last" type="checkbox" id="gridCheck">
      <label class="form-check-label" for="gridCheck"><b>
      &nbsp;&nbsp; ខ្ញុំបាទ/នាងខ្ញុំសូមធានាអះអាងថាព័ត៌មានដែលបានរៀបរាប់ខាងលើពិតជាត្រឹមត្រូវ និង ពិតប្រាកដ។ ខ្ញុំបាទ/នាងខ្ញុំនិងទទួលខុសត្រូវចំពោះមុខច្បាប់ប្រសិនបើខ្ញុំបាទ/នាងខ្ញុំផ្ដល់ព័ត៌មានមិនពិតប្រាកដ។ </b></br>
       Hereby, I Sincerely Claim To The Best Of My Knowledge That The Information Provided Above Is True Complete. I shall Be able in The Presence Of The Law For Any False Information.

      </label>
    </div>
  </div>


<!--add value="Submit"-->
	<input type="submit" name="submit" class="btn btn-primary" value="Submit" style=" margin-left: 20px"></input>
</br>
</br>
</form>




  <!-- Bootstrap core JavaScript-->
  <!--  <script src="vendor/jquery/jquery.min.js"></script>-->
  <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
</body>

</html>
