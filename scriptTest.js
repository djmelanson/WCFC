/*  Set constant variables and assign some to HTML tags  */
const gw1ScheduleDay = document.querySelector("#gw1-schedule-day");
const gw1TimeString = document.querySelector("#gw1-time-string");
const gw1Home = document.querySelector("#gw1-home");
const gw1Score = document.querySelector("#gw1-score");
const gw1Away = document.querySelector("#gw1-away");
const gw1Field = document.querySelector("#gw1-field");

const gw2ScheduleDay = document.querySelector("#gw2-schedule-day");
const gw2TimeString = document.querySelector("#gw2-time-string");
const gw2Home = document.querySelector("#gw2-home");
const gw2Score = document.querySelector("#gw2-score");
const gw2Away = document.querySelector("#gw2-away");
const gw2Field = document.querySelector("#gw2-field");

const gw3ScheduleDay = document.querySelector("#gw3-schedule-day");
const gw3TimeString = document.querySelector("#gw3-time-string");
const gw3Home = document.querySelector("#gw3-home");
const gw3Score = document.querySelector("#gw3-score");
const gw3Away = document.querySelector("#gw3-away");
const gw3Field = document.querySelector("#gw3-field");

const gw4ScheduleDay = document.querySelector("#gw4-schedule-day");
const gw4TimeString = document.querySelector("#gw4-time-string");
const gw4Home = document.querySelector("#gw4-home");
const gw4Score = document.querySelector("#gw4-score");
const gw4Away = document.querySelector("#gw4-away");
const gw4Field = document.querySelector("#gw4-field");

const gw5ScheduleDay = document.querySelector("#gw5-schedule-day");
const gw5TimeString = document.querySelector("#gw5-time-string");
const gw5Home = document.querySelector("#gw5-home");
const gw5Score = document.querySelector("#gw5-score");
const gw5Away = document.querySelector("#gw5-away");
const gw5Field = document.querySelector("#gw5-field");

const gw6ScheduleDay = document.querySelector("#gw6-schedule-day");
const gw6TimeString = document.querySelector("#gw6-time-string");
const gw6Home = document.querySelector("#gw6-home");
const gw6Score = document.querySelector("#gw6-score");
const gw6Away = document.querySelector("#gw6-away");
const gw6Field = document.querySelector("#gw6-field");

const gw7ScheduleDay = document.querySelector("#gw7-schedule-day");
const gw7TimeString = document.querySelector("#gw7-time-string");
const gw7Home = document.querySelector("#gw7-home");
const gw7Score = document.querySelector("#gw7-score");
const gw7Away = document.querySelector("#gw7-away");
const gw7Field = document.querySelector("#gw7-field");

const gw8ScheduleDay = document.querySelector("#gw8-schedule-day");
const gw8TimeString = document.querySelector("#gw8-time-string");
const gw8Home = document.querySelector("#gw8-home");
const gw8Score = document.querySelector("#gw8-score");
const gw8Away = document.querySelector("#gw8-away");
const gw8Field = document.querySelector("#gw8-field");

const gw9ScheduleDay = document.querySelector("#gw9-schedule-day");
const gw9TimeString = document.querySelector("#gw9-time-string");
const gw9Home = document.querySelector("#gw9-home");
const gw9Score = document.querySelector("#gw9-score");
const gw9Away = document.querySelector("#gw9-away");
const gw9Field = document.querySelector("#gw9-field");

const wcfc = "Worcester County FC";
const upcomingGameDate = document.querySelector("#upcoming-game-date");
const upcomingGameOpponent = document.querySelector("#upcoming-game-opponent");
const upcomingGameTime = document.querySelector("#upcoming-game-time");
const upcomingGameLocation = document.querySelector("#upcoming-game-location");
const todayDate = new Date().getTime();
const now = Math.floor(todayDate / (1000*60*60*24));


