describe('Delete Note',()=>{
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

    it('Delete a note & check the note in trash can', async ()=>{
       await driver.back();
       const note = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]').getText();
       //click on note
       await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]').click();
       //click on more icon
       await $('~More').click();
       //click on delete button
       await $('//*[@text="Delete"]').click();
       //accept the alert
       driver.acceptAlert();
       //click on nav icon
       await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click();
        //click on trash can
        await $('//*[@text="Trash Can"]').click()
        //asseration to get the text of trash can
        const trashcanitem = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]').getText()
        await expect(trashcanitem).toEqual(note);


    })
})