Ext.define('DocsTestApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemClicked: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

    onLogoutButton: function() {
        localStorage.removeItem('Login');
        localStorage.removeItem('Password');

        this.getView().destroy();

        Ext.create({
            xtype: 'login'
        });
    },

    onDocumentsClick: function() {
        this.getView().lookupReference('tab').add({ xtype: 'mainlist', closable: true, title: 'Список товаров', })
    }
});