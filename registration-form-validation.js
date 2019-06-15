function formValidation() {
  var majorselection = document.registration.subject;
  var username = document.registration.namestudent;
  var latin = document.registration.khmername;
  var imagefile = document.registration.myfile;
  var umsex = document.registration.msex;
  var ufsex = document.registration.fsex;
  var dateOfbirth = document.registration.dob;
  var placebirth = document.registration.pob;
  var mynationality = document.registration.nationality;
  var idNumber = document.registration.id;
  var userAddress = document.registration.address;
  var userParent = document.registration.parentname;
  var usermobile = document.registration.mobile;
  var uemail = document.registration.email;
  var userRelationship = document.registration.relationship;
  var userHighSchool = document.registration.high_school;
  var parentNum = document.registration.Parentmobile;
  var s_province = document.registration.province;
  var permis = document.registration.last;

  return (
    majorselect(majorselection) &&
    valiadateLifeinfo(lifeinfo) &&
    allLetter(username) &&
    validateLatinname(latin) &&
    validateImagefile(imagefile) &&
    validsex(umsex, ufsex) &&
    validateBirth(dateOfbirth) &&
    Validateplacebirth(placebirth) &&
    validateNationality(mynationality) &&
    ValidateIDnumber(idNumber) &&
    ValidateAddress(userAddress) &&
    phone_validation(usermobile, 8, 15) &&
    ValidateEmail(uemail) &&
    validateparentName(userParent) &&
    validatRelationship(userRelationship) &&
    validatParentNum(parentNum, 8, 15) &&
    validateHighSchool(userHighSchool) &&
    validateProvince(s_province) &&
    validate_permisstion(permis)
  );

  //formValidate
}

//******
function majorselect(majorselection) {
  if (majorselection.value == "Default") {
    alert("សូមជ្រើសរើសមុខជំនាញរបស់អ្នក\n Select your major");
    majorselection.focus();
    return false;
  } else {
    return true;
  }
}

function valiadateLifeinfo(lifeinfo) {
  for (var i = 0; i < lifeinfo.length; i++) {
    if (lifeinfo[i].checked) break;
  }
  if (i == lifeinfo.length) {
    return alert(
      "តើអ្នកស្គាល់សាកលវិទ្យាល័យ ឡាយហ្វតាមរយៈអ្វី?\n How did you come to know about Life University?"
    );
  } else {
    return true;
  }
}

function allLetter(username) {
  //var birthformat = /^[0-9a-zA-Z]+$/;
  //if(placebirth.value.match(birthformat))
  if (username.value == "") {
    alert("សូមបំពេញឈ្មោៈរបស់អ្នកជាតួអក្សរ\n(Name must have alphabet only)");
    username.focus();
    return false;
  } else {
    return true;
  }
}
//******
function validateLatinname(latin) {
  var lettersLatin = /^[A-Za-z]+$/;
  if (latin.value.match(lettersLatin)) {
    return true;
  } else {
    alert(
      "សូមបំពេញឈ្មោៈរបស់អ្នកជាតួអក្សរអង់គ្លេស\n(Name must have English alphabet only)"
    );
    latin.focus();
    return false;
  }
}

//******
function validateImagefile(imagefile) {
  //var birthformat = /^[0-9a-zA-Z]+$/;
  //if(placebirth.value.match(birthformat))
  if (imagefile.value == "") {
    alert("សូមជ្រើសរើសរូបភាពរបស់អ្នក\n(please choose Image file)");
    imagefile.focus();
    return false;
  } else {
    return true;
  }
}
//******
function validsex(umsex, ufsex) {
  x = 0;

  if (umsex.checked) {
    x++;
  }
  if (ufsex.checked) {
    x++;
  }

  if (x == 2) {
    alert(
      "អ្នកអាចជ្រើសរើសភេទបាន​តែមួយប៉ុនណ្ណោៈ!\n You can select sex only one!"
    );
    ufsex.checked = false;
    umsex.checked = false;
    umsex.focus();
    return false;
  }

  if (x == 0) {
    alert("សូមជ្រើសរើសភេទរបស់អ្នក(ប្រុសឬស្រី)\nSelect Male/Female");
    umsex.focus();
    return false;
  }
  return true;
}
//******
function validateBirth(dateOfbirth) {
  //var birthformat = /^[0-9a-zA-Z]+$/;
  //if(placebirth.value.match(birthformat))
  if (dateOfbirth.value == "") {
    alert(
      "សូមបំពេញថ្ងៃ​ ខែ ឆ្នាំកំណើតរបស់អ្នក!\n(please Complete Date of Birth!)"
    );
    dateOfbirth.focus();
    return false;
  } else {
    return true;
  }
}

