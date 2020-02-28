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
  var link = "";
    switch (closest) {
    case 0:
      link = "https://i.ytimg.com/vi/mOaciULGOa0/maxresdefault.jpg";
      break;
    case 1:
      link = "https://images.indianexpress.com/2018/02/94.jpg";
      break;
    case 2:
      link = "https://www.gannett-cdn.com/-mm-/0fd900cae7641af31d0236bc2814bd3b268ef9b1/c=0-215-1732-1517/local/-/media/2018/07/02/SNJGroup/Vineland/636661463093247105-FourthofJuly.jpg?width=534&height=401&fit=crop";
      break;
    case 3:
     link = "https://i2.wp.com/www.cfrpc.org/wp-content/uploads/2015/11/new-year.jpg?fit=500%2C333&ssl=1";
      break;
    case 4:
      link = "https://static.vecteezy.com/system/resources/previews/000/509/139/original/halloween-pumpkins-and-dark-castle-on-background-happy-halloween-message-design-illustration-vector.jpg";
      break;
    case 5:
      link = "https://i.ytimg.com/vi/MT3XwJcwng8/maxresdefault.jpg";
    }
 document.body.style.backgroundImage = link;


}

