export const shuffleArray = (array) => {
	let currentIndex = array.length, randomIndex;

	while (currentIndex != 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
	}

	return array;
};

export const getFileFromSrc = (src) => {
	let start = src.lastIndexOf('/');
	let end = src.lastIndexOf('.');
	return src.substring(start + 1, end);
};