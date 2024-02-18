let updateClock = () => {
    let currentDate = new Date();
  
    let daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let currentDay = daysOfWeek[currentDate.getDay()];
  
    let formattedDate = `${currentDate.getDate()}-${String(
      currentDate.getMonth() + 1
    ).padStart(2, "0")}-${currentDate.getFullYear()}`;
    let currentHours = String(currentDate.getHours()).padStart(2, "0");
    let currentMinutes = String(currentDate.getMinutes()).padStart(2, "0");
    let currentSeconds = String(currentDate.getSeconds()).padStart(2, "0");
  
    let currentTime = `${currentHours}:${currentMinutes}:${currentSeconds}`;
  
    document.getElementById("date").textContent = `${formattedDate}`;
    document.getElementById("time").textContent = `${currentTime}`;
    document.getElementById("day").textContent = `${currentDay}`;
  };
  
  // Update the clock every second (1000 milliseconds)
  setInterval(updateClock, 1000);
  
  // Initialize the clock immediately
  updateClock();
  