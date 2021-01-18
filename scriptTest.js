/*  Set constant variables to HTML tags  */
const gw1FullDate = document.querySelector("#gw1-full-date");

/* Set game dates */
const gameWeek1Date = "September 19, 2021 11:00:00";


/* Set game info */
const gameWeek1 = {homeTeam: "North Shore FC", awayTeam: wcfc, field: "Harry Della Russo Stadium, Revere", homeScore: "-", awayScore: "-"};
const gameWeek2 = {homeTeam: "FC Hawks", awayTeam: wcfc, field: "Edge Sports Center, Bedford", score: "- v -"};
const gameWeek3 = {homeTeam: wcfc, awayTeam: "Inter Boston FC", field: "Klingle Field, Paxton", score: "- v -"};
const gameWeek4 = {homeTeam: "Eastern Mass FC", awayTeam: wcfc, field: "Knoll Field, Melrose", score: "- v -"};
const gameWeek5 = {homeTeam: wcfc, awayTeam: "Worcester Warriors", field: "Klingle Field, Paxton", score: "- v -"};
const gameWeek6 = {homeTeam: "SR Young Boys", awayTeam: wcfc, field: "Amesbury Sports Park", score: "- v -"};
const gameWeek7 = {homeTeam: wcfc, awayTeam: "Lynnfield Legends", field: "Klingle Field, Paxton", score: "- v -"};
const playoffWeek1 = {homeTeam: "North Shore FC", awayTeam: wcfc, field: "Veterans Field, Waltham", score: "- v -"};
const playoffWeek2 = {homeTeam: "Inter Boston FC", awayTeam: wcfc, field: "Medfield High School", score: "- v -"};



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