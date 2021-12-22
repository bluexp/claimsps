const puppeteer = require('puppeteer');

require('dotenv').config();
let account = process.env.ACCOUNT;
let password = process.env.PASSWORD;
let hl = process.env.HEADLESS;
(async () => {
  const browser = await puppeteer.launch({headless:hl,args:['--start-maximized']});
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
        console.log('自动关闭了确认对话框');
        await page.waitForTimeout(5000);

    });

  console.log('用户名 ', account)
  console.log('机器人开始运行时间 ',new Date().toLocaleString())

  await login(page, account, password).catch(e=>{
    console.log(e);
    throw new Error('登陆错误，请检查相关设置');
   });
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

        console.log('打开SPS页面');
        await page.click("div.sps-container");
        await page.waitForTimeout(14000);
        
        console.log('收取SPS质押收益');
        /*await page.click("button.claim_button");
        await page.waitForTimeout(12000);



        console.log('收取SPS空投收益');
        await page.focus('#claim_btn_hive');
        await page.keyboard.press('Enter');
        await page.waitForTimeout(12000);

        console.log('开始新SPS质押');
        await page.click("button.orange");
        await page.waitForTimeout(6000);


        console.log('弹出SPS质押对话框');
        await page.focus('#btnStake');
        await page.keyboard.press('Enter');
        await page.waitForTimeout(12000);        
        console.log('关闭SPS质押对话框，质押成功');
        */
        
    } catch (e) {
        throw new Error('运行错误，请检查相关设置');
    }
}