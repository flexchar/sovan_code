function formValidation() {
  const majorselection = document.registration.subject;
  const username = document.registration.namestudent;
  const latin = document.registration.khmername;
  const imagefile = document.registration.myfile;
  const umsex = document.registration.msex;
  const ufsex = document.registration.fsex;
  const dateOfbirth = document.registration.dob;
  const placebirth = document.registration.pob;
  const mynationality = document.registration.nationality;
  const idNumber = document.registration.id;
  const userAddress = document.registration.address;
  const userParent = document.registration.parentname;
  const usermobile = document.registration.mobile;
  const uemail = document.registration.email;
  const userRelationship = document.registration.relationship;
  const userHighSchool = document.registration.high_school;
  const parentNum = document.registration.Parentmobile;
  const s_province = document.registration.province;
  const permis = document.registration.last;

  return (
    validateMajorSelect(majorselection) &&
    valiadateLifeInfo(lifeinfo) &&
    validateAllLetter(username) &&
    validateLatinName(latin) &&
    validateImageFile(imagefile) &&
    validSex(umsex, ufsex) &&
    validateBirth(dateOfbirth) &&
    validatePlaceBirth(placebirth) &&
    validateNationality(mynationality) &&
    validateIdNumber(idNumber) &&
    validateAddress(userAddress) &&
    validatePhoneNumber(usermobile, 8, 15) &&
    validateEmail(uemail) &&
    validateParentName(userParent) &&
    validatRelationship(userRelationship) &&
    validatParentNum(parentNum, 8, 15) &&
    validateHighSchool(userHighSchool) &&
    validateProvince(s_province) &&
    validatePermisstion(permis)
  );

  //formValidate
}

//******
function validateMajorSelect(majorselection) {
  if (majorselection.value == "Default") {
    alert("សូមជ្រើសរើសមុខជំនាញរបស់អ្នក\n Select your major");
    majorselection.focus();
    return false;
  }
  return true;
}

function valiadateLifeInfo(lifeinfo) {
  for (var i = 0; i < lifeinfo.length; i++) {
    if (lifeinfo[i].checked) break;
  }
  if (i == lifeinfo.length) {
    return alert(
      "តើអ្នកស្គាល់សាកលវិទ្យាល័យ ឡាយហ្វតាមរយៈអ្វី?\n How did you come to know about Life University?"
    );
  }
  return true;
}

function validateAllLetter(username) {
  //var birthformat = /^[0-9a-zA-Z]+$/;
  //if(placebirth.value.match(birthformat))
  if (username.value == "") {
    alert("សូមបំពេញឈ្មោៈរបស់អ្នកជាតួអក្សរ\n(Name must have alphabet only)");
    username.focus();
    return false;
  }
  return true;
}
//******
function validateLatinName(latin) {
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
function validateImageFile(imagefile) {
  //var birthformat = /^[0-9a-zA-Z]+$/;
  //if(placebirth.value.match(birthformat))
  if (imagefile.value == "") {
    alert("សូមជ្រើសរើសរូបភាពរបស់អ្នក\n(please choose Image file)");
    imagefile.focus();
    return false;
  }
  return true;
}
//******
function validSex(umsex, ufsex) {
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
  }
  return true;
}

function validatePlaceBirth(placebirth) {
  //var birthformat = /^[0-9a-zA-Z]+$/;
  //if(placebirth.value.match(birthformat))
  if (placebirth.value == "") {
    alert(
      "សូមបំពេញអាសយដ្ឋាន ទីកន្លែងកំណើតរបស់អ្នក\n(Please Enter place of birth!)"
    );
    placebirth.focus();
    return false;
  }
  return true;
}
//*******
function validateNationality(mynationality) {
  //var birthformat = /^[0-9a-zA-Z]+$/;
  //if(placebirth.value.match(birthformat))
  if (mynationality.value == "") {
    alert("សូមបំពេញ សញ្ជាតិរបស់អ្នក\n(Please Complete your Nationality!)");
    mynationality.focus();
    return false;
  }
  return true;
}
//*******
function validateIdNumber(idNumber) {
  if (idNumber.value == "") {
    alert("សូមបំពេញលេខអត្តសញ្ញាណប័ណ្ណ \n(Please Enter your ID card number)");
    idNumber.focus();
    return false;
  }
  return true;
}
//*******
function validateAddress(userAddress) {
  if (userAddress.value == "") {
    alert(
      "សូមបំពេញ អាសយដ្ឋានបច្ចុប្បន្នរបស់អ្នក\n(Please Complete your Address)"
    );
    userAddress.focus();
    return false;
  }
  return true;
}

//******
function validatePhoneNumber(usermobile, mx, my) {
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
function validateEmail(uemail) {
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
function validateParentName(userParent) {
  if (userParent.value == "") {
    alert(
      "សូមបំពេញឈ្មោះឪពុកម្ដាយ ឬអាណាព្យាបាល\n(Please Complete your Parent/Gaurdian's Name!)"
    );
    userParent.focus();
    return false;
  }
  return true;
}

//*****
function validatRelationship(userRelationship) {
  if (userRelationship.value == "") {
    alert(
      "សូមបំពេញទំនាក់ទំនងភាពជាមួយ ឪពុកម្ដាយ ឬអាណាព្យាបាលអ្នក!\n(Please Complete your Relationship!)"
    );
    userRelationship.focus();
    return false;
  }
  return true;
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
  }
  return true;
}

//******
function validateProvince(s_province) {
  if (s_province.value == "Default") {
    alert("សូមជ្រើសរើសឈ្មោះខេត្ត \n(Select your province!)");
    s_province.focus();
    return false;
  }
  return true;
}

function validatePermisstion(permis) {
  if (permis.checked == false) {
    alert(
      "សូមធានាអះអាងថាព័ត៌មានដែលបានរៀបរាប់ខាងលើពិតជាត្រឹមត្រូវ និង ពិតប្រាកដ!\n(please click Permission!)"
    );
    permis.focus();
    return false;
  }
  return true;
}