/* Set game dates */
const gameWeek1Date = "January 10, 2021 24:30:00";
const gameWeek2Date = "January 20, 2021 09:30:00";
const gameWeek3Date = "February 03, 2021 09:00:00";
const gameWeek4Date = "February 10, 2021 12:00:00";
const gameWeek5Date = "October 17, 2021 09:00:00";
const gameWeek6Date = "October 24, 2021 14:00:00";
const gameWeek7Date = "October 31, 2021 12:00:00";
const gameWeek8Date = "November 14, 2021 11:00:00";
const gameWeek9Date = "November 21, 2021 12:00:00";

/* Configures the different times, hours, minutes needed */
const gameWeek1DateYear = gameWeek1Date.substring(0, gameWeek1Date.length - 9);
const gameWeek1TimeWithSeconds = gameWeek1Date.substring(gameWeek1Date.length - 9);
const gameWeek1Time = gameWeek1TimeWithSeconds.substring(0, gameWeek1TimeWithSeconds.length - 3);
const gameWeek1Hour = gameWeek1TimeWithSeconds.substring(0, gameWeek1TimeWithSeconds.length - 5);
const gameWeek1Minutes = gameWeek1Time.substring(gameWeek1Time.length - 3);
const gameWeek1DateTime = new Date(gameWeek1Date).getTime();
const gameWeek1DateNumber = Math.floor(gameWeek1DateTime / (1000*60*60*24));
const gameWeek1HourNumber = parseInt(gameWeek1Time);

const gameWeek2DateYear = gameWeek2Date.substring(0, gameWeek2Date.length - 9);
const gameWeek2TimeWithSeconds = gameWeek2Date.substring(gameWeek2Date.length - 9);
const gameWeek2Time = gameWeek2TimeWithSeconds.substring(0, gameWeek2TimeWithSeconds.length - 3);
const gameWeek2Hour = gameWeek2TimeWithSeconds.substring(0, gameWeek2TimeWithSeconds.length - 5);
const gameWeek2Minutes = gameWeek2Time.substring(gameWeek2Time.length - 3);
const gameWeek2DateTime = new Date(gameWeek2Date).getTime();
const gameWeek2DateNumber = Math.floor(gameWeek2DateTime / (1000*60*60*24));
const gameWeek2HourNumber = parseInt(gameWeek2Time);

const gameWeek3DateYear = gameWeek3Date.substring(0, gameWeek3Date.length - 9);
const gameWeek3TimeWithSeconds = gameWeek3Date.substring(gameWeek3Date.length - 9);
const gameWeek3Time = gameWeek3TimeWithSeconds.substring(0, gameWeek3TimeWithSeconds.length - 3);
const gameWeek3Hour = gameWeek3TimeWithSeconds.substring(0, gameWeek3TimeWithSeconds.length - 5);
const gameWeek3Minutes = gameWeek3Time.substring(gameWeek3Time.length - 3);
const gameWeek3DateTime = new Date(gameWeek3Date).getTime();
const gameWeek3DateNumber = Math.floor(gameWeek3DateTime / (1000*60*60*24));
const gameWeek3HourNumber = parseInt(gameWeek3Time);

const gameWeek4DateYear = gameWeek4Date.substring(0, gameWeek4Date.length - 9);
const gameWeek4TimeWithSeconds = gameWeek4Date.substring(gameWeek4Date.length - 9);
const gameWeek4Time = gameWeek4TimeWithSeconds.substring(0, gameWeek4TimeWithSeconds.length - 3);
const gameWeek4Hour = gameWeek4TimeWithSeconds.substring(0, gameWeek4TimeWithSeconds.length - 5);
const gameWeek4Minutes = gameWeek4Time.substring(gameWeek4Time.length - 3);
const gameWeek4DateTime = new Date(gameWeek4Date).getTime();
const gameWeek4DateNumber = Math.floor(gameWeek4DateTime / (1000*60*60*24));
const gameWeek4HourNumber = parseInt(gameWeek4Time);

