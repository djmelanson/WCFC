/*  Set constant variables to HTML tags  */
const upcomingGame1 = document.querySelector("#upcoming-game1")
const gw1Date = document.querySelector("#gw1-date");
const gw1Time = document.querySelector("#gw1-time");
const gw1Home = document.querySelector("#gw1-home");
const gw1Score = document.querySelector("#gw1-score");
const gw1Away = document.querySelector("#gw1-away");
const gw1Field = document.querySelector("#gw1-field");
const gw2Date = document.querySelector("#gw2-date");
const gw2Time = document.querySelector("#gw2-time");
const gw2Home = document.querySelector("#gw2-home");
const gw2Score = document.querySelector("#gw2-score");
const gw2Away = document.querySelector("#gw2-away");
const gw2Field = document.querySelector("#gw2-field");
const gw3Date = document.querySelector("#gw3-date");
const gw3Time = document.querySelector("#gw3-time");
const gw3Home = document.querySelector("#gw3-home");
const gw3Score = document.querySelector("#gw3-score");
const gw3Away = document.querySelector("#gw3-away");
const gw3Field = document.querySelector("#gw3-field");
const gw4Date = document.querySelector("#gw4-date");
const gw4Time = document.querySelector("#gw4-time");
const gw4Home = document.querySelector("#gw4-home");
const gw4Score = document.querySelector("#gw4-score");
const gw4Away = document.querySelector("#gw4-away");
const gw4Field = document.querySelector("#gw4-field");
const gw5Date = document.querySelector("#gw5-date");
const gw5Time = document.querySelector("#gw5-time");
const gw5Home = document.querySelector("#gw5-home");
const gw5Score = document.querySelector("#gw5-score");
const gw5Away = document.querySelector("#gw5-away");
const gw5Field = document.querySelector("#gw5-field");
const gw6Date = document.querySelector("#gw6-date");
const gw6Time = document.querySelector("#gw6-time");
const gw6Home = document.querySelector("#gw6-home");
const gw6Score = document.querySelector("#gw6-score");
const gw6Away = document.querySelector("#gw6-away");
const gw6Field = document.querySelector("#gw6-field");
const gw7Date = document.querySelector("#gw7-date");
const gw7Time = document.querySelector("#gw7-time");
const gw7Home = document.querySelector("#gw7-home");
const gw7Score = document.querySelector("#gw7-score");
const gw7Away = document.querySelector("#gw7-away");
const gw7Field = document.querySelector("#gw7-field");
const po1Date = document.querySelector("#po1-date");
const po1Time = document.querySelector("#po1-time");
const po1Home = document.querySelector("#po1-home");
const po1Score = document.querySelector("#po1-score");
const po1Away = document.querySelector("#po1-away");
const po1Field = document.querySelector("#po1-field");
const po2Date = document.querySelector("#po2-date");
const po2Time = document.querySelector("#po2-time");
const po2Home = document.querySelector("#po2-home");
const po2Score = document.querySelector("#po2-score");
const po2Away = document.querySelector("#po2-away");
const po2Field = document.querySelector("#po2-field");
const wcfc = "Worcester County FC";

/*  Set game information  */
const gameWeek1 = {date: "Sep 19", time: "11:00am", homeTeam: "North Shore FC", awayTeam: wcfc, field: "Harry Della Russo Stadium, Revere", homeScore: "-", awayScore: "-"};
const gameWeek2 = {date: "Sep 26", time: "9:30am", homeTeam: "FC Hawks", awayTeam: wcfc, field: "Edge Sports Center, Bedford", score: "- v -"};
const gameWeek3 = {date: "Oct 03", time: "9:00am", homeTeam: wcfc, awayTeam: "Inter Boston FC", field: "Klingle Field, Paxton", score: "- v -"};
const gameWeek4 = {date: "Oct 10", time: "12:00pm", homeTeam: "Eastern Mass FC", awayTeam: wcfc, field: "Knoll Field, Melrose", score: "- v -"};
const gameWeek5 = {date: "Oct 17", time: "9:00am", homeTeam: wcfc, awayTeam: "Worcester Warriors", field: "Klingle Field, Paxton", score: "- v -"};
const gameWeek6 = {date: "Oct 24", time: "2:00pm", homeTeam: "SR Young Boys", awayTeam: wcfc, field: "Amesbury Sports Park", score: "- v -"};
const gameWeek7 = {date: "Oct 31", time: "12:00pm", homeTeam: wcfc, awayTeam: "Lynnfield Legends", field: "Klingle Field, Paxton", score: "- v -"};
const playoffWeek1 = {date: "Nov 14 **", time: "11:00am", homeTeam: "North Shore FC", awayTeam: wcfc, field: "Veterans Field, Waltham", score: "- v -"};
const playoffWeek2 = {date: "Nov 21 **", time: "12:00pm", homeTeam: "Inter Boston FC", awayTeam: wcfc, field: "Medfield High School", score: "- v -"};


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
gw1Date.innerHTML = gameWeek1.date;
gw1Time.innerHTML = gameWeek1.time;
gw1Home.innerHTML = gameWeek1.homeTeam;
gw1Score.innerHTML = gameWeek1.homeScore + " v " + gameWeek1.awayScore;
gw1Away.innerHTML = gameWeek1.awayTeam;
gw1Field.innerHTML = gameWeek1.field;

