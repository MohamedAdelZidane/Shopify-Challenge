

var username = document.forms['myForm']['Name'];
var pw = document.forms['myForm']['PW'];
var name_error = document.getElementById('name_error');
var pw_error = document.getElementById('pw_error');

username.addEventListener('blur', nameVerify, true);
pw.addEventListener('blur', pwVerify, true);

function validate()
      {


         if( document.myForm.Name.value == "" )
         {
            username.style.border = "2px solid red";
            document.getElementById('username_div').style.color = "red";
            name_error.textContent = 'username is required';
            document.myForm.Name.focus() ;
            return false;
         }

         
         if( document.myForm.PW.value == "" )
         {
            pw.style.border = "2px solid red";
            document.getElementById('pw_div').style.color = "red";
            pw_error.textContent = "password is required";
            pw_error.style.color = "red";
            document.myForm.PW.focus() ;
            return false;
         }
         
         if( document.myForm.PW.value.length < 8 )
         {
            pw.style.border = "2px solid red";
            document.getElementById('pw_div').style.color = "red";
            pw_error.textContent = "password must be between 8 and 24 characters";
            document.myForm.PW.focus() ;
            return false;
         }
         
         return( true );
      }

      function nameVerify() {
        if (username.value != "") {
         username.style.border = "white";
         document.getElementById('username_div').style.color = "white";
         name_error.innerHTML = "";
         return true;
        }
      }