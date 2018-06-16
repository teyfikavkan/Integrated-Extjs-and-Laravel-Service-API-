<!DOCTYPE html>
<html>

<head>


    <script type="text/javascript" src="file://C:/xampp/htdocs/bootstrap.js"></script>
    <script type="text/javascript" src="file://C:/xampp/htdocs/ext/ext-all.js"></script>
    <script type="text/javascript" href="https://github.com/teyfikavkan/LaravelProject/tree/master/laravelproject/resources/views/ext/ext-all.js"></script>

    <link type="text/css" href="file://C:/xampp/htdocs/homestyle.css" rel="stylesheet" />

    <title>Welcome!!!</title>
        <link rel="stylesheet" type="text/css" href="http://cdn.sencha.com/ext/gpl/5.0.0/build/packages/ext-theme-neptune/build/resources/ext-theme-neptune-all.css">

    <style>
        table {
            font-family: arial, sans-serif;
            border-collapse: collapse;
            width: 100%;
        }
        td, th {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
        }
        tr:nth-child(even) {
            background-color: #dddddd;
        }
    </style>

</head>
<body>
<div class="container">
    <div class="panel panel-default">
        <div class="panel-body">
            <div id="Info">
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>


                    @foreach($listofpeople as $data)
                        <tr>
                            <td>{{ $data->id }}</td>
                            <td>{{$data->name}}</td>
                            <td>{{$data->age}}</td>
                        </tr>
                    @endforeach
                    <script>
                        alert('Displayed Information of People')

                        Ext.define('KitchenSink.view.grid.ProgressBarPager', {
                            extend: 'Ext.grid.Panel',

                            requires: [
                                'Ext.data.*',
                                'Ext.grid.*',
                                'Ext.util.*',
                                'Ext.toolbar.Paging',
                                'Ext.ux.ProgressBarPager',
                                'KitchenSink.model.Company'
                            ],
                            xtype: 'progress-bar-pager',


                            stripeRows: true,
                            height: 320,
                            frame: true,
                            title: 'Progress Bar Pager',

                            initComponent: function() {
                                this.width = 650;

                                var store = new Ext.data.Store({
                                    model: KitchenSink.model.Company,
                                    remoteSort: true,
                                    pageSize: 10,
                                    proxy: {
                                        type: 'memory',
                                        enablePaging: true,
                                        data: KitchenSink.data.DataSets.company,
                                        reader: {
                                            type: 'array'
                                        }
                                    }
                                });

                                Ext.apply(this, {
                                    store: store,
                                    columns: [{
                                        text: 'Company',
                                        sortable: true,
                                        dataIndex: 'company',
                                        flex: 1
                                    },{
                                        text: 'Price',
                                        sortable: true,
                                        renderer: Ext.util.Format.usMoney,
                                        dataIndex: 'price',
                                        width: 75
                                    },{
                                        text: 'Change',
                                        sortable: true,
                                        renderer: this.changeRenderer,
                                        dataIndex: 'change',
                                        width: 80
                                    },{
                                        text: '% Change',
                                        sortable: true,
                                        renderer: this.pctChangeRenderer,
                                        dataIndex: 'pctChange',
                                        width: 100
                                    },{
                                        text: 'Last Updated',
                                        sortable: true,
                                        dataIndex: 'lastChange',
                                        width: 115,
                                        renderer: Ext.util.Format.dateRenderer('m/d/Y')
                                    }],
                                    bbar: {
                                        xtype: 'pagingtoolbar',
                                        pageSize: 10,
                                        store: store,
                                        displayInfo: true,
                                        plugins: new Ext.ux.ProgressBarPager()
                                    }
                                });
                                this.callParent();
                            },

                            afterRender: function(){
                                this.callParent(arguments);
                                this.getStore().load();
                            },

                            changeRenderer: function(val) {
                                if (val > 0) {
                                    return '<span style="color:green;">' + val + '</span>';
                                } else if(val < 0) {
                                    return '<span style="color:red;">' + val + '</span>';
                                }
                                return val;
                            },

                            pctChangeRenderer: function(val){
                                if (val > 0) {
                                    return '<span style="color:green;">' + val + '%</span>';
                                } else if(val < 0) {
                                    return '<span style="color:red;">' + val + '%</span>';
                                }
                                return val;
                            }
                        });
                        Ext.define('KitchenSink.view.grid.ProgressBarPager', {
                            extend: 'Ext.grid.Panel',

                            requires: [
                                'Ext.data.*',
                                'Ext.grid.*',
                                'Ext.util.*',
                                'Ext.toolbar.Paging',
                                'Ext.ux.ProgressBarPager',
                                'KitchenSink.model.Company'
                            ],
                            xtype: 'progress-bar-pager',


                            stripeRows: true,
                            height: 320,
                            frame: true,
                            title: 'Progress Bar Pager',

                            initComponent: function() {
                                this.width = 650;

                                var store = new Ext.data.Store({
                                    model: KitchenSink.model.Company,
                                    remoteSort: true,
                                    pageSize: 10,
                                    proxy: {
                                        type: 'memory',
                                        enablePaging: true,
                                        data: KitchenSink.data.DataSets.company,
                                        reader: {
                                            type: 'array'
                                        }
                                    }
                                });

                                Ext.apply(this, {
                                    store: store,
                                    columns: [{
                                        text: 'Company',
                                        sortable: true,
                                        dataIndex: 'company',
                                        flex: 1
                                    },{
                                        text: 'Price',
                                        sortable: true,
                                        renderer: Ext.util.Format.usMoney,
                                        dataIndex: 'price',
                                        width: 75
                                    },{
                                        text: 'Change',
                                        sortable: true,
                                        renderer: this.changeRenderer,
                                        dataIndex: 'change',
                                        width: 80
                                    },{
                                        text: '% Change',
                                        sortable: true,
                                        renderer: this.pctChangeRenderer,
                                        dataIndex: 'pctChange',
                                        width: 100
                                    },{
                                        text: 'Last Updated',
                                        sortable: true,
                                        dataIndex: 'lastChange',
                                        width: 115,
                                        renderer: Ext.util.Format.dateRenderer('m/d/Y')
                                    }],
                                    bbar: {
                                        xtype: 'pagingtoolbar',
                                        pageSize: 10,
                                        store: store,
                                        displayInfo: true,
                                        plugins: new Ext.ux.ProgressBarPager()
                                    }
                                });
                                this.callParent();
                            },

                            afterRender: function(){
                                this.callParent(arguments);
                                this.getStore().load();
                            },

                            changeRenderer: function(val) {
                                if (val > 0) {
                                    return '<span style="color:green;">' + val + '</span>';
                                } else if(val < 0) {
                                    return '<span style="color:red;">' + val + '</span>';
                                }
                                return val;
                            },

                            pctChangeRenderer: function(val){
                                if (val > 0) {
                                    return '<span style="color:green;">' + val + '%</span>';
                                } else if(val < 0) {
                                    return '<span style="color:red;">' + val + '%</span>';
                                }
                                return val;
                            }
                        });


                    </script>
                </table>
            </div>


        </div>
    </div>
</div>

</body>
</html>
