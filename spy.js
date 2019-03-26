const cheerio = require('cheerio');
const axios = require('axios');
const fs = require("fs")
const request = require('request');

function log(msg) {
  console.log(msg);
}

function downloadFile(uri,filename,callback){
  var stream = fs.createWriteStream(filename);
  request(uri).pipe(stream).on('close', callback); 
}

function mkdir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
}

const allPages = [];
const urls = 'expers/urls.txt';


async function getDatas(page) {
  if(page.end) {
    return;
  }
  log('开始爬取 ' + page.url);
  mkdir('expers');
  try {
    const allData = {
      allText:'',
      texts:[],
      imgs:[],
    };
    const resp = await axios.get(page.url);
    const $ = cheerio.load(resp.data);
    const title = $('h1.entry-title').text();
    mkdir(`expers/${title}`);
    const pNodes = $('div.entry-content p');
    for (let i=0;i<pNodes.length;++i){
      const desc = pNodes.eq(i).text();
      if(desc){
        allData.allText = allData.allText + '\n' + desc;
        allData.texts.push(desc);
        log(desc);
      }
    }
    fs.writeFileSync(`expers/${title}/content.txt`, allData.allText)
    const imgNodes = $('div.entry-content p img');
    for (let i=0;i<pNodes.length;++i) {
      const imgSrc = imgNodes.eq(i).attr('src');
      if(imgSrc){
        allData.imgs.push(imgSrc);
        downloadFile(imgSrc, `expers/${title}/img${i}.jpg`, () => {
          log('完成一张')
        })
        log(imgSrc);
      }
    }
    const linkNodes = $('a.aligncenter');
    for (let i=0;i<linkNodes.length;++i) {
      const link = linkNodes.eq(i).attr('href');
      if(link){
        fs.appendFileSync(urls,'\n'+link)
      }
    }
    page.end = true;
  } catch (error) {
    console.log(error);
  }
}


async function getUrls(page) {
  log('开始爬取 ' + page.url);
  mkdir('expers');
  try {
    const resp = await axios.get(page.url);
    const $ = cheerio.load(resp.data);
    const linkNodes = $('a.aligncenter');
    for (let i=0;i<linkNodes.length;++i) {
      const link = linkNodes.eq(i).attr('href');
      if(link){
        fs.appendFileSync(urls,'\n'+link)
        getUrls({
          url: link,
        });
      }
    }
    page.end = true;
  } catch (error) {
    console.log(error);
  }
}

getUrls({
  url: 'https://www.kejidiy.com/article/4061.html',
  end: false,
});