function Validateplacebirth(placebirth) {
  //var birthformat = /^[0-9a-zA-Z]+$/;
  //if(placebirth.value.match(birthformat))
  if (placebirth.value == "") {
    alert(
      "សូមបំពេញអាសយដ្ឋាន ទីកន្លែងកំណើតរបស់អ្នក\n(Please Enter place of birth!)"
    );
    placebirth.focus();
    return false;
  } else {
    return true;
  }
}
//*******
function validateNationality(mynationality) {
  //var birthformat = /^[0-9a-zA-Z]+$/;
  //if(placebirth.value.match(birthformat))
  if (mynationality.value == "") {
    alert("សូមបំពេញ សញ្ជាតិរបស់អ្នក\n(Please Complete your Nationality!)");
    mynationality.focus();
    return false;
  } else {
    return true;
  }
}
//*******
function ValidateIDnumber(idNumber) {
  if (idNumber.value == "") {
    alert("សូមបំពេញលេខអត្តសញ្ញាណប័ណ្ណ \n(Please Enter your ID card number)");
    idNumber.focus();
    return false;
  } else {
    return true;
  }
}
//*******
function ValidateAddress(userAddress) {
  if (userAddress.value == "") {
    alert(
      "សូមបំពេញ អាសយដ្ឋានបច្ចុប្បន្នរបស់អ្នក\n(Please Complete your Address)"
    );
    userAddress.focus();
    return false;
  } else {
    return true;
  }
}

//******
function phone_validation(usermobile, mx, my) {
  var uid_len = usermobile.value.length;
  if (uid_len == 0 || uid_len >= my || uid_len < mx) {
    alert(
      "សូមបំពេញលេខទូរស័ព្ទរបស់អ្នក\n(Your phone number should not be empty)" +
        mx +
        " to " +
        my
    );
    usermobile.focus();
    return false;
  }
  return true;
}

//****
function ValidateEmail(uemail) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (uemail.value.match(mailformat)) {
    return true;
  } else {
    alert(
      "សូមបំពេញ អ៊ុីមែលរបស់អ្នក! \n(You have entered an invalid email address!)"
    );
    uemail.focus();
    return false;
  }
}
//*****
function validateparentName(userParent) {
  if (userParent.value == "") {
    alert(
      "សូមបំពេញឈ្មោះឪពុកម្ដាយ ឬអាណាព្យាបាល\n(Please Complete your Parent/Gaurdian's Name!)"
    );
    userParent.focus();
    return false;
  } else {
    return true;
  }
}

//*****
function validatRelationship(userRelationship) {
  if (userRelationship.value == "") {
    alert(
      "សូមបំពេញទំនាក់ទំនងភាពជាមួយ ឪពុកម្ដាយ ឬអាណាព្យាបាលអ្នក!\n(Please Complete your Relationship!)"
    );
    userRelationship.focus();
    return false;
  } else {
    return true;
  }
}
//******
function validatParentNum(parentNum, mx, my) {
  var uid_len = parentNum.value.length;
  if (uid_len == 0 || uid_len >= my || uid_len < mx) {
    alert(
      "សូមបំពេញលេខទូរស័ព្ទ អាណាព្យាបាលរបស់អ្នក! \n(Your Parent/Gaurdian's phone number!)" +
        mx +
        " to " +
        my
    );
    parentNum.focus();
    return false;
  }
  return true;
}

//*****
function validateHighSchool(userHighSchool) {
  if (userHighSchool.value == "") {
    alert(
      "សូមបំពេញឈ្មោះវិទ្យាល័យអ្នក!\n(Please Complete your HighSchool Name!)"
    );
    userHighSchool.focus();
    return false;
  } else {
    return true;
  }
}

//******
function validateProvince(s_province) {
  if (s_province.value == "Default") {
    alert("សូមជ្រើសរើសឈ្មោះខេត្ត \n(Select your province!)");
    s_province.focus();
    return false;
  } else {
    return true;
  }
}

function validate_permisstion(permis) {
  if (permis.checked == false) {
    alert(
      "សូមធានាអះអាងថាព័ត៌មានដែលបានរៀបរាប់ខាងលើពិតជាត្រឹមត្រូវ និង ពិតប្រាកដ!\n(please click Permission!)"
    );
    permis.focus();
    return false;
  } else {
    return true;
  }
}
