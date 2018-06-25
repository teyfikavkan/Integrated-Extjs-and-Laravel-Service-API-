Ext.define('extjsproject.model.Personnel', {
    extend: 'extjsproject.model.Base',

    requires: [
        'Ext.data.field.Integer',
        'Ext.data.field.String'
    ],

    fields: [
        {
            type: 'int',
            name: 'id'
        },
        {
            type: 'string',
            name: 'name'
        },
        {
            type: 'int',
            name: 'age'
        },
        {
            type: 'string',
            name: 'bio'
        }
    ]
});
