Ext.define('DocsTestApp.store.Goods', {
    extend: 'Ext.data.Store',

    alias: 'store.goods',

    fields: [
        'Id', 'Название', 'Описание', 'Подпись'
    ],

    data: { items: [
        { id: '1', title: 'Первый документ', description: 'Описание 1', sign: 'Да'},
        { id: '2', title: 'Стипендии',  description: 'Описание 2', sign: 'Нет'},
        { id: '3', title: 'Открытие счетов',  description: 'Описание 3', sign: 'Нет'},
        { id: '4', title: 'Не последний документ',  description: 'Описание 4', sign: 'Да'},
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
