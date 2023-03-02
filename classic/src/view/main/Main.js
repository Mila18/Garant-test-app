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
            },
        ],
        items: {
            xtype: 'panel',
            layout: 'hbox',
            items: [
                {
                    title: 'Tab Panel',
                    header: false,
                    xtype: 'tabpanel',
                    reference: 'tab',  
                    flex: 1,
                    ui: 'navigation'
                },
                {
                    xtype: 'panel',
                    maxWidth: 180,
                    minHeight: 1000,
                    border: true,
                    ui: 'navigation',
                    items: [
                        {
                            xtype: 'label',
                            margin: '20',
                            style: {
                                display: 'inline-block'
                            },
                            bind: {
                                html: 'Добрый день, {Login}'
                            },
                        }, {
                            xtype: 'button',
                            ui: 'custom-button',
                            text: 'Выйти',
                            maxWidth: '100',
                            margin: '0 50',
                            listeners: {
                                click: 'onLogoutButton'
                            }
                        }
                    ]
                }
            ]
        }
    }
});
