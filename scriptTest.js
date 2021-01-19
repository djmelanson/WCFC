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

const wcfc = "Worcester County FC";
const upcomingGameDate = document.querySelector("#upcoming-game-date");
const upcomingGameOpponent = document.querySelector("#upcoming-game-opponent");
const upcomingGameTime = document.querySelector("#upcoming-game-time");
const upcomingGameLocation = document.querySelector("#upcoming-game-location");
const upcomingGameDate2 = document.querySelector("#upcoming-game-date-2");
const upcomingGameOpponent2 = document.querySelector("#upcoming-game-opponent-2");
const upcomingGameTime2 = document.querySelector("#upcoming-game-time-2");
const upcomingGameLocation2 = document.querySelector("#upcoming-game-location-2");
const upcomingGameDate3 = document.querySelector("#upcoming-game-date-3");
const upcomingGameOpponent3 = document.querySelector("#upcoming-game-opponent-3");
const upcomingGameTime3 = document.querySelector("#upcoming-game-time-3");
const upcomingGameLocation3 = document.querySelector("#upcoming-game-location-3");
const todayDate = new Date().getTime();
const now = Math.floor(todayDate / (1000*60*60*24));


/* Set game dates */
const gameWeek1Date = "January 17, 2021 24:30:00";
const gameWeek2Date = "January 20, 2021 09:30:00";
const gameWeek3Date = "February 03, 2021 09:00:00";
const gameWeek4Date = "February 10, 2021 12:00:00";

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

/* Convert the hour number to a string */
const gameWeek1HourString = gameWeek1HourInteger.toString();
const gameWeek2HourString = gameWeek2HourInteger.toString();
const gameWeek3HourString = gameWeek3HourInteger.toString();
const gameWeek4HourString = gameWeek4HourInteger.toString();

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

/* Set game info */
const gameWeek1 = {homeTeam: "North Shore FC", awayTeam: wcfc, opponent: "@ North Shore FC", field: "Harry Della Russo Stadium, Revere", homeScore: "-", awayScore: "-"};
const gameWeek2 = {homeTeam: "FC Hawks", awayTeam: wcfc, opponent: "@ FC Hawks", field: "Edge Sports Center, Bedford", score: "- v -"};
const gameWeek3 = {homeTeam: wcfc, awayTeam: "Inter Boston FC", opponent: "v Inter Boston FC", field: "Klingle Field, Paxton", score: "- v -"};
const gameWeek4 = {homeTeam: "Eastern Mass FC", awayTeam: wcfc, opponent: "@ Eastern Mass FC", field: "Knoll Field, Melrose", score: "- v -"};
const gameWeek5 = {homeTeam: wcfc, awayTeam: "Worcester Warriors", opponent: "v Worcester Warriors", field: "Klingle Field, Paxton", score: "- v -"};
const gameWeek6 = {homeTeam: "SR Young Boys", awayTeam: wcfc, opponent: "@ SR Young Boys", field: "Amesbury Sports Park", score: "- v -"};
const gameWeek7 = {homeTeam: wcfc, awayTeam: "Lynnfield Legends", opponent: "v Lynnfield Legends", field: "Klingle Field, Paxton", score: "- v -"};
const playoffWeek1 = {homeTeam: "North Shore FC", awayTeam: wcfc, opponent: "@ North Shore FC", field: "Veterans Field, Waltham", score: "- v -"};
const playoffWeek2 = {homeTeam: "Inter Boston FC", awayTeam: wcfc, opponent: "@ Inter Boston FC", field: "Medfield High School", score: "- v -"};


 /* Set countdown to each game and find which one is next */
 const countdownToGameOne = gameWeek1DateTime - todayDate;
 const countdownToGameTwo = gameWeek2DateTime - todayDate;
 const countdownToGameThree = gameWeek3DateTime - todayDate;
 const countdownToGameFour = gameWeek4DateTime - todayDate;

 if (countdownToGameOne > 0) {
     upcomingGameDate.innerHTML = gameWeek1FullMonthDate;
     upcomingGameOpponent.innerHTML = gameWeek1.opponent;
     upcomingGameTime.innerHTML = gameWeek1TimeString;
     upcomingGameLocation.innerHTML = gameWeek1.field;
     upcomingGameDate2.innerHTML = gameWeek2FullMonthDate;
     upcomingGameOpponent2.innerHTML = gameWeek2.opponent;
     upcomingGameTime2.innerHTML = gameWeek2TimeString;
     upcomingGameLocation2.innerHTML = gameWeek2.field;
     upcomingGameDate3.innerHTML = gameWeek3FullMonthDate;
     upcomingGameOpponent3.innerHTML = gameWeek3.opponent;
     upcomingGameTime3.innerHTML = gameWeek3TimeString;
     upcomingGameLocation3.innerHTML = gameWeek3.field;
   } else if (countdownToGameTwo > 0) {
     upcomingGameDate.innerHTML = gameWeek2FullMonthDate;
     upcomingGameOpponent.innerHTML = gameWeek2.opponent;
     upcomingGameTime.innerHTML = gameWeek2TimeString;
     upcomingGameLocation.innerHTML = gameWeek2.field;
     upcomingGameDate2.innerHTML = gameWeek3FullMonthDate;
     upcomingGameOpponent2.innerHTML = gameWeek3.opponent;
     upcomingGameTime2.innerHTML = gameWeek3TimeString;
     upcomingGameLocation2.innerHTML = gameWeek3.field;
     upcomingGameDate3.innerHTML = gameWeek4FullMonthDate;
     upcomingGameOpponent3.innerHTML = gameWeek4.opponent;
     upcomingGameTime3.innerHTML = gameWeek4TimeString;
     upcomingGameLocation3.innerHTML = gameWeek4.field;
   } else {
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

playoffWeek1.homeScore = 1;
playoffWeek1.awayScore = 1 + "*";

playoffWeek2.homeScore = 3;
playoffWeek2.awayScore = 2;


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
gw3Score.innerHTML = gameWeek3.homeScore + " v " + gameWeek2.awayScore;
gw3Away.innerHTML = gameWeek3.awayTeam;
gw3Field.innerHTML = gameWeek3.field;

gw4ScheduleDay.innerHTML = gameWeek4ScheduleDay;
gw4TimeString.innerHTML = gameWeek4TimeString;
gw4Home.innerHTML = gameWeek4.homeTeam;
gw4Score.innerHTML = gameWeek4.homeScore + " v " + gameWeek2.awayScore;
gw4Away.innerHTML = gameWeek4.awayTeam;
gw4Field.innerHTML = gameWeek4.field;
