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

    it.only("Find element by class name", async()=>{
        const className = await $('android.widget.TextView')
        console.log(await className.getText())
        await expect(className).toHaveText("API Demos")
    })
})