const gameWeek5DateYear = gameWeek5Date.substring(0, gameWeek5Date.length - 9);
const gameWeek5TimeWithSeconds = gameWeek5Date.substring(gameWeek5Date.length - 9);
const gameWeek5Time = gameWeek5TimeWithSeconds.substring(0, gameWeek5TimeWithSeconds.length - 3);
const gameWeek5Hour = gameWeek5TimeWithSeconds.substring(0, gameWeek5TimeWithSeconds.length - 5);
const gameWeek5Minutes = gameWeek5Time.substring(gameWeek5Time.length - 3);
const gameWeek5DateTime = new Date(gameWeek5Date).getTime();
const gameWeek5DateNumber = Math.floor(gameWeek5DateTime / (1000*60*60*24));
const gameWeek5HourNumber = parseInt(gameWeek5Time);

const gameWeek6DateYear = gameWeek6Date.substring(0, gameWeek6Date.length - 9);
const gameWeek6TimeWithSeconds = gameWeek6Date.substring(gameWeek6Date.length - 9);
const gameWeek6Time = gameWeek6TimeWithSeconds.substring(0, gameWeek6TimeWithSeconds.length - 3);
const gameWeek6Hour = gameWeek6TimeWithSeconds.substring(0, gameWeek6TimeWithSeconds.length - 5);
const gameWeek6Minutes = gameWeek6Time.substring(gameWeek6Time.length - 3);
const gameWeek6DateTime = new Date(gameWeek6Date).getTime();
const gameWeek6DateNumber = Math.floor(gameWeek6DateTime / (1000*60*60*24));
const gameWeek6HourNumber = parseInt(gameWeek6Time);

const gameWeek7DateYear = gameWeek7Date.substring(0, gameWeek7Date.length - 9);
const gameWeek7TimeWithSeconds = gameWeek7Date.substring(gameWeek7Date.length - 9);
const gameWeek7Time = gameWeek7TimeWithSeconds.substring(0, gameWeek7TimeWithSeconds.length - 3);
const gameWeek7Hour = gameWeek7TimeWithSeconds.substring(0, gameWeek7TimeWithSeconds.length - 5);
const gameWeek7Minutes = gameWeek7Time.substring(gameWeek7Time.length - 3);
const gameWeek7DateTime = new Date(gameWeek7Date).getTime();
const gameWeek7DateNumber = Math.floor(gameWeek7DateTime / (1000*60*60*24));
const gameWeek7HourNumber = parseInt(gameWeek7Time);

const gameWeek8DateYear = gameWeek8Date.substring(0, gameWeek8Date.length - 9);
const gameWeek8TimeWithSeconds = gameWeek8Date.substring(gameWeek8Date.length - 9);
const gameWeek8Time = gameWeek8TimeWithSeconds.substring(0, gameWeek8TimeWithSeconds.length - 3);
const gameWeek8Hour = gameWeek8TimeWithSeconds.substring(0, gameWeek8TimeWithSeconds.length - 5);
const gameWeek8Minutes = gameWeek8Time.substring(gameWeek8Time.length - 3);
const gameWeek8DateTime = new Date(gameWeek8Date).getTime();
const gameWeek8DateNumber = Math.floor(gameWeek8DateTime / (1000*60*60*24));
const gameWeek8HourNumber = parseInt(gameWeek8Time);

const gameWeek9DateYear = gameWeek9Date.substring(0, gameWeek9Date.length - 9);
const gameWeek9TimeWithSeconds = gameWeek9Date.substring(gameWeek9Date.length - 9);
const gameWeek9Time = gameWeek9TimeWithSeconds.substring(0, gameWeek9TimeWithSeconds.length - 3);
const gameWeek9Hour = gameWeek9TimeWithSeconds.substring(0, gameWeek9TimeWithSeconds.length - 5);
const gameWeek9Minutes = gameWeek9Time.substring(gameWeek9Time.length - 3);
const gameWeek9DateTime = new Date(gameWeek9Date).getTime();
const gameWeek9DateNumber = Math.floor(gameWeek9DateTime / (1000*60*60*24));
const gameWeek9HourNumber = parseInt(gameWeek9Time);

