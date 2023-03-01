Ext.define('DocsTestApp.store.Goods', {
    extend: 'Ext.data.Store',

    alias: 'store.goods',
    
    fields: [
        'Id', 'Название', 'Описание', 'Подпись'
    ],

    data: { items: [
        { id: '1', title: 'Документ 1', description: 'Описание 1', sign: 'Да'},
        { id: '2', title: 'Документ 2',  description: 'Описание 2', sign: 'Нет'},
        { id: '3', title: 'Документ 3',  description: 'Описание 3', sign: 'Да'},
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
