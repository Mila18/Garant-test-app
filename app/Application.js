Ext.define('DocsTestApp.Application', {
    extend: 'Ext.app.Application',

    name: 'DocsTestApp',

    launch: function () {
        var login;
        var password;

        login = localStorage.getItem("Login");
        password = localStorage.getItem("Password");

        Ext.create({
            viewModel: {
                type: 'main'
            },
            plugins: 'viewport',
            xtype: 'container',
            items: [{
                    xtype: 'app-main',
                    hidden: true,
                    bind: {
                        hidden: '{!isLogged}'
                    }

                }, {
                    xtype: 'login',
                    hidden: true,
                    bind: {
                        hidden: '{isLogged}'
                    }
                }
            ]
        });
    }
});
