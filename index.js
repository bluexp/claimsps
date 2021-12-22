const puppeteer = require('puppeteer');

require('dotenv').config();
let account = process.env.ACCOUNT;
let password = process.env.PASSWORD;
//let hl = process.env.HEADLESS;
//console.log(hl);
(async () => {
  const browser = await puppeteer.launch({headless:false,args:['--start-maximized']});
  const page = await browser.newPage();

  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3163.100 Safari/537.36');
  await page.setViewport({
    width: 1920,
    height: 1500,
    deviceScaleFactor: 1,
    });
  await page.goto('http://www.splinterlands.io',{waitUntil: 'load'});

  

  page.on('dialog', async (dialog) => {
        console.log('发现弹出对话框，对话框文字如下：');
        console.log(dialog.message()); //打印出弹框的信息
        await page.waitForTimeout(1000);
        await dialog.accept();
        console.log('确认,并自动关闭了对话框');
        await page.waitForTimeout(10000);

    });

  console.log('用户名 ', account);
  console.log('机器人开始运行时间 ',new Date().toLocaleString());

  await login(page, account, password).catch(e=>{
    console.log(e);
    throw new Error('登陆错误，请检查相关设置');
   });
   await browser.close();
   console.log('关闭浏览器');
})();


async function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
 }

async function login(page, account, password) {
    try {

        page.waitForSelector('#log_in_button > button').then(() => page.click('#log_in_button > button'))
        console.log('显示登陆对话框');
        await page.waitForSelector('#email');
        await page.waitForTimeout(3000);
        await page.focus('#email');
        await page.type('#email', account);
        console.log('账号填写完毕');
        await page.focus('#password');
        await page.type('#password', password);
        console.log('密码填写完毕');
        await page.keyboard.press('Enter');
        await page.waitForTimeout(5000);
        console.log('用户登陆成功');       
        
        await page.click("button.close");
        console.log('关闭广告');
        await page.waitForTimeout(4000);

        console.log('正在打开SPS页面...');
        await page.click("div.sps-container");
        await page.waitForTimeout(6000);
        
        console.log('正在收取SPS质押收益...');
        const text1 = await page.$eval('#readyToClaimInfo', el => el.innerHTML);
        if (text1=='None'){
          console.log('获得质押收益为0');
        }
        else{
          console.log('获得质押收益为'+text1);
          await page.click("button.claim_button");
          await page.waitForTimeout(12000);
        }
        
        console.log('正在收取SPS空投收益...');
        const text2 = await page.$eval('#claim_amount_hive', el => el.innerHTML);
        if (text2=='0'){
          console.log('获得SPS空投收益为0');
        }
        else{
          console.log('获得SPS空投收益为'+text2);
          await page.focus('#claim_btn_hive');
          await page.keyboard.press('Enter');
          await page.waitForTimeout(12000);
        }

        console.log('正在开始新一轮的SPS质押...');
        await page.click("button.orange");
        await page.waitForTimeout(6000);


        console.log('正在处理弹出SPS质押对话框...');
        const text3 = await page.$eval('#my_sps_balance', el => el.innerHTML);      
        await page.focus('#btnStake');
        await page.keyboard.press('Enter');
        await page.waitForTimeout(12000);        
        console.log('质押成功!,本次质押SPS总额为'+text3);
        console.log('关闭SPS质押对话框');
        
        
    } catch (e) {
        throw new Error('运行错误，请检查相关设置');
    }
}