gw2Date.innerHTML = gameWeek2.date;
gw2Time.innerHTML = gameWeek2.time;
gw2Home.innerHTML = gameWeek2.homeTeam;
gw2Score.innerHTML = gameWeek2.homeScore + " v " + gameWeek2.awayScore;
gw2Away.innerHTML = gameWeek2.awayTeam;
gw2Field.innerHTML = gameWeek2.field;

gw3Date.innerHTML = gameWeek3.date;
gw3Time.innerHTML = gameWeek3.time;
gw3Home.innerHTML = gameWeek3.homeTeam;
gw3Score.innerHTML = gameWeek3.homeScore + " v " + gameWeek3.awayScore;
gw3Away.innerHTML = gameWeek3.awayTeam;
gw3Field.innerHTML = gameWeek3.field;

gw4Date.innerHTML = gameWeek4.date;
gw4Time.innerHTML = gameWeek4.time;
gw4Home.innerHTML = gameWeek4.homeTeam;
gw4Score.innerHTML = gameWeek4.homeScore + " v " + gameWeek4.awayScore;
gw4Away.innerHTML = gameWeek4.awayTeam;
gw4Field.innerHTML = gameWeek4.field;

gw5Date.innerHTML = gameWeek5.date;
gw5Time.innerHTML = gameWeek5.time;
gw5Home.innerHTML = gameWeek5.homeTeam;
gw5Score.innerHTML = gameWeek5.homeScore + " v " + gameWeek5.awayScore;
gw5Away.innerHTML = gameWeek5.awayTeam;
gw5Field.innerHTML = gameWeek5.field;

gw6Date.innerHTML = gameWeek6.date;
gw6Time.innerHTML = gameWeek6.time;
gw6Home.innerHTML = gameWeek6.homeTeam;
gw6Score.innerHTML = gameWeek6.homeScore + " v " + gameWeek6.awayScore;
gw6Away.innerHTML = gameWeek6.awayTeam;
gw6Field.innerHTML = gameWeek6.field;

gw7Date.innerHTML = gameWeek7.date;
gw7Time.innerHTML = gameWeek7.time;
gw7Home.innerHTML = gameWeek7.homeTeam;
gw7Score.innerHTML = gameWeek7.homeScore + " v " + gameWeek7.awayScore;
gw7Away.innerHTML = gameWeek7.awayTeam;
gw7Field.innerHTML = gameWeek7.field;

po1Date.innerHTML = playoffWeek1.date;
po1Time.innerHTML = playoffWeek1.time;
po1Home.innerHTML = playoffWeek1.homeTeam;
po1Score.innerHTML = playoffWeek1.homeScore + " v " + playoffWeek1.awayScore;
po1Away.innerHTML = playoffWeek1.awayTeam;
po1Field.innerHTML = playoffWeek1.field;

po2Date.innerHTML = playoffWeek2.date;
po2Time.innerHTML = playoffWeek2.time;
po2Home.innerHTML = playoffWeek2.homeTeam;
po2Score.innerHTML = playoffWeek2.homeScore + " v " + playoffWeek2.awayScore;
po2Away.innerHTML = playoffWeek2.awayTeam;
po2Field.innerHTML = playoffWeek2.field;

upcomingGame1.innerHTML = localDate.now();