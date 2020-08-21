/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

// stores the last chosen random, so that we don't choose it twice in a row
var lastRandom;

/*** 
 * stores quote objects to be chosen at random by the quote generator
***/
const quotes = [
	{
		quote: "She sorta forgot about the iron fleet.",
		source: "D&D",
		citation: "Talking Thrones",
		year: 2019,
		tag: "tragedy"
	},	
	{
		quote: "Good times become good memories, but bad times make good lessons.",
		source: "Uncle Iroh",
		citation: "Avatar the Last Airbender",
		year: 2004,
		tag: "wisdom"
	},	
	{
		quote: "It's not about deserve... It's about believe",
		source: "Diana Prince",
		citation: "Wonder Woman",
		year: 2017,
		tag: "wisdom"
	},	
	{
		quote: "A society grows great when old men plant trees whose shade they will never sit in.",
		source: "Greek Proverb",
		tag: "wisdom"
	},	
	{
		quote: "Fool me once, shame on you. Fool me- you can't get fooled again",
		source: "Tennesse Proverb",
		year: 2002,
		tag: "wisdom"
	},	
];



/***
 * Selects and returns a random quote from the quotes array
 * `getRandomQuote` function
 *
 *
***/
function getRandomQuote(){
	let rand = Math.floor(Math.random()*quotes.length);

	// checks to make sure we don't choose the same random quote twice in a row
	while(lastRandom == rand){
		rand = Math.floor(Math.random()*quotes.length);
	}
	lastRandom = rand;

	return quotes[rand];
}



/***
 * Creates an html string based on a random quote. Updates the quote-box to 
 * contain the generated string
 *
 *
 *
***/
function printQuote() {
	let quote = getRandomQuote();
	let htmlString = `
		<p class="quote"> ${quote.quote} </p>
		<p class="source"> ${quote.source} 
	`;

	if(quote.citation){
		htmlString += `<span class="citation"> ${quote.citation} </span>`
	}
	if(quote.year){
		htmlString += `<span class="year"> ${quote.year} </span>`
	}
	htmlString += `</p>`;

	document.getElementById('quote-box').innerHTML = htmlString; 
	return htmlString;
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);