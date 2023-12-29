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
})