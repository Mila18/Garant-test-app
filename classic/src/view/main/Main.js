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

    items: {
        xtype: 'panel',
        minHeight: '700',
        dockedItems: [
            {
                xtype: 'toolbar',
                dock: 'top',
                items: {
                    xtype: 'button',
                    ui: 'custom-button',
                    text: 'Документы',
                    listeners: {
                        click: 'onDocumentsClick'
                    }
                }
            },{
                xtype: 'toolbar',
                dock: 'right',
                width: 160,
                border: true,
                items: [
                    {
                        xtype: 'label',
                        bind: {
                            html: 'Добрый день, {Login}'
                        },
                        margin: '20 15'
                    }, {
                        xtype: 'button',
                        ui: 'custom-button',
                        text: 'Выйти',
                        maxWidth: '100',
                        margin: '0 20',
                        listeners: {
                            click: 'onLogoutButton'
                        }
                    }
                ]
            }
        ],
        items: {
            title: 'Tab Panel',
            header: false,
            xtype: 'tabpanel',
            reference: 'tab',  
            ui: 'navigation'  
        }
    }
});
