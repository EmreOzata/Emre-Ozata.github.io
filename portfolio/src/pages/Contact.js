import React, { useRef } from "react";
import emailjs from "emailjs-com";
import '../css/Contact.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h3au0qs",    // t.ex. "service_xxx"
        "template_np0l9kp",  // t.ex. "template_yyy"
        form.current,
        "hA8b8Ut4DTXr4b9FY"     
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Meddelandet har skickats! ✅");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Något gick fel ❌");
        }
      );
  };

  return (
  <div className="contact-container">
  <h2>Kontakta mig</h2>
  <form ref={form} onSubmit={sendEmail}>
    <label>Namn</label>
    <input type="text" name="user_name" required />
    
    <label>Email</label>
    <input type="email" name="user_email" required />
    
    <label>Meddelande</label>
    <textarea name="message" required />
    
    <button type="submit">Skicka</button>
  </form>

 <ToastContainer 
      position="top-right" 
      autoClose={5000} 
      hideProgressBar={false} 
      newestOnTop={false} 
      closeOnClick 
      rtl={false} 
      pauseOnFocusLoss 
      draggable 
      pauseOnHover={false} 
    />

</div>

  );
}

export default Contact;
