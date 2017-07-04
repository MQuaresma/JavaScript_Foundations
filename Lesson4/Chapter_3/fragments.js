var standings = [
	{
		name: "New England Patriots",
		wins: 12,
		losses: 4,
		ties: 0
	},
	{
		name: "New York Jets",
		wins: 8,
		losses: 8,
		ties: 0
	},
	{
		name: "Miami Dolphins",
		wins: 8,
		losses: 8,
		ties: 0
	},
	{
		name: "Buffalo Bills",
		wins: 6,
		losses: 10,
		ties: 0
	}
];

/* When an element is added or updated it triggers a page reflow 
 * which forces the browser to reload the page all over again
 * causing a performance penalty
 */ 
for(var i = 0; i < standings.length; i ++){
    var team = standings[i];
    
    var heading = document.createElement("h2");
    document.body.appendChild(heading);             //reflow triggered
    heading.textContent = team.name;                //reflow triggered
    
    var wins = document.createElement("p");
    document.body.appendChild(wins);
    wins.textContent = "Wins: " + team.wins;

    var losses = document.createElement("p");
    document.body.appendChild(losses);              //reflow triggered
    losses.textContent = "Losses: " + team.losses;  //reflow triggered

    var ties = document.createElement("p");
    document.body.appendChild(ties);                //reflow triggered
    ties.textContent = "Ties: " + team.ties;        //reflow triggered
}

/* The use of fragments prevents this from hapenning by 
 * warning the browser when to reflow the page instead
 * if it being done automaticaly
 */ 
var fragment = new DocumentFragment();

for(var i = 0; i < standings.length; i ++){
    var team = standings[i];
    
    var heading = document.createElement("h2");
    fragment.appendChild(heading);
    heading.textContent = team.name;
    
    var wins = document.createElement("p");
    fragment.appendChild(wins);
    wins.textContent = "Wins: " + team.wins;

    var losses = document.createElement("p");
    fragment.appendChild(losses);
    losses.textContent = "Losses: " + team.losses;

    var ties = document.createElement("p");
    fragment.appendChild(ties);
    ties.textContent = "Ties: " + team.ties;
}

// Only now is the reflow triggered
document.appendChild(fragment);