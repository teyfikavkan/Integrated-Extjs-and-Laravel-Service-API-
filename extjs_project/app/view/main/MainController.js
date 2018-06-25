  /**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
 function createNewPerson(_name,_age,_bio)
 {
   Ext.Ajax.request({
     url: 'http://localhost:8000/api/info/',
     method: 'POST',
     params: {
         name : _name,
         age  : _age,
         bio  : _bio
     },
     success: false,
     failure: function(){console.log('failure');}
 });

 }

 function deleteExistingPerson(_id)
 {
   Ext.Ajax.request({
     url: 'http://localhost:8000/api/info/'+_id,
     method: 'POST',
     params: {
         _method : 'DELETE',

     },
     success: true,
     failure: function(){console.log('failure');}
 });

 }

 function updateExistingPerson(_id,_name,_age,_bio)
 {
   Ext.Ajax.request({
     url: 'http://localhost:8000/api/info/'+_id,
     method: 'POST',
     params: {
         name : _name,
         age  : _age,
         bio  : _bio,
         _method : 'PUT'

     },
     success: false,
     failure: function(){console.log('failure');}
 });
 }


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
     Ext.getCmp('infoPanelId').getStore().load();
     Ext.getCmp('infoPanelId').getSelectionModel().deselectAll();
     setSharedData();
   }
   else if(choice==2)
   {
     Ext.getCmp('createNameId').setValue("");
     Ext.getCmp('createAgeId').setValue("");
     Ext.getCmp('createBioId').setValue("");
     setSharedData();
   }

 }

 Ext.define('SharedData', {
     singleton: true,

     id  : -1,
     name: "None",
     age : -1,
     bio : "None"

 });


 function setSharedData()
 {
   SharedData.id = -1;
   SharedData.name = "None";
   SharedData.age = -1;
   SharedData.bio = "None";
 }


Ext.define('extjsproject.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {

      Ext.getCmp('infoBioTextId').setValue(record.data.bio);

      SharedData.id=record.data.id;
      SharedData.name=record.data.name;
      SharedData.age=record.data.age;
      SharedData.bio=record.data.bio;

        //Ext.Msg.confirm('Information of That Person', 'Do you want to change something about this person?','onConfirm',this);
      Ext.Msg.confirm('Information of That Person', 'Do you want to change something about this person?',function(choice)
      {
        if (choice === 'yes')
        {
          Ext.getCmp('nameNameId').setValue(record.data.name);
          Ext.getCmp('nameAgeId').setValue(record.data.age);
          Ext.getCmp('nameBioId').setValue(record.data.bio);

        }

      });

    },
    onDeleteBttnClick: function(button, e, eOpts) {

        console.log("Delete Button Activated");
        if(isSelectedGrid())
        {
          deleteExistingPerson(SharedData.id);
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
            updateExistingPerson(SharedData.id,updateName,updateAge,updateBio)
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
        clearAllText(2);

    },
    onCreateBttnClick: function(button,e,eOpts)
    {
      console.log("Create Button Activated");
      if(isEmptyTextField(2))
      {
        var createName=Ext.getCmp('createNameId').getValue();
        var createAge=Ext.getCmp('createAgeId').getValue();
        var createBio=Ext.getCmp('createBioId').getValue();
        createNewPerson(createName,createAge,createBio);
        clearAllText(2);
        clearAllText(1);
        Ext.Msg.alert('Creating...', 'You have already created a new account...');
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
