module.exports = function longestConsecutiveLength(array) {
	let result = 0;
	
	if (array.length === 0) {
		 result = result;
	} else if (array.length === 1) {
		result = 1;
	} else  {
	const sortArray = array.sort((a, b) => a - b);
	let arrConsecutive = [];

	sortArray.forEach( (i, index, arr) => {
		if (sortArray[index] + 1 === sortArray[index + 1]) {
			arrConsecutive.push(i);
		} else {
			arrConsecutive.length > (result - 1) ? result = (arrConsecutive.length + 1) : result;
			arrConsecutive = [];
		}
	});
}
	return result;
}
