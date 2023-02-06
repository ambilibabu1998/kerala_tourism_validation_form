let email = document.getElementById("floatingInput1");
let error= document.getElementById("error");
let phoneno = document.getElementById("floatingInput2")
let error1 = document.getElementById("error1");
let submit =document.getElementById("submit");
let password = document.getElementById("floatingPassword");
let error2 = document.getElementById("error2");
let strength = document.getElementById("strength");
let loginemail = document.getElementById("exampleInputEmail1");
let errors = document.getElementById("errors");
let loginpassword = document.getElementById("exampleInputPassword2");
let errors1 = document.getElementById("errors1");
let strength1 = document.getElementById("strength1");




function validateemail(){
  let regexp =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
 
  if (regexp.test(email.value)){
    error.innerHTML = "Valid Email Address";
    error.style.color="white";
    error.style.border="2px"
    error.style.backgroundColor="green"
    return true;
  }
  else{
    error.innerHTML ="Invalid Email address";
    error.style.color="white";
    error.style.border="2px"
    error.style.backgroundColor="red"
    return false

  }
  }

  function validatephoneno(){
        let regexp1 =/^\d{10}$/
        let regexp2 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
        let regExp5= /^[A-Za-z]+$/

        if (regexp1.test(phoneno.value.trim())){
          error1.innerHTML = "Valid Phone Number";
          error1.style.color="white";
           error1.style.border="2px"
           error1.style.backgroundColor="green"
          return true;


        }
    
       else if (regexp2.test(phoneno.value.trim())){
        error1.innerHTML = "Valid Phone Number";
        error1.style.color="white";
         error1.style.border="2px"
         error1.style.backgroundColor="green"
        return true;
       }
       else if( regExp5.test(phoneno.value.trim())){
       error1.innerHTML = "Should contain numbers only";
        error1.style.color="white";
         error1.style.border="2px"
         error1.style.backgroundColor="red"
        return false;
       }
      



    
    else{
      error1.innerHTML ="Invalid Phone Number";
      error1.style.color="white";
      error1.style.border="2px"
      error1.style.backgroundColor="red"
      return false
    
    }
  }
    
    function validatepassword(){
      let regexp3 =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
      let regexp4 =/^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))$/
      
      if(regexp3.test(password.value.trim())){
          error2.innerHTML = "Valid Password";
          error2.style.color="white";
         error2.style.border="2px"
           error2.style.backgroundColor="green"
          strength.innerHTML = "Strong"
          error2.style.color="white";
          strength.style.color="white";
          strength.style.border ="2px"
          strength.style.backgroundColor ="green"
          return true;
        }

        else if(regexp4.test(password.value.trim())){
          
          strength.innerHTML = "Medium"
          
          strength.style.color="white";
          strength.style.border ="2px"
          strength.style.backgroundColor ="orange"
          return true;
        }

        
        else {
          error2.innerHTML ="Password should contain atleast 8 characters  at least one uppercase, and one lower case, at least one number";
          error2.style.color="red";
          strength.innerHTML = "Weak";
          strength.style.color="white";
          strength.style.border ="2px";
          strength.style.backgroundColor ="red";
          return false;
        
        }
      }


        
   
  
function validateform(){
  if(!validateemail()|| !validatephoneno()|| !validatepassword()){
    return false

  }
  else{
    return true
  }
}

function validateloginemail(){
  let login =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
 
  if (login.test(loginemail.value)){
    errors.innerHTML = "Valid Email Address";
    errors.style.color="white";
    errors.style.border="2px"
    errors.style.backgroundColor="green"
    return true;
  }
  else{
    errors.innerHTML ="Invalid Email address";
    errors.style.color="white";
    errors.style.border="2px"
    errors.style.backgroundColor="red"
    return false

  }
  }
  function validateloginpassword(){
    let login1 =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
    let login2 =/^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))$/
    
    if(login1.test(loginpassword.value.trim())){
        errors1.innerHTML = "Valid Password";
        errors1.style.color="white";
        errors1.style.border="2px"
        errors1.style.backgroundColor="green"
        strength1.innerHTML = "Strong"
        errors1.style.color="white";
        strength1.style.color="white";
        strength1.style.border ="2px"
        strength1.style.backgroundColor ="green"
        return true;
      }

      else if(login2.test(loginpassword.value.trim())){
        
        strength1.innerHTML = "Medium"
        
        strength1.style.color="white";
        strength1.style.border ="2px"
        strength1.style.backgroundColor ="orange"
        return true;
      }

      
      else {
        errors1.innerHTML ="Password should contain atleast 8 characters  at least one uppercase, and one lower case, at least one number";
        errors1.style.color="red";
        strength1.innerHTML = "Weak";
        strength1.style.color="white";
        strength1.style.border ="2px";
        strength1.style.backgroundColor ="red";
        return false;
      
      }
    }
    function validateloginform(){
      if(!validateloginemail()||  !validateloginpassword()){
        return false
    
      }
      else{
        return true
      }
    }


 
