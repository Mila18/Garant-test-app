Ext.define('DocsTestApp.store.Sidebar', {
    extend: 'Ext.panel.Panel',
    xtype: 'sidebar',
    width: 250,
    height: '100%',
    layout: {
        type: 'vbox',
        align: 'middle'
    },
    items: [
        {
            xtype: 'label',
            html: `Добрый день, ${localStorage.getItem("Login")}`,
            margin: '20 0'
        },
        {
            xtype: 'button',
            text: 'Выйти',
            listeners: {
                click: 'onLogoutButton'
            }
        }
    ]
});
