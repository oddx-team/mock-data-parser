const processRawCards = (data, color, gaps) => {
	let result = [];
	data.map((item, index) => {
		result.push({
			id: index,
			text: item.text,
			gaps: item.pick,
			color
		});
	});
	return result;
};

module.exports = { processRawCards };