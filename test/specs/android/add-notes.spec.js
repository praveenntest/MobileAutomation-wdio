describe("Add Notes",()=>{
    it("Skip tutorial", async()=>{
       await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click();
       await expect($('//*[@text="Add note"]')).toBeDisplayed();
    })

    it('add a note, save changes & verify note', async () =>{
        await $('//*[@text="Add note"]').click();
        await $('//*[@text="Text"]').click();
        await expect($('//*[@text="Editing"]')).toBeDisplayed();

        //add title note
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]').addValue("Fav Anie List");
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]')
        .addValue("Praveen\nis\ngood");

        //save the changes
        await driver.back();
        await driver.back();

        //asseration
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')).toBeDisplayed();
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')).toHaveText("Praveen\nis\ngood");
    })
})