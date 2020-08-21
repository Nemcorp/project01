/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

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
		tag: "(tragedy)"
	},	
	{
		quote: "Good times become good memories, but bad times make good lessons.",
		source: "Uncle Iroh",
		citation: "Avatar the Last Airbender",
		year: 2004,
		tag: "(wisdom)"
	},	
	{
		quote: "It's not about deserve... It's about believe",
		source: "Diana Prince",
		citation: "Wonder Woman",
		year: 2017,
		tag: "(wisdom)"
	},	
	{
		quote: "A society grows great when old men plant trees whose shade they will never sit in.",
		source: "Greek Proverb",
		tag: "(wisdom)"
	},	
	{
		quote: "Fool me once, shame on you. Fool me- you can't get fooled again",
		source: "Tennesse Proverb",
		year: 2002,
		tag: "(wisdom)"
	},	
];



// call init in page load to load first quote and start timer
init();





/**
 * Called on page load. Starts a timer to print a new quote every 8 seconds.
 * Sets an initial random quote.
 */
function init() {
	printQuote();
	setInterval(printQuote, 8000);
}



/**
 * Selects and returns a semi-random quote from the quotes array
 * `getRandomQuote` function. Will never select the same quote twice
 * in a row.
 *
 * @return {Object} A quote object randomly chosen from the quotes array
 */
function getRandomQuote(){
	let rand = Math.floor(Math.random()*quotes.length);

	// checks to make sure we don't choose the same random quote twice in a row
	while(lastRandom == rand){
		rand = Math.floor(Math.random()*quotes.length);
	}
	lastRandom = rand;

	return quotes[rand];
}



/**
 * Creates an HTML string based on a random quote. Updates the quote-box to 
 * contain the generated string
 *
 * @return {string} The HTML string generated using a randomly fetched quote
 */
function printQuote() {
	let quote = getRandomQuote();

	let htmlString = `
		<p class="quote"> ${quote.quote} </p>
		<p class="source"> ${quote.source} 
	`;

	// generate additional quote add-on information if available
	if(quote.citation){
		htmlString += `<span class="citation"> ${quote.citation} </span>`
	}
	if(quote.year){
		htmlString += `<span class="year"> ${quote.year} </span>`
	}
	if(quote.tag){
		htmlString += `<span class="tag"> ${quote.tag} </span>`
	}

	// closing tag
	htmlString += `</p>`;


	// update quote text
	document.getElementById('quote-box').innerHTML = htmlString; 
	
	// update background color
	document.querySelector('body').style.backgroundColor = randomColor();
	return htmlString;
}



/**
 * Generates a random color string (rgb format) and returns it as a string
 *
 * @return {string} String representation of a random rgb code
 */
function randomColor(){
	let randRed, randGreen, randBlue;
	randRed = Math.floor(Math.random()*255);
	randGreen = Math.floor(Math.random()*255);
	randBlue = Math.floor(Math.random()*255);

	return `rgb(${randRed},${randGreen},${randBlue})`;
}




/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);