Ext.define('DocsTestApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onLogoutButton: function() {
        localStorage.removeItem('Login');
        localStorage.removeItem('Password');

        this.getView().destroy();

        Ext.create({
            xtype: 'login'
        });
    },

    onDocumentsClick: function() {
        this.getView().lookupReference('tab').add({ 
            xtype: 'mainlist', 
            closable: true, 
            title: 'Список товаров' 
        })
    }
});