/* Configures the different dates needed */
const gameWeek1DayNumber = gameWeek1DateYear.slice(-8);
const gameWeek1DayInteger = parseInt(gameWeek1DayNumber);
const gameWeek1Month = gameWeek1DateYear.slice(0,3);
const gameWeek1ScheduleDay = gameWeek1Month + "-" + gameWeek1DayInteger;
const gameWeek1FullMonthDate = gameWeek1DateYear.slice(0,-6);

const gameWeek2DayNumber = gameWeek2DateYear.slice(-8);
const gameWeek2DayInteger = parseInt(gameWeek2DayNumber);
const gameWeek2Month = gameWeek2DateYear.slice(0,3);
const gameWeek2ScheduleDay = gameWeek2Month + "-" + gameWeek2DayInteger;
const gameWeek2FullMonthDate = gameWeek2DateYear.slice(0,-6);

const gameWeek3DayNumber = gameWeek3DateYear.slice(-8);
const gameWeek3DayInteger = parseInt(gameWeek3DayNumber);
const gameWeek3Month = gameWeek3DateYear.slice(0,3);
const gameWeek3ScheduleDay = gameWeek3Month + "-" + gameWeek3DayInteger;
const gameWeek3FullMonthDate = gameWeek3DateYear.slice(0,-6);

const gameWeek4DayNumber = gameWeek4DateYear.slice(-8);
const gameWeek4DayInteger = parseInt(gameWeek4DayNumber);
const gameWeek4Month = gameWeek4DateYear.slice(0,3);
const gameWeek4ScheduleDay = gameWeek4Month + "-" + gameWeek4DayInteger;
const gameWeek4FullMonthDate = gameWeek4DateYear.slice(0,-6);

const gameWeek5DayNumber = gameWeek5DateYear.slice(-8);
const gameWeek5DayInteger = parseInt(gameWeek5DayNumber);
const gameWeek5Month = gameWeek5DateYear.slice(0,3);
const gameWeek5ScheduleDay = gameWeek5Month + "-" + gameWeek5DayInteger;
const gameWeek5FullMonthDate = gameWeek5DateYear.slice(0,-6);

const gameWeek6DayNumber = gameWeek6DateYear.slice(-8);
const gameWeek6DayInteger = parseInt(gameWeek6DayNumber);
const gameWeek6Month = gameWeek4DateYear.slice(0,3);
const gameWeek6ScheduleDay = gameWeek6Month + "-" + gameWeek6DayInteger;
const gameWeek6FullMonthDate = gameWeek6DateYear.slice(0,-6);

const gameWeek7DayNumber = gameWeek7DateYear.slice(-8);
const gameWeek7DayInteger = parseInt(gameWeek7DayNumber);
const gameWeek7Month = gameWeek4DateYear.slice(0,3);
const gameWeek7ScheduleDay = gameWeek7Month + "-" + gameWeek7DayInteger;
const gameWeek7FullMonthDate = gameWeek7DateYear.slice(0,-6);

const gameWeek8DayNumber = gameWeek8DateYear.slice(-8);
const gameWeek8DayInteger = parseInt(gameWeek8DayNumber);
const gameWeek8Month = gameWeek8DateYear.slice(0,3);
const gameWeek8ScheduleDay = gameWeek8Month + "-" + gameWeek8DayInteger;
const gameWeek8FullMonthDate = gameWeek8DateYear.slice(0,-6);

const gameWeek9DayNumber = gameWeek9DateYear.slice(-8);
const gameWeek9DayInteger = parseInt(gameWeek9DayNumber);
const gameWeek9Month = gameWeek9DateYear.slice(0,3);
const gameWeek9ScheduleDay = gameWeek9Month + "-" + gameWeek9DayInteger;
const gameWeek9FullMonthDate = gameWeek9DateYear.slice(0,-6);

/* If the hour is higher than 12, subtract 12 from it */
if (gameWeek1HourNumber > 12) {
  gameWeek1HourInteger = (gameWeek1HourNumber - 12)
} else {
  gameWeek1HourInteger = gameWeek1HourNumber;
}

