/*  Set constant variables and assign some to HTML tags  */
const gw1FullDate = document.querySelector("#gw1-full-date");
const gw1DateWithYear = document.querySelector("#gw1-date-with-year");
const gw1DateTrimmed = document.querySelector("#gw1-date-trimmed");
const gw1TimeWithSeconds = document.querySelector("#gw1-time-with-seconds");
const gw1Time = document.querySelector("#gw1-time");
const gw1Hour = document.querySelector("#gw1-hour");
const gw1Minutes = document.querySelector("#gw1-minutes");
const gw1TimeString = document.querySelector("#gw1-time-string");
const gw1DayInteger = document.querySelector("#gw1-day-integer");
const gw1ScheduleDay = document.querySelector("#gw1-schedule-day");
const gw1FullMonthDate = document.querySelector("#gw1-full-month-date");
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

const wcfc = "Worcester County FC";
const upcomingGameDate = document.querySelector("#upcoming-game-date");
const upcomingGameOpponent = document.querySelector("#upcoming-game-opponent");
const upcomingGameTime = document.querySelector("#upcoming-game-time");
const upcomingGameLocation = document.querySelector("#upcoming-game-location");
const todayDate = new Date().getTime();
const now = Math.floor(todayDate / (1000*60*60*24));


/* Set game dates */
const gameWeek1Date = "January 17, 2021 24:30:00";
const gameWeek2Date = "January 20, 2021 09:30:00";

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

/* Convert the hour number to a string */
const gameWeek1HourString = gameWeek1HourInteger.toString();
const gameWeek2HourString = gameWeek2HourInteger.toString();

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

 /* Set countdown to each game and find which one is next */
const countdownToGameOne = gameWeek1DateTime - todayDate;
const countdownToGameTwo = gameWeek2DateTime - todayDate;

if (countdownToGameOne > 0) {
    upcomingGameDate.innerHTML = gameWeek1FullMonthDate;
    upcomingGameOpponent.innerHTML = gameWeek1.Opponent;
    upcomingGameTime.innerHTML = gameWeek1TimeString;
    upcomingGameLocation.innerHTML = gameWeek1.field;
  } else if (countdownToGameTwo > 0) {
    upcomingGameDate.innerHTML = gameWeek2FullMonthDate;
    upcomingGameOpponent.innerHTML = gameWeek2.Opponent;
    upcomingGameTime.innerHTML = gameWeek2TimeString;
    upcomingGameLocation.innerHTML = gameWeek2.field;
  } else {
    upcomingGameDate.innerHTML = "No upcoming games";
  }

/* Update the count down every 1 second */
const x = setInterval(function() {

/* Time calculations for days, hours, minutes and seconds */
const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                  
/* Output the result in an element with id="upcoming-game" */
document.querySelector("#upcoming-game").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  }, 1000)

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
gw1FullDate.innerHTML = gameWeek1Date;
gw1DateWithYear.innerHTML = gameWeek1DateYear;
gw1TimeWithSeconds.innerHTML = gameWeek1TimeWithSeconds;
gw1Time.innerHTML = gameWeek1Time;
gw1Hour.innerHTML = gameWeek1Hour;
gw1Minutes.innerHTML = gameWeek1Minutes;
gw1DayInteger.innerHTML = gameWeek1DayInteger;
gw1FullMonthDate.innerHTML = gameWeek1FullMonthDate;
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
