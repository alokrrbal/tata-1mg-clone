// this code is for fast image sliding part

var myIndex = 0;
    carousel();
    
    function carousel() {
      var i;
      var x = document.getElementsByClassName("mySlides");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
      }
      myIndex++;
      if (myIndex > x.length) {myIndex = 1}    
      x[myIndex-1].style.display = "block";  
      setTimeout(carousel, 1500); // Change image every 1.5 seconds
    }

    let nimg1=  document.getElementById("nimg1");



    // this is signup pop part

    // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// this is login pop part
    // Get the modal
    var modal2 = document.getElementById("myModal2");

    // Get the button that opens the modal
    var btn2 = document.getElementById("myBtn2");
    
    // Get the <span> element that closes the modal
    var span2 = document.getElementsByClassName("close2")[0];
    
    // When the user clicks the button, open the modal 
    btn2.onclick = function() {
      modal2.style.display = "block";
    }
    
    // When the user clicks on <span> (x), close the modal
    span2.onclick = function() {
      modal2.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal2) {
        modal2.style.display = "none";
      }
    }


    // signup js part
    
    document.getElementById("btn").addEventListener("click",()=>{
      let user = JSON.parse(localStorage.getItem("user")) || []
      let isnew = true
      let ename= document.getElementById("name").value 
      for(let i=0;i<user.length;i++){
        if(user[i].name==ename){
          isnew=false
        }
      }
      if(isnew){
        user.push({
          name:ename,
          email:document.getElementById("email").value,
          pass:document.getElementById("pass").value
        })
        localStorage.setItem("user",JSON.stringify(user))
        alert("Sign Up Done You Can Log In Now")
      }else{
        alert("Already SignedUp")
      }
    })

    // Login js part

    document.getElementById("btn2").addEventListener("click",()=>{
      let user = JSON.parse(localStorage.getItem("user")) || []
      let eemail = document.getElementById("eemail").value
      let epass = document.getElementById("epass").value
      let isvaild=false
      for(let i=0;i<user.length;i++){
        if(user[i].email==eemail){
          if(user[i].pass==epass){
            isvaild=true
          }
        }
      }
      if(isvaild){
        alert("Login Successfull")
      }else{
        alert("Wrong Credentials")
      }
    })

