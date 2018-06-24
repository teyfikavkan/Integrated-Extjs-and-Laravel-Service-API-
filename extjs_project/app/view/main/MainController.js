  /**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
 function isEmptyTextField(choice)
 {
   var isEmpty=false;
   if(choice==1)
   {
     if(Ext.getCmp('nameNameId').getValue()!="")
     {
       if(Ext.getCmp('nameAgeId').getValue()!="")
       {
         if(Ext.getCmp('nameBioId').getValue()!="")
         {
           isEmpty=true;
           console.log('Checked All TextField Not Null');
         }
       }

     }
   }
   else if(choice==2)
   {
     if( Ext.getCmp('createNameId').getValue()!=""){
       if(Ext.getCmp('createAgeId').getValue()!=""){
         if(Ext.getCmp('createBioId').getValue()!="")
         {
           isEmpty=true;
           console.log('Checked All TextField Not Null');
         }
       }
     }
   }


   return isEmpty;
 }

 function isSelectedGrid(){
 var isSelected=false;
   if(Ext.getCmp('infoPanelId').getSelectionModel().hasSelection())
   {
     isSelected=true;
   }
   return isSelected;
 }
 function clearAllText(choice)
 {
   if(choice==1)
   {
     Ext.getCmp('nameNameId').setValue("");
     Ext.getCmp('nameAgeId').setValue("");
     Ext.getCmp('nameBioId').setValue("");
     Ext.getCmp('infoBioTextId').setValue("");
     Ext.getCmp('infoPanelId').getSelectionModel().deselectAll();
   }
   else if(choice==2)
   {
     Ext.getCmp('createNameId').setValue("");
     Ext.getCmp('createAgeId').setValue("");
     Ext.getCmp('createBioId').setValue("");
   }

 }



Ext.define('extjsproject.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {

       var tempBio="burası değişcek";
       Ext.getCmp('infoBioTextId').setValue(tempBio);
        //Ext.Msg.confirm('Information of That Person', 'Do you want to change something about this person?','onConfirm',this);
        Ext.Msg.confirm('Information of That Person', 'Do you want to change something about this person?',function(choice)
      {
        if (choice === 'yes')
        {
          Ext.getCmp('nameNameId').setValue(record.data.name);
          Ext.getCmp('nameAgeId').setValue(record.data.age);
          Ext.getCmp('nameBioId').setValue(tempBio);

        }
        else
        {

        }
      });

    },
    onDeleteBttnClick: function(button, e, eOpts) {

        console.log("Delete Button Activated");
        if(isSelectedGrid())
        {
          // TODO: buraya silme mekanizması eklenecek.
          Ext.Msg.alert('Deleting...', 'The selected person has been deleted!!!');
          clearAllText(1);

        }
        else {
          Ext.Msg.alert('Non-Selected Person', 'Please select a person.');
        }


    },
    onUpdateBttnClick: function(button, e, eOpts) {
        console.log("Update Button Activated");
        if(isSelectedGrid())
        {
          if(isEmptyTextField(1))
          {
            var updateName=Ext.getCmp('nameNameId').getValue();
            var updateAge=Ext.getCmp('nameAgeId').getValue();
            var updateBio=Ext.getCmp('nameBioId').getValue();
            // TODO: buraya update mekanizması eklenecek.
            Ext.Msg.alert('Up-To-Date', 'You have already updated a person Information.');
            Ext.getCmp('infoPanelId').getSelectionModel().deselectAll();
            clearAllText(1);
          }
          else {
            Ext.Msg.alert('Not Filled Informations', 'Please fill all information to update.');
          }
        }
        else {
          Ext.Msg.alert('Non-Selected Person', 'Please select a person.');
        }


    },

    onRefreshBttnClick: function(button,e,eOpts)
    {   console.log("Refresh Button Activated");
        // TODO: refresh mekanizması eklenecek...
        clearAllText(1);

    },
    onCreateBttnClick: function(button,e,eOpts)
    {
      console.log("Create Button Activated");
      if(isEmptyTextField(2))
      {
        var updateName=Ext.getCmp('createNameId').getValue();
        var updateAge=Ext.getCmp('createAgeId').getValue();
        var updateBio=Ext.getCmp('createBioId').getValue();
        // TODO: buraya eklenme mekanızması eklenecek.

        Ext.Msg.alert('Creating...', 'You have already created a new account...');
        clearAllText(2);
        clearAllText(1);
      }
      else {
        Ext.Msg.alert('Not Filled Informations', 'Please fill all informations.');
      }

    },


    // onConfirm: function (choice) {
    //     if (choice === 'yes')
    //     {
    //       Ext.getCmp('nameNameId').setValue(record.data.name);
    //       Ext.getCmp('nameAgeId').setValue(record.data.age);
    //     }
    //     else
    //     {
    //
    //     }
    // }
});
