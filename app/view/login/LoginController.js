Ext.define('DocsTestApp.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onLoginClick: function() {

        var usernameValue = Ext.getCmp('username').getValue()
        var passwordValue = Ext.getCmp('password').getValue()

        if (usernameValue === 'admin' && passwordValue == 'adm123') {
            localStorage.setItem("Login", usernameValue);
            localStorage.setItem("Password", passwordValue);
        
            this.getView().destroy();

            Ext.create({
                xtype: 'app-main'
            });
        } else alert('Логин и/или пароль неверны')

    }
});