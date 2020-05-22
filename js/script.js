$(document).ready(function () {
  var readURL = function (input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $(".avatar").attr("src", e.target.result);
      };
      reader.readAsDataURL(input.files[0]);
    }
  };
  $(".file-upload").on("change", function () {
    readURL(this);
  });
  function Profile(fName, lName, phone, email, houseNumber, password) {
    this.fName = fName;
    this.lName = lName;
    this.phone = phone;
    this.email = email;
    this.houseNumber = houseNumber;
    this.password = password;
  }

  $("#submit").click(function (event) {
    event.preventDefault();
    var image = $("input#inputFileToLoad").val();
    var fName = $("input#first_name").val();
    var lName = $("input#last_name").val();
    var phone = $("input#phone").val();
    var email = $("input#emmail").val();
    var house = $("input#house").val();
    var pword = $("input#password").val();
    var pword2 = $("input#password2").val();
    if (pword !== pword2) {
      alert("unmatched password");
    }

    var tenantNames = [];
    // $("#profile").append("<img src="+"image" +"width='564px'"+"height='376px'"+"alt=''>");
    var profile = new Profile(fName, lName, phone, email, house, password);
    tenantNames.push(profile);
    console.log(tenantNames);

    $("#tenant1").text(tenantNames[0].fName + tenantNames[0].lName);
    $("#tenantFName1").text(tenantNames[0].fName);
    $("#tenantLName1").text(tenantNames[0].lName);
    $("#tenantPhoneNumber1").text(tenantNames[0].phone);
    $("#tenantHouseNumber1").text(tenantNames[0].houseNumber);
    $("#tenantEmail1").text(tenantNames[0].email);
  });

  $("#send").click(function (event) {
    event.preventDefault();
    var name = $("#defaultContactFormName").val();
    var email = $("#defaultContactFormEmail").val();
    var message = $("#exampleFormControlTextarea2").val();
    var feedback = $("#feedback").val();
    alert(
      "Thank you " + name + ". For your Concerns, We'll get back to you soon!"
    );
  });
  $("#login").click(function (event) {
    event.preventDefault();
    var email = $("#email1").val();
    var password = $("#password1").val();
    if (email !== null && password !== null) {
        window.location.href = "profile.html";
    } else {
     
      alert("enter your email and password");
    }
  });
});
