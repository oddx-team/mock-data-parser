const fs = require("fs");
const resultFolder = "./result";
const MAX_LENGTH = 77;

const writeToFile = async (fileName, data) => {
	fs.writeFile(
		`${resultFolder}/${fileName}`,
		JSON.stringify(data, null, 2),
		err => console.log(err)
	);
};

const initResultFolder = () => {
	if (!fs.existsSync(resultFolder)) {
		fs.mkdirSync(resultFolder);
	}
};

const processRawCards = (data, color) => {
  let result = [];
	Object.values(data).map((item, _) => {
    if (item.text.length <= MAX_LENGTH) {
      result.push({
        color,
        text: item.text,
        ...(item.pick && item.pick <= 2 && {gaps: item.pick}),
      });
    }
	});
	return result;
};

module.exports = {
	writeToFile,
  initResultFolder,
  processRawCards
};