if (gameWeek2HourNumber > 12) {
  gameWeek2HourInteger = (gameWeek2HourNumber - 12)
} else {
  gameWeek2HourInteger = gameWeek2HourNumber;
}

if (gameWeek3HourNumber > 12) {
  gameWeek3HourInteger = (gameWeek3HourNumber - 12)
} else {
  gameWeek3HourInteger = gameWeek3HourNumber;
}

if (gameWeek4HourNumber > 12) {
  gameWeek4HourInteger = (gameWeek4HourNumber - 12)
} else {
  gameWeek4HourInteger = gameWeek4HourNumber;
}

if (gameWeek5HourNumber > 12) {
  gameWeek5HourInteger = (gameWeek5HourNumber - 12)
} else {
  gameWeek5HourInteger = gameWeek5HourNumber;
}

if (gameWeek6HourNumber > 12) {
  gameWeek6HourInteger = (gameWeek6HourNumber - 12)
} else {
  gameWeek6HourInteger = gameWeek6HourNumber;
}

if (gameWeek7HourNumber > 12) {
  gameWeek7HourInteger = (gameWeek7HourNumber - 12)
} else {
  gameWeek7HourInteger = gameWeek7HourNumber;
}

if (gameWeek8HourNumber > 12) {
  gameWeek8HourInteger = (gameWeek8HourNumber - 12)
} else {
  gameWeek8HourInteger = gameWeek8HourNumber;
}

if (gameWeek9HourNumber > 12) {
  gameWeek9HourInteger = (gameWeek9HourNumber - 12)
} else {
  gameWeek9HourInteger = gameWeek9HourNumber;
}

/* Convert the hour number to a string */
const gameWeek1HourString = gameWeek1HourInteger.toString();
const gameWeek2HourString = gameWeek2HourInteger.toString();
const gameWeek3HourString = gameWeek3HourInteger.toString();
const gameWeek4HourString = gameWeek4HourInteger.toString();
const gameWeek5HourString = gameWeek5HourInteger.toString();
const gameWeek6HourString = gameWeek6HourInteger.toString();
const gameWeek7HourString = gameWeek7HourInteger.toString();
const gameWeek8HourString = gameWeek8HourInteger.toString();
const gameWeek9HourString = gameWeek9HourInteger.toString();

/* If game start time is 24 or 1-11, add am, otherwise add pm */
if(gameWeek1HourNumber > 23) {
  gameWeek1TimeString = gameWeek1HourString + gameWeek1Minutes + "am";
} else if (gameWeek1HourNumber > 11) {
  gameWeek1TimeString = gameWeek1HourString + gameWeek1Minutes + "pm";  
} else {
  gameWeek1TimeString = gameWeek1HourString + gameWeek1Minutes + "am";
}

if(gameWeek2HourNumber > 23) {
  gameWeek2TimeString = gameWeek2HourString + gameWeek2Minutes + "am";
} else if (gameWeek2HourNumber > 11) {
  gameWeek2TimeString = gameWeek2HourString + gameWeek2Minutes + "pm";  
} else {
  gameWeek2TimeString = gameWeek2HourString + gameWeek2Minutes + "am";
}

if(gameWeek3HourNumber > 23) {
  gameWeek3TimeString = gameWeek3HourString + gameWeek3Minutes + "am";
} else if (gameWeek3HourNumber > 11) {
  gameWeek3TimeString = gameWeek3HourString + gameWeek3Minutes + "pm";  
} else {
  gameWeek3TimeString = gameWeek3HourString + gameWeek3Minutes + "am";
}

if(gameWeek4HourNumber > 23) {
  gameWeek4TimeString = gameWeek4HourString + gameWeek4Minutes + "am";
} else if (gameWeek4HourNumber > 11) {
  gameWeek4TimeString = gameWeek4HourString + gameWeek4Minutes + "pm";  
} else {
  gameWeek4TimeString = gameWeek4HourString + gameWeek4Minutes + "am";
}

