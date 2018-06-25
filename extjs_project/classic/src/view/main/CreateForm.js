Ext.define('extjsproject.view.main.CreateForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.myform',
    xtype: 'createPerson',
    height:250,
    width:650,

    requires: [
        'extjsproject.view.CreateFormViewModel',
        'Ext.form.field.TextArea',
        'Ext.button.Button'
    ],

    viewModel: {
        type: 'myform'
    },
    height: 334,
    width: 650,
    bodyPadding: 10,
    id: 'createPersonForm',
    title: 'Create Persom',

    items: [
        {
            xtype: 'textfield',
            anchor: '100%',
            id: 'createNameId',
            fieldLabel: 'Name :'
        },
        {
            xtype: 'textfield',
            anchor: '100%',
            id: 'createAgeId',
            fieldLabel: 'Age :'
        },
        {
            xtype: 'textareafield',
            id: 'createBioId',
            anchor: '100%',
            fieldLabel: 'Bio :'
        },
        {
            xtype: 'button',
            text: 'Create Person',
            x: 500,
            listeners:{
              click :"onCreateBttnClick"
            }
        },
        {
            xtype: 'button',
            text: 'Refresh Form',
            x: 50,
            listeners:{
              click :"onRefreshBttnClick"
            }
        },

    ],


});
