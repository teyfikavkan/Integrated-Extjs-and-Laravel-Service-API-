Ext.define('extjsproject.store.Personnel', {
    extend: 'Ext.data.Store',

    requires: [
       'extjsproject.model.Personnel',
       'Ext.data.proxy.Ajax',
       'Ext.data.reader.Json'
   ],

    alias: 'store.personnel',

    autoLoad: true,
    
    model: 'extjsproject.model.Personnel',


    proxy: {
        type: 'ajax',
        url : 'http://localhost:8000/loadtable',
        reader: {
            type: 'json',
        }
    }
});