if(gameWeek5HourNumber > 23) {
  gameWeek5TimeString = gameWeek5HourString + gameWeek5Minutes + "am";
} else if (gameWeek5HourNumber > 11) {
  gameWeek5TimeString = gameWeek5HourString + gameWeek5Minutes + "pm";  
} else {
  gameWeek5TimeString = gameWeek5HourString + gameWeek5Minutes + "am";
}

if(gameWeek6HourNumber > 23) {
  gameWeek6TimeString = gameWeek6HourString + gameWeek6Minutes + "am";
} else if (gameWeek6HourNumber > 11) {
  gameWeek6TimeString = gameWeek6HourString + gameWeek6Minutes + "pm";  
} else {
  gameWeek6TimeString = gameWeek6HourString + gameWeek6Minutes + "am";
}

if(gameWeek7HourNumber > 23) {
  gameWeek7TimeString = gameWeek7HourString + gameWeek7Minutes + "am";
} else if (gameWeek7HourNumber > 11) {
  gameWeek7TimeString = gameWeek7HourString + gameWeek7Minutes + "pm";  
} else {
  gameWeek7TimeString = gameWeek7HourString + gameWeek7Minutes + "am";
}

if(gameWeek8HourNumber > 23) {
  gameWeek8TimeString = gameWeek8HourString + gameWeek8Minutes + "am";
} else if (gameWeek8HourNumber > 11) {
  gameWeek8TimeString = gameWeek8HourString + gameWeek8Minutes + "pm";  
} else {
  gameWeek8TimeString = gameWeek8HourString + gameWeek8Minutes + "am";
}

if(gameWeek9HourNumber > 23) {
  gameWeek9TimeString = gameWeek9HourString + gameWeek9Minutes + "am";
} else if (gameWeek9HourNumber > 11) {
  gameWeek9TimeString = gameWeek9HourString + gameWeek9Minutes + "pm";  
} else {
  gameWeek9TimeString = gameWeek9HourString + gameWeek9Minutes + "am";
}

