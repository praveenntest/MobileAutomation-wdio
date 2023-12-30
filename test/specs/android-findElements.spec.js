describe('Android Elements Tests',()=>{
    it('Find element by accessibility id', async()=>{
       //find element by accessibility id
        const appOption = await $('~App');
        //click on element
        await appOption.click()
       //asseration
       const actionBar = await $('~Action Bar');
        await expect(actionBar).toBeExisting();

    })

    it("Find element by class name", async()=>{
        const className = await $('android.widget.TextView')
        console.log(await className.getText())
        await expect(className).toHaveText("API Demos")
    })

    it.skip("Find element by xpath", async()=>{
        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click()
        await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click()
        await $('//android.widget.TextView[@text="Command two"]').click()
        const textAsseration = await $('//android.widget.TextView');
        await expect(textAsseration).toHaveText("You selected: 1 , Command two");
    })

    it('Find element by UiAutomators', async() =>{
        await $('android=new UiSelector().textContains("Alert")').click()
    })
})