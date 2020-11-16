const gw1Date = document.querySelector("#gw1-date");
const gw1Home = document.querySelector("#gw1-home");
const gw1Away = document.querySelector("#gw1-away");
const gw1Field = document.querySelector("#gw1-field");

const wcfc = "Worcester County FC";
const gameWeek1 = {date: date(2020, 8, 19, 11), homeTeam: "North Shore FC", awayTeam: wcfc, field: "Harry Della Russo Stadium, Revere"};

gw1Date= gameWeek1.date;
gw1Home = gameWeek1.homeTeam;
gw1Away = gameWeek1.awayTeam;
gw1Field = gameWeek1.field;
