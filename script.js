const gw1Date = document.querySelector("#gw1-date");
const gw1Time = document.querySelector("#gw1-time");
const gw1Home = document.querySelector("#gw1-home");
const gw1Score = document.querySelector("#gw1-score");
const gw1Away = document.querySelector("#gw1-away");
const gw1Field = document.querySelector("#gw1-field");

const wcfc = "Worcester County FC";
const gameWeek1 = {date: "Sep 19", time: "11:00am", homeTeam: "North Shore FC", awayTeam: wcfc, field: "Harry Della Russo Stadium, Revere", homeScore: "-", awayScore: "-"};
const gameWeek2 = {date: "Sep 26", time: "9:30am", homeTeam: "FC Hawks", awayTeam: wcfc, field: "Edge Sports Center, Bedford", score: "- v -"};
const gameWeek3 = {date: "Oct 03", time: "9:00am", homeTeam: wcfc, awayTeam: "Inter Boston FC", field: "Klingle Field, Paxton", score: "- v -"};
const gameWeek4 = {date: "Oct 10", time: "12:00pm", homeTeam: "Eastern Mass FC", awayTeam: wcfc, field: "Knoll Field, Melrose", score: "- v -"};
const gameWeek5 = {date: "Oct 17", time: "9:00am", homeTeam: wcfc, awayTeam: "Worcester Warriors", field: "Klingle Field, Paxton", score: "- v -"};
const gameWeek6 = {date: "Oct 24", time: "2:00pm", homeTeam: "SR Young Boys", awayTeam: wcfc, field: "Amesbury Sports Park", score: "- v -"};
const gameWeek7 = {date: "Oct 31", time: "12:00pm", homeTeam: wcfc, awayTeam: "Lynnfield Legends", field: "Klingle Field, Paxton", score: "- v -"};
const playoffWeek1 = {date: "Nov 14", time: "11:00am", homeTeam: "North Shore FC", awayTeam: wcfc, field: "Veterans Field, Waltham", score: "- v -"};
const playoffWeek2 = {date: "Nov 21", time: "TBD", homeTeam: "TBD", awayTeam: "TBD", field: "TBD", score: "- v -"};

/*  Set game info  */
gw1Date.innerHTML = gameWeek1.date;
gw1Time.innerHTML = gameWeek1.time;
gw1Home.innerHTML = gameWeek1.homeTeam;
gw1Score.innterHTML = gameWeek1.homeScore + " v " + gameWeek1.awayScore;
gw1Away.innerHTML = gameWeek1.awayTeam;
gw1Field.innerHTML = gameWeek1.field;


/*  Update scores  */
gameWeek1.homeScore = 1;
gameWeek1.awayScore = 0;