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
    viewModel: {
        type: 'main',
        data: {
            Login: localStorage.getItem('Login')
        }
    },
    plugins: 'viewport',

    items: {
        xtype: 'panel',
        minHeight: '700',
        dockedItems: [
            {
                xtype: 'toolbar',
                dock: 'top',
                items: {
                    xtype: 'button',
                    text: 'Документы',
                    listeners: {
                        click: 'onDocumentsClick'
                    }
                }
            },{
                xtype: 'toolbar',
                dock: 'right',
                width: 200,
                border: true,
                items: [
                    {
                        xtype: 'label',
                        bind: {
                            html: 'Добрый день, {Login}'
                        },
                        margin: '20 30'
                    }, {
                        xtype: 'button',
                        text: 'Выйти',
                        maxWidth: '100',
                        margin: '0 40',
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
            items: {
                title: 'Список товаров',
                closable: true,
                xtype: 'mainlist',
            }
        }
    }
});
