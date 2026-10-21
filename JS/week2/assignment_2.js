

  // Event application
  function getEventWeekday(daysFromToday) {
    const eventDate = new Date();
    eventDate.setDate(eventDate.getDate() + daysFromToday);

    const weekdays = [
      "Sunday", "Monday", "Tuesday", "Wednesday",
      "Thursday", "Friday", "Saturday"
    ];

    return weekdays[eventDate.getDay()];
  }

  console.log(getEventWeekday(9));
  console.log(getEventWeekday(2));
