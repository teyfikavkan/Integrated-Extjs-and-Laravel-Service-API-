/**
 * Demonstrates usage of an accordion layout.
 */
Ext.define('KitchenSink.view.layout.Accordion', {
    extend: 'Ext.panel.Panel',
    xtype: 'layout-accordion',

    requires: [
        'Ext.layout.container.Accordion',
        'Ext.grid.*'
    ],

    //<example>
    otherContent: [{
        type: 'Controller',
        path: 'classic/samples/view/grid/BasicGridController.js'
    }, {
        type: 'Model',
        path: 'app/model/Company.js'
    }],
    profiles: {
        classic: {
            width: 600,
            height: 500,
            gainColor: 'green',
            lossColor: 'red'
        },
        neptune: {
            width: 700,
            height: 500,
            gainColor: '#73b51e',
            lossColor: '#cf4c35'
        
        },
        graphite: {
            width: 700,
            height: 650,
            gainColor: 'unset',
            lossColor: 'unset'
        }
    },
    //</example>

    title: 'Accordion Layout',
    layout: 'accordion',
    width: '${width}',
    height: '${height}',
    defaults: {
        bodyPadding: 10
    },

    items: [{
        // See Grids / Basic Grid example for this view.
        xtype: 'array-grid',
        title: 'Basic Grid (Click or tap header to collapse)',
        tools: [
            { type: 'pin' }, { type: 'unpin' }, { type: 'gear' }
        ],
        bodyPadding: 0
    }, {
        title: 'Accordion Item 2',
        tools: [
            { iconCls: 'x-fa fa-thumb-tack' },
            { iconCls: 'x-fa fa-thumb-tack fa-rotate-90' },
            { iconCls: 'x-fa fa-gear' }
        ],
        html: 'Empty'
    }, {
        title: 'Accordion Item 3',
        tools: [
            { glyph: 'xf08d@FontAwesome' },
            { glyph: 'xf08d@FontAwesome', cls: 'fa-rotate-90' },
            { glyph: 'xf013@FontAwesome' }
        ],
        html: 'Empty'
    }, {
        title: 'Accordion Item 4',
        tools: [
            { iconCls: 'x-fa fa-thumb-tack' },
            { iconCls: 'x-fa fa-thumb-tack fa-rotate-90' },
            { iconCls: 'x-fa fa-gear' }
        ],
        html: 'Empty'
    }, {
        title: 'Accordion Item 5',
        tools: [
            { glyph: 'xf08d@FontAwesome' },
            { glyph: 'xf08d@FontAwesome', cls: 'fa-rotate-90' },
            { glyph: 'xf013@FontAwesome' }
        ],
        html: 'Empty'
    }]
});
