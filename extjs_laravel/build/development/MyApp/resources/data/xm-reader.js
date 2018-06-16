Ext.define('Book', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name', 'email']
});

var store = Ext.create('Ext.data.Store', {
    model: 'Book',
    proxy: {
        type: 'ajax',
        url : 'sheldon.xml',
        reader: {
            type: 'xml',
            record: 'user',
            rootProperty: 'users'
        }
    }
});