export const sendForm = ({ formId, someElem = [] }) => {

  const form = document.getElementById((formId));
  const loaderAnimation = document.createElement('div');
  const errorText = 'Ошибка...';
  const successText = 'Спасибо! Наш менеджер cкоро с Вами свяжется';


  const validate = (list) => {
    let success = true;
    if (list) {
        list.forEach(input => {
            if (input.name === 'user_name') {
                if (/[^а-яА-Я-\s]/g.test(input.value)) {
                    success = false;
                }
            } else if (input.name === 'user_phone') {
                if (/[^0-9\-\(\)\+]/g.test(input.value)) {
                    success = false;
                }
            } else if (input.name === 'user_message') {
                if (/[^а-яА-Я-\s0-9\(\)\.\,\:\"\!\?]/g.test(input.value)) {
                    success = false;
                }
            }
        });
    }
    return success;
};


  const showMsg = (status, msg = '') => {
      loaderAnimation.classList.remove('loader-circle');
      loaderAnimation.style.color = '#fff';
      loaderAnimation.innerHTML = '';

      if (status === 'error') {
          loaderAnimation.innerHTML = `<img src="images/icons/error-close-svgrepo-com.svg" width='40px;'/> ${errorText} ${msg}`;
      } else if (status === 'success') {
          loaderAnimation.innerHTML = `<img src="images/icons/success-svgrepo-com.svg" width='40px;'/> ${successText}`;
      }

      setTimeout(() => {
          loaderAnimation.remove();
      }, 5000);
  };


  const sendData = (data) => {
      return fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
              'Content-Type': 'application/json'
          }
      }).then(res => res.json());
  };



  const submitForm = () => {
      const formElements = form.querySelectorAll('input');
      const formData = new FormData(form);
      const formBody = {};
      loaderAnimation.className = 'loader-circle';
      let temp = ''; // Проверить обратные кавычки
      for (let i = 1; i <= 1; i++) {
          temp += `<div class="loader-circle-${i}"><div></div></div>`;
      }
      loaderAnimation.innerHTML = temp;
      form.append(loaderAnimation);
      formData.forEach((val, key) => {
          formBody[key] = val;
      });



      someElem.forEach(elem => {
          const element = document.getElementById(elem.id);
          if (elem.type === 'block') {
              formBody[elem.id] = element.textContent;
          } else if (elem.type === 'input') {
              formBody[elem.id] = element.value;
          }
      });


      if (validate(formElements)) {
          sendData(formBody)
              .then(data => {
                  showMsg('success');
                  formElements.forEach(input => {
                      input.value = '';
                  });
              }).catch(err => {
                  showMsg('err', 'Данные не удалось отправить');
              });
      } else {
          showMsg('err', 'Данные не валидны');
      }
  };


  try {
      if (!form) {
          throw new Error('Верните форму, пожалуйста....');
      }
      form.addEventListener('submit', e => {
          e.preventDefault();
          submitForm();
      });
  } catch (err) {
      console.log(err.message);
  }
};

export default sendForm;