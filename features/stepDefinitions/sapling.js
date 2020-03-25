const {Builder, By, Key, until, Keys} = require ('selenium-webdriver');
const { Given, When, Then, setDefaultTimeout } = require ('cucumber');
var webdriver = require ('selenium-webdriver');
require('chromedriver');
var driver;
setDefaultTimeout(1000000);
const { WElements} = require(`${process.cwd()}/pages/sapling.js`);

Given (/^iniciar sesion en Sapling con usuario "(.*)" y contraseña "(.*)$/, async function (usuario, contraseña) {
    this.driver = await new webdriver.Builder().forBrowser('chrome').build();
    await this.driver.get ('https://int.saplinglearning.me/ibiscms/login/');  

    await this.driver.wait(until.elementLocated(By.xpath(WElements.WEusuario)));
    var WEusuario = await this.driver.findElement(By.xpath(WElements.WEusuario)); 
    await WEusuario.sendKeys(usuario);

    await this.driver.wait(until.elementLocated(By.xpath(WElements.WEcontraseña)));
    var WEcontraseña = await this.driver.findElement(By.xpath(WElements.WEcontraseña)); 
    await WEcontraseña.sendKeys(contraseña);

    await this.driver.findElement(By.xpath(WElements.WElogIn)).click();

    });

When('Ingresar a raptor item', async function () {

        await this.driver.wait(until.elementLocated(By.xpath(WElements.WEraptorItem)));
        let WEraptorItem = await this.driver.findElement(By.xpath(WElements.WEraptorItem));
        await WEraptorItem.click();
    });

    Then('Crear pregunta en SAVI', async function () {
       
        await this.driver.wait(until.elementLocated(By.xpath(WElements.WEadd)));
        let WEadd = await this.driver.findElement(By.xpath(WElements.WEadd));
        await WEadd.click();
        
        await this.driver.wait(until.elementLocated(By.xpath(WElements.WEsavi)));
        let WEsavi = await this.driver.findElement(By.xpath(WElements.WEsavi));
        await WEsavi.click();

        await this.driver.wait(until.elementLocated(By.xpath(WElements.WEblanco)));
        let WEblanco = await this.driver.findElement(By.xpath(WElements.WEblanco));
        await WEblanco.click();
        

    });

    And('Guardar pregunta', async function (){

        await this.driver.wait(until.elementLocated(By.xpath(WElements.WEmore)));
        let WEmore = await this.driver.findElement(By.xpath(WElements.WEmore));
        await WEmore.click();

        await this.driver.wait(until.elementLocated(By.xpath(WElements.WEsave)));
        let WEsave = await this.driver.findElement(By.xpath(WElements.WEsave));
        await WEsave.click();
    });