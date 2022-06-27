const validation = () => {

    const calcBlockInput= document.querySelectorAll(".calc-block >input");
    const userName = document.querySelectorAll("input[name = user_name]");
    const email = document.querySelectorAll("input[name = user_email]");
    const phone = document.querySelectorAll("input[name = user_phone]");
  

    calcBlockInput.forEach((item) => {
      item.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/\D+/, "");
      });
    });
  

    userName.forEach((name) => {
      name.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/[^а-я -]/gi, "");
      });
    });
  

    email.forEach((item) => {
      item.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/[^\w@-_.!~*]/gi, "");
      });
    });
  

    phone.forEach((item) => {
      item.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/[^()-\d]/g, "");
      });
    });
    
  };

export default validation;
