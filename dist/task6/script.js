const timer = () => {
    const greetings = document.querySelector("#greetings");

    const time = document.querySelector("#time_now");

    const newYearDay = document.querySelector("#newYearDay");
  
    const endOftheTimer = "1 January 2023";

    const dateNow       = new Date();
    
    const dateNewYear   = new Date(endOftheTimer);

     
  
    const getTimeRemaining = function () {
      let greetings;
      let dayWeeks;

      const newYear =   Math.floor((dateNewYear - dateNow) / 1000 / 60 / 60 / 24); // Calculating date until NYE

      let dayWeek   =   dateNow.getDay();             // Actual day

      let timeNow   =   dateNow.toLocaleTimeString(); // Actual time

      let hours     =   dateNow.getHours();



    // Get the week
      const week = [
        "понедельник",
        "вторник",
        "среда",
        "четверг",
        "пятница",
        "суббота",
        "воскресенье",
      ];
  
      for (let index in week) {
        if (dayWeek == index) {
          dayWeeks = week[index - 1];
        }
      };



      // Check the day time

      if (hours <= 6) {
        greetings = "Доброй ночи";

      } else if (hours <= 12) {
        greetings = "Доброе утро";

      } else if (hours <= 18) {
        greetings = "Добрый день";

      } else {
        greetings = "Добрый вечер";
      };

  
      // Return data obj.

      return { greetings, dayWeeks, timeNow, newYear };
    };
  

    // Display on the page

    const updateClock = () => {
      
      let getTime = getTimeRemaining();
  
      greetings.textContent     =   `${getTime.greetings}! Сегодня ${getTime.dayWeeks}`;

      time.textContent          =   ` Текущее время: ${getTime.timeNow} `;

      newYearDay.textContent    =   ` До Нового Года осталось ${getTime.newYear} дня `;
    };

    updateClock();

  };


  setInterval(timer, 1000);