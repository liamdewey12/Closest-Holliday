var button = document.getElementById('go');
button.addEventListener('click', closestHoliday);

function closestHoliday() {
  var textBox = document.getElementById("closeHoliday")
  var dateString = textBox.value;
  var selectedDate = new Date(dateString);
  var selectedDateMill = selectedDate.getTime();
  var Christmas = new Date("12/25/2020");
  var ValentinesDay = new Date("02/14/2020");
  var IndependenceDay = new Date("07/04/2020");
  var NewYearsDay = new Date("01/01/2020");
  var Halloween = new Date("10/31/2020");
  var StPatricksDay = new Date("03/17/2020");
  var allHolidays = [Christmas, ValentinesDay, IndependenceDay, NewYearsDay, Halloween, StPatricksDay];
  var difference = [];

  for(let i=0; i<allHolidays.length; i++) {
    var mill = allHolidays[i].getTime();
    mill = Math.abs(mill-selectedDateMill);
    var simplify = mill/86400000;
    var days = Math.floor(simplify);
    difference[i] = days;
  }
  var closestNumb = Math.min.apply(Math, difference);
  var closest = difference.indexOf(closestNumb);
    switch (closest) {
    case 0:
       document.body.style.backgroundImage = "url('https://i.ytimg.com/vi/mOaciULGOa0/maxresdefault.jpg')";
      break;
    case 1:
       document.body.style.backgroundImage = "url('https://images.indianexpress.com/2018/02/94.jpg')";
      break;
    case 2:
       document.body.style.backgroundImage ="url('https://lh3.googleusercontent.com/proxy/4cftV2-v7sjQ2zxuTtl8rvmxyFykrVAWGedNm1VE3GLPKoX4RKF6vuTSfmd9vLfFsONBljzDRRmxK8JR5hkKo9Q5cGosgD5W49oMThoV8XfF0Jotz9LeOfoOBlKB')";
      break;
    case 3:
      document.body.style.backgroundImage = "url('https://i2.wp.com/www.cfrpc.org/wp-content/uploads/2015/11/new-year.jpg?fit=500%2C333&ssl=1')";
      break;
    case 4:
       document.body.style.backgroundImage ="url('https://image.freepik.com/free-vector/orange-halloween-banner-with-pumpkin-spider-bats_1017-21309.jpg')";
      break;
    case 5:
    document.body.style.backgroundImage = "url('https://i.ytimg.com/vi/MT3XwJcwng8/maxresdefault.jpg')";
    }


}

