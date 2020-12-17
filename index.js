const puppeteer = require('puppeteer');

(async () => {

    const browser = await puppeteer.launch({headless: false, args: ["--disable-notifications"]});

    const page = await browser.newPage();

    await page.setViewport({ width: 1366, height: 768});

    await page.setDefaultNavigationTimeout(0); 
    
    process.on('unhandledRejection', (reason, p) => {
        console.error('Unhandled Rejection at: Promise', p, 'reason:', reason);
        browser.close();
    });
    
    const meetJoin = async function () {
        await page.goto('https://apps.google.com/meet/');   
    
        await page.click('body > header > div.glue-header__bar.glue-header__bar--desktop.glue-header__drawer > div > div.glue-header__container.glue-header__container--cta > div.primary-meet-cta.tbd > div > span:nth-child(1)');
    
        await page.waitForSelector('#identifierId');
    
        await page.type('#identifierId', /*your email*/);

        await page.keyboard.press("Enter");

        await page.waitForSelector('#password > div.aCsJod.oJeWuf > div > div.Xb9hP > input');

        await page.waitFor(4000);

        await page.type('#password > div.aCsJod.oJeWuf > div > div.Xb9hP > input', /*your password*/);

        await page.keyboard.press("Enter");

        await page.waitFor(4000);

        await page.type('#i3', "viz-iitr-dcr");

        await page.keyboard.press("Enter");

        await page.waitFor(4000);
    
        await page.evaluate(() => {
           document.querySelector("#yDmH0d > div.llhEMd.iWO5td > div > div.g3VIld.vdySc.pMgRYb.Up8vH.J9Nfi.iWO5td > div.XfpsVe.J9fJmf > div > span > span").click();
        })
    
        await page.waitFor(3000);

        await page.evaluate(() => {
           document.querySelector("#yDmH0d > c-wiz > div > div > div:nth-child(8) > div.crqnQb > div > div > div.vgJExf > div > div.KieQAe > div.d7iDfe.NONs6c > div > div.Sla0Yd > div > div.XCoPyb > div.uArJ5e.UQuaGc.Y5sE8d.uyXBBb.xKiqt > span").click();
        })

        await page.waitFor(3000);

    }

    meetJoin();

    await page.screenshot({path: "insidelogin.jpg"});

    //browser.close();
})();
    


