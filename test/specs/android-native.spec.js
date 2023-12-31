describe('Android Native Feature Tests', ()=>{
    it('Access an Activity directly',async()=>{
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.app.AlertDialogSamples");
        await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
    })

    it('Vertical Scrolling', async()=>{
        await $('~App').click();
        await $('~Activity').click();
        //Scroll to the end(not stable if element gets moved)
        //await $('android=new UiScollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');

        //ScrollTextIntoView - more stable
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click();

        //await $('~Secure Surfaces').click()

        //asseration
        await expect($('~Secure Dialog')).toExist();
    })

    it.only('Horizontal Scrolling', async()=>{
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.view.Gallery1");

        //Horizontal Scrolling
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()')

        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()')

    })
})