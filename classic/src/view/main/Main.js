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
        'DocsTestApp.view.main.MainModel'
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
            region: 'north',
            xtype: 'panel',
            items: {
                xtype: 'button',
                text: 'Документы',
                style: {
                    backgroundColor: 'transparent',
                    border: 'none'
                },
                listeners: {
                    click: 'onDocumentsClick'
                }
            }
        },
        {   
            region: 'center',
            items: {
                xtype: 'mainlist'
            }
        },
        {
            region: 'east',
            width: 250,
            items: {
                xtype: 'sidebar'
            }
        }
    ]
});
