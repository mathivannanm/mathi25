function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      phone: document.getElementById("phone").value,
      gender: document.getElementById("gender").value,
      age: document.getElementById("age").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_h2gkqd2";
    const templateID = "template_4967afs";
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("phone").value = "";
          document.getElementById("gender").value = "";
          document.getElementById("age").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }