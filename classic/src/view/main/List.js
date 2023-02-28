Ext.define('DocsTestApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'DocsTestApp.store.Goods'
    ],

    title: 'Список товаров',

    store: {
        type: 'goods'
    },
    
    columns: [
        { text: 'Id',  dataIndex: 'id', width: '5%' },
        { text: 'Название', dataIndex: 'title', width: '30%'},
        { text: 'Описание', dataIndex: 'description', width: '40%'},
        { 
            text: 'Подпись', 
            dataIndex: 'sign', 
            width: '10%', 
            renderer: function(value, metaData) {
                if (value === 'Да') metaData.tdStyle = 'background-color: green'
                return value
            }
        }
    ],

    listeners: {
        dblclick: 'onItemClicked'
    }
});
