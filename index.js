const puppeteer = require("puppeteer");
const { writeToFile, initResultFolder, processRawCards } = require("./utils");

(async () => {
  initResultFolder()
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://pyx-1.pretendyoure.xyz/zy/viewcards.jsp');

  const fetchedData = await page.evaluate(_ => { return data });
  const { whiteCards, blackCards } = fetchedData

  const wCards = processRawCards(whiteCards, 'white', 'en')
  const bCards = processRawCards(blackCards, 'black', 'en')
  
  writeToFile('cards_data.json', [...wCards, ...bCards].sort(() => Math.random() - 0.5))
  console.log('Finish processing data!!')
  await browser.close();
})();