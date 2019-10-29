function slowestKey(keyTimes) {
	// Write your code here
	// Clean up keyTimes
	const cleanedKeyTimes = keyTimes.filter(key => key.length === 2);

	let slowestKey = null;
	let slowestTime = null;
	let currentKeyTime;

	function setSlowest(index, time) {
		slowestKey = cleanedKeyTimes[index][0];
		slowestTime = time;
	}

	// loop through array containing [keys, times]
	for (let i = 0; i < cleanedKeyTimes.length; i++) {
		// loop through keys
		for (let j = 0; j < cleanedKeyTimes[i].length; j++) {
			// check if i is currently on the first item in the array
			if (i === 0) {
				currentKeyTime = cleanedKeyTimes[i][1];
				setSlowest(i, currentKeyTime);
			} else {
				// substract the current key time from previous key time
				currentKeyTime = cleanedKeyTimes[i][1] - cleanedKeyTimes[i - 1][1];

				// Compare current key time vs slowestKey time
				if (currentKeyTime > slowestTime) {
					slowestKey = cleanedKeyTimes[i][0];
					setSlowest(i, currentKeyTime);
				}
			}
		}
	}

	const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

	return letters[slowestKey];
}

console.log('Answer:', slowestKey([[9], [2], [0, 3], [20, 5], [2, 6], [15, 7], [9, 8], [19, 9], [24, 10], [4, 12], [3, 13]]));
