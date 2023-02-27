/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('DocsTestApp.view.main.Main', {
    extend: 'Ext.container.Container',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'DocsTestApp.view.main.MainController',
        'DocsTestApp.view.main.MainModel',
        'DocsTestApp.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',
    plugins: 'viewport',

    layout: {
        type: 'border',
    },
    defaults: {
        split: true
    },

    items: [
        {
            xtype: 'panel',
            header: false,
            title: 'menu',
            region: 'north',
            items: {
                xtype: 'button',
                text: 'Документы',
                margin: '8 8',
                region: 'north',
                handler: function() {
                    
                }
            }
        },{
            xtype: 'panel',
            header: false,
            title: 'mainPanel',
            id: 'mainpanel',
            region: 'center',
            items: {
                xtype: 'tabpanel',
                items: [
                    { 
                        xtype: 'mainlist',
                        closable: true 
                    }
                ]
            }
        },{
            xtype: 'sidebar',
            header: false,
            title: 'sidebar',
            region: 'east'
        }
    ]
});
