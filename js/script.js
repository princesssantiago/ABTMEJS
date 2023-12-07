function btnSubmit()
{
    var select = document.getElementById("myAge").value;
    var bd = new Date(select);
    var month_diff = Date.now() - bd.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);

    var password = document.getElementById("pwd").value;
    var confirmPassword = document.getElementById("confirmpwd").value;

    if(age < 18)
    {
      alert("You are below 18 years old.");
      return false;
    }


    if (password != confirmPassword)
    {
      alert("Passwords do not match. Try Again!");
      return false;
    }

    if (age > password && age > confirmPassword)
    {
      alert("Please enter your password first.");
      return false;
    }

    else
    {
      alert("Success!");
      return true;
    }



    document.getElementById("myForm").submit();
}

function btnReset()
{
    document.getElementById("myForm").reset();
}
