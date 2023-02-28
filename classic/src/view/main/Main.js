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
                        html: `Добрый день, ${localStorage.getItem("Login")}`,
                        margin: '20 30',
                        renderer: function (value, meta) {
                            console.log(meta, value)
                        }
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
                closable: true,
                xtype: 'mainlist',
                reference: 'table',
            }
        }
    }
});
