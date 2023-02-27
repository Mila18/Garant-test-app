Ext.define('DocsTestApp.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    fields: [
        'Id', 'Название', 'Описание', 'Подпись'
    ],

    data: { items: [
        { id: '1', title: 'Документ 1', description: 'Описание 1', sign: 'Да'},
        { id: '2', title: 'Документ 2',  description: 'Описание 2', sign: 'Нет'},
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
