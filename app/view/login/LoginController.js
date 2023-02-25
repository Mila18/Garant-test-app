Ext.define('DocsTestApp.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onLoginClick: function() {

        // This would be the ideal location to verify the user's credentials via
        // a server-side lookup. We'll just move forward for the sake of this example.
        var usernameField = Ext.getCmp('username')
        var usernameValue = usernameField.getValue()
        var passwordField = Ext.getCmp('password')
        var passwordValue = passwordField.getValue()

        if (usernameValue === 'admin' && passwordValue == 'adm123') {
            localStorage.setItem("Login", usernameValue);
            localStorage.setItem("Password", passwordValue);
        
            // Remove Login Window
            this.getView().destroy();

            // Add the main view to the viewport
            Ext.create({
                xtype: 'app-main'
            });
        } else alert('Логин и/или пароль неверны')

    }
});