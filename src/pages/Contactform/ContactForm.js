import React, { useState } from "react";
import img from "../../assets/images/contact.avif";
import "./style.css";

const ContactForm = () => {
  const [userdata, setUserdata] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  let name, value ;
  const postUserData = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUserdata({...userdata, [name]: value });
  };

  const Submitdata = async (e) => {
    e.preventDefault();
    const {name, email, message} = userdata;


    if (name && email && message ) {

    
    const res =
    fetch ('https://ecom-1c958-default-rtdb.firebaseio.com/contactform.json',
   { method:"POST",
    Headers: {
      "content-type" : "application/json",
    },
    body:JSON.stringify({
      name, email, message
    })
  }
    )

   if (res) {
    setUserdata({
      name: "",
    email: "",
    message: "",
    });
      alert("Data Stored")
    } else {
      alert("plz fill data")
    }
  } else {
    alert("plz fill data")
  }
  }

  return (
    <div className="contact-container">
      <img className="background-image" src={img} alt="Background" />
      <div className="form-container">
        <h1>Contact Us</h1>
        <form method="POST">
          <label htmlFor="name">Name:</label>
          <input type="text" 
          id="name" 
          name="name" 
          placeholder="Your Name"
          value={userdata.name}
          onChange={postUserData} />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            value={userdata.email}
            onChange={postUserData}
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            value={userdata.message}
            onChange={postUserData}
          ></textarea>

          <button type="submit" onClick={Submitdata}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
