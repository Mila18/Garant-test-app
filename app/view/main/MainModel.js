Ext.define('DocsTestApp.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'DocsTestApp',
        isLogged: !!localStorage.getItem("Login"),
        Login: localStorage.getItem("Login"),
    }
});
