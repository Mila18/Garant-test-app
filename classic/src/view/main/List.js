/**
 * This view is an example list of people.
 */
Ext.define('DocsTestApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'DocsTestApp.store.Personnel'
    ],

    title: 'Список товаров',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'Id',  dataIndex: 'id' },
        { text: 'Название', dataIndex: 'title', flex: 1 },
        { text: 'Описание', dataIndex: 'description', flex: 1 },
        { text: 'Подпись', dataIndex: 'sign', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
