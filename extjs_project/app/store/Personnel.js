Ext.define('extjsproject.store.Personnel', {
    extend: 'Ext.data.Store',

    requires: [
       'extjsproject.model.Personnel',
       'Ext.data.proxy.Ajax',
       'Ext.data.reader.Json'
   ],

    alias: 'store.personnel',
    id: 'PersonTableStore',
    autoLoad: true,

    model: 'extjsproject.model.Personnel',


    proxy: {
        type: 'ajax',
        url : 'http://localhost:8000/api/info',
        reader: {
            type: 'json',
        }
    }
});
