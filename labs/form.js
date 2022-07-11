var loginform = document.getElementById("loginform");
// {
//     username:"jyoti"
//     password:"1996"
// }

loginform.addEventListener("submit",function(e){
    e.preventDefault();

    //var uservalue=document.getElementById("username").value;
    // var uservalue = document.getElementById("username");
    // console.log(uservalue.value)

    // console.log(loginform.elements['username'].value)

    var firstname = loginform.elements['fname'].value;
    if(firstname.length < 6){
        console.log("username must be 6 characters")
        return null;
    }

    // radioButton.addEventListener('change', function (e) {
    //     if (this.checked) {
    //       console.log(this.value);
    //     }
    //   });

  //   function showSelected(e) {
  //     console.log(e);
  //     if (this.checked) {
  //         document.querySelector('#output').innerText = `You selected ${this.value}`;
  //     }
  // }

    
    var lastname = loginform.elements['lname'];
    var phoneno = loginform.elements['phn'];
    var emailadd = loginform.elements['email'];
    var dobirth = loginform.elements['dob'];
    var doappt = loginform.elements['doa'];
    var toappt = loginform.elements['toa'];

    var loginData = {
        //uname is property name
        fname: firstname,
        lname: lastname,
        e_add: emailadd,
        phn: phn,
        dateOfBirth:dobirth,
        dateOfappt:doappt,
        timeoappt:toappt
    }
    console.log(loginData)
    console.log(JSON.stringify(loginData))
})

// var loginData = {
//     username,
//     password
// }
// console.log(logingData)})


//blur event
// opens the page

var data=localStorage.getItem("loginData")
FormData.elements["name"].value = data.name
localStorage.setItem("loginData",JSON.stringify(loginData))







