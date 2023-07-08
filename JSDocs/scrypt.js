/**
 * This function convert minutes in seconds
 * @param {number} minutes input minutes to convert in seconds
 * @returns {number} returned converted time in seconds
 */
function minutesInSeconds(minutes){
	const result = parseInt(minutes) * 60;
	return result;
}

console.log(minutesInSeconds(2));