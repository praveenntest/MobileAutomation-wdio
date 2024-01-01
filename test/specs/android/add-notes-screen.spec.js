const AddNoteScreen = require("../../screenobjects/android/add-note.screen");

describe("Add Notes",()=>{
    it("Skip tutorial", async()=>{
       await AddNoteScreen.skipBtn.click()
       await expect(AddNoteScreen.addNoteTxt).toBeDisplayed();
    })

    it('add a note, save changes & verify note', async () =>{
        await AddNoteScreen.addNoteTxt.click();
        await AddNoteScreen.txtOption.click();
        await expect(AddNoteScreen.txtEditing).toBeDisplayed();

        //add title note
        await AddNoteScreen.noteHeading.addValue("Fav Anie List");
        await AddNoteScreen.noteBody.addValue("Praveen\nis\ngood");

        //save the changes
        await AddNoteScreen.saveNote()

        //asseration
        await expect(AddNoteScreen.editButton).toBeDisplayed();
        await expect(AddNoteScreen.viewNote).toHaveText("Praveen\nis\ngood");
    })
})