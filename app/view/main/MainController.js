/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
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
        this.getView().lookupReference('tab').add({ xtype: 'mainlist', closable: true })
    }
});