/* Set game info */
const gameWeek1 = {homeTeam: "North Shore FC", awayTeam: wcfc, opponent: "@ North Shore FC", field: "Harry Della Russo Stadium, Revere", homeScore: "-", awayScore: "-"};
const gameWeek2 = {homeTeam: "FC Hawks", awayTeam: wcfc, opponent: "@ FC Hawks", field: "Edge Sports Center, Bedford", score: "- v -"};
const gameWeek3 = {homeTeam: wcfc, awayTeam: "Inter Boston FC", opponent: "v Inter Boston FC", field: "Klingle Field, Paxton", score: "- v -"};
const gameWeek4 = {homeTeam: "Eastern Mass FC", awayTeam: wcfc, opponent: "@ Eastern Mass FC", field: "Knoll Field, Melrose", score: "- v -"};
const gameWeek5 = {homeTeam: wcfc, awayTeam: "Worcester Warriors", opponent: "v Worcester Warriors", field: "Klingle Field, Paxton", score: "- v -"};
const gameWeek6 = {homeTeam: "SR Young Boys", awayTeam: wcfc, opponent: "@ SR Young Boys", field: "Amesbury Sports Park", score: "- v -"};
const gameWeek7 = {homeTeam: wcfc, awayTeam: "Lynnfield Legends", opponent: "v Lynnfield Legends", field: "Klingle Field, Paxton", score: "- v -"};
const gameWeek8 = {homeTeam: "North Shore FC", awayTeam: wcfc, opponent: "@ North Shore FC", field: "Veterans Field, Waltham", score: "- v -"};
const gameWeek9 = {homeTeam: "Inter Boston FC", awayTeam: wcfc, opponent: "@ Inter Boston FC", field: "Medfield High School", score: "- v -"};


 /* Set countdown to each game and find which one is next */
 const countdownToGameOne = gameWeek1DateTime - todayDate;
 const countdownToGameTwo = gameWeek2DateTime - todayDate;
 const countdownToGameThree = gameWeek3DateTime - todayDate;
 const countdownToGameFour = gameWeek4DateTime - todayDate;
 const countdownToGameFive = gameWeek5DateTime - todayDate;
 const countdownToGameSix = gameWeek6DateTime - todayDate;
 const countdownToGameSeven = gameWeek7DateTime - todayDate;
 const countdownToGameEight = gameWeek8DateTime - todayDate;
 const countdownToGameNine = gameWeek9DateTime - todayDate;

 if (countdownToGameOne > 0) {
     upcomingGameDate.innerHTML = gameWeek1FullMonthDate;
     upcomingGameOpponent.innerHTML = gameWeek1.opponent;
     upcomingGameTime.innerHTML = gameWeek1TimeString;
     upcomingGameLocation.innerHTML = gameWeek1.field;
   } else if (countdownToGameTwo > 0) {
     upcomingGameDate.innerHTML = gameWeek2FullMonthDate;
     upcomingGameOpponent.innerHTML = gameWeek2.opponent;
     upcomingGameTime.innerHTML = gameWeek2TimeString;
     upcomingGameLocation.innerHTML = gameWeek2.field;
   } else if (countdownToGameThree > 0) {
    upcomingGameDate.innerHTML = gameWeek4FullMonthDate;
    upcomingGameOpponent.innerHTML = gameWeek4.opponent;
    upcomingGameTime.innerHTML = gameWeek4TimeString;
    upcomingGameLocation.innerHTML = gameWeek4.field;
  } else if (countdownToGameFour > 0) {
    upcomingGameDate.innerHTML = gameWeek5FullMonthDate;
    upcomingGameOpponent.innerHTML = gameWeek5.opponent;
    upcomingGameTime.innerHTML = gameWeek5TimeString;
    upcomingGameLocation.innerHTML = gameWeek5.field;
  } else if (countdownToGameFive > 0) {
    upcomingGameDate.innerHTML = gameWeek6FullMonthDate;
    upcomingGameOpponent.innerHTML = gameWeek6.opponent;
    upcomingGameTime.innerHTML = gameWeek6TimeString;
    upcomingGameLocation.innerHTML = gameWeek6.field;
  } else if (countdownToGameSix > 0) {
    upcomingGameDate.innerHTML = gameWeek7FullMonthDate;
    upcomingGameOpponent.innerHTML = gameWeek7.opponent;
    upcomingGameTime.innerHTML = gameWeek7TimeString;
    upcomingGameLocation.innerHTML = gameWeek7.field;
  } else if (countdownToGameSeven > 0) {
    upcomingGameDate.innerHTML = gameWeek8FullMonthDate;
    upcomingGameOpponent.innerHTML = gameWeek8.opponent;
    upcomingGameTime.innerHTML = gameWeek8TimeString;
    upcomingGameLocation.innerHTML = gameWeek8.field;
  } else if (countdownToGameEight > 0) {
    upcomingGameDate.innerHTML = gameWeek9FullMonthDate;
    upcomingGameOpponent.innerHTML = gameWeek9.opponent;
    upcomingGameTime.innerHTML = gameWeek9TimeString;
    upcomingGameLocation.innerHTML = gameWeek9.field;
  } else {
    upcomingGameDate.innerHTML = "No scheduled games";
  }
  
/*  Update scores  */
gameWeek1.homeScore = 1;
gameWeek1.awayScore = 0;

gameWeek2.homeScore = 1;
gameWeek2.awayScore = 10;

gameWeek3.homeScore = 2;
gameWeek3.awayScore = 1;

gameWeek4.homeScore = 0;
gameWeek4.awayScore = 4;

gameWeek5.homeScore = 3;
gameWeek5.awayScore = 3;

gameWeek6.homeScore = 1;
gameWeek6.awayScore = 2;

gameWeek7.homeScore = 6;
gameWeek7.awayScore = 3;

gameWeek8.homeScore = 1;
gameWeek8.awayScore = 1 + "*";

gameWeek9.homeScore = 3;
gameWeek9.awayScore = 2;


