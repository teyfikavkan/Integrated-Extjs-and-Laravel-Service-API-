
function getPeopleInfo()
{

    mysql_con('localhost','root',);

    mysql_select_db('laraveldb');

    $sql="select * from infopeople"

    $data=mysql_query($sql);

    return data;
}


Ext.define('PeopleDataModel', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'name', mapping : 'name'},
        {name: 'age', mapping : 'age'},
        {name: 'id', mapping : 'id'}
    ]
});

Ext.onReady(function() {
    // Store data


    var myData = [
        { name : "Asha", age : "16", id : "90" },
        { name : "Vinit", age : "18", id : "95" },
        { name : "Anand", age : "20", id : "68" },
        { name : "Niharika", age : "21", id : "86" },
        { name : "Manali", age : "22", id : "57" }
    ];

    // Creation of first grid store
    var gridStore = Ext.create('Ext.data.Store', {
        model: 'PeopleDataModel',
        data: myData
    });

    // Creation of first grid
    Ext.create('Ext.grid.Panel', {
        id                : 'gridId',
        store             : gridStore,
        stripeRows        : true,
        title             : 'People Information System',  // Title for the grid
        renderTo          :'gridDiv',         // Div id where the grid has to be rendered
        width             : 600,
        collapsible       : true,             // property to collapse grid
        enableColumnMove  :true,              // property which allows column to move to different position by dragging that column.
        enableColumnResize:true,        // property which allows to resize column run time.

        columns           :
            [{
                header: "People ID",
                dataIndex: 'id',
                flex: .5,
                sortable: true,

                // renderer is used to manipulate data based on some conditions here
                // who ever has marks greater than 75 will be displayed as
                // 'Distinction' else 'Non Distinction'.

            },{
                header: "Person Name",
                dataIndex: 'name',
                id : 'name',
                flex:  1,        // property defines the amount of space this column is going to take in the grid container with respect to all.
                sortable: true,  // property to sort grid column data.
                hideable: true   // property which allows column to be hidden run time on user request.
            },{
                header: "Person Age",
                dataIndex: 'age',
                flex: .5,
                sortable: true,
                hideable: false   // this column will not be available to be hidden.
            }]
    });
});