/*  Set game info into HTML tags by ID  */
gw1ScheduleDay.innerHTML = gameWeek1ScheduleDay;
gw1TimeString.innerHTML = gameWeek1TimeString;
gw1Home.innerHTML = gameWeek1.homeTeam;
gw1Score.innerHTML = gameWeek1.homeScore + " v " + gameWeek1.awayScore;
gw1Away.innerHTML = gameWeek1.awayTeam;
gw1Field.innerHTML = gameWeek1.field;

gw2ScheduleDay.innerHTML = gameWeek2ScheduleDay;
gw2TimeString.innerHTML = gameWeek2TimeString;
gw2Home.innerHTML = gameWeek2.homeTeam;
gw2Score.innerHTML = gameWeek2.homeScore + " v " + gameWeek2.awayScore;
gw2Away.innerHTML = gameWeek2.awayTeam;
gw2Field.innerHTML = gameWeek2.field;

gw3ScheduleDay.innerHTML = gameWeek3ScheduleDay;
gw3TimeString.innerHTML = gameWeek3TimeString;
gw3Home.innerHTML = gameWeek3.homeTeam;
gw3Score.innerHTML = gameWeek3.homeScore + " v " + gameWeek3.awayScore;
gw3Away.innerHTML = gameWeek3.awayTeam;
gw3Field.innerHTML = gameWeek3.field;

gw4ScheduleDay.innerHTML = gameWeek4ScheduleDay;
gw4TimeString.innerHTML = gameWeek4TimeString;
gw4Home.innerHTML = gameWeek4.homeTeam;
gw4Score.innerHTML = gameWeek4.homeScore + " v " + gameWeek4.awayScore;
gw4Away.innerHTML = gameWeek4.awayTeam;
gw4Field.innerHTML = gameWeek4.field;

gw5ScheduleDay.innerHTML = gameWeek5ScheduleDay;
gw5TimeString.innerHTML = gameWeek5TimeString;
gw5Home.innerHTML = gameWeek5.homeTeam;
gw5Score.innerHTML = gameWeek5.homeScore + " v " + gameWeek5.awayScore;
gw5Away.innerHTML = gameWeek5.awayTeam;
gw5Field.innerHTML = gameWeek5.field;

gw6ScheduleDay.innerHTML = gameWeek6ScheduleDay;
gw6TimeString.innerHTML = gameWeek6TimeString;
gw6Home.innerHTML = gameWeek6.homeTeam;
gw6Score.innerHTML = gameWeek6.homeScore + " v " + gameWeek6.awayScore;
gw6Away.innerHTML = gameWeek6.awayTeam;
gw6Field.innerHTML = gameWeek6.field;

gw7ScheduleDay.innerHTML = gameWeek7ScheduleDay;
gw7TimeString.innerHTML = gameWeek7TimeString;
gw7Home.innerHTML = gameWeek7.homeTeam;
gw7Score.innerHTML = gameWeek7.homeScore + " v " + gameWeek7.awayScore;
gw7Away.innerHTML = gameWeek7.awayTeam;
gw7Field.innerHTML = gameWeek7.field;

gw8ScheduleDay.innerHTML = gameWeek8ScheduleDay;
gw8TimeString.innerHTML = gameWeek8TimeString;
gw8Home.innerHTML = gameWeek8.homeTeam;
gw8Score.innerHTML = gameWeek8.homeScore + " v " + gameWeek8.awayScore;
gw8Away.innerHTML = gameWeek8.awayTeam;
gw8Field.innerHTML = gameWeek8.field;

gw9ScheduleDay.innerHTML = gameWeek9ScheduleDay;
gw9TimeString.innerHTML = gameWeek9TimeString;
gw9Home.innerHTML = gameWeek9.homeTeam;
gw9Score.innerHTML = gameWeek9.homeScore + " v " + gameWeek9.awayScore;
gw9Away.innerHTML = gameWeek9.awayTeam;
gw9Field.innerHTML = gameWeek9.field;
