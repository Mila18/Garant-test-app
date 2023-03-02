Ext.define('DocsTestApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'DocsTestApp.store.Goods'
    ],
    
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
            flex: 1,
            renderer: function(value, metaData) {
                if (value === 'Да') {
                    metaData.tdStyle = 'background-color: #125412; color: #fff;'
                }
                return value
            }
        }
    ],

    listeners: {
        rowdblclick: function(ctx, record) {
            Ext.create('Ext.window.Window', {
                title: `Документ №${record.data.id}`,
                height: 200,
                width: 400,
                ui: 'window',
                items: {
                    xtype: 'panel',
                    header: false,
                    title: 'manage-docs-modal',
                    margin: '15',
                    items: [
                        {
                            xtype: 'textfield',
                            name: 'title',
                            fieldLabel: 'Название',
                            id: 'title',
                            value: record.data.title,
                            ui: 'textfield'
                        }, {
                            xtype: 'checkbox',
                            fieldLabel: 'Подписать документ',
                            name: 'sign',
                            id: 'sign',
                            value: record.data.sign === 'Да' ? true : false,
                        }
                    ],
                    dockedItems: {
                        xtype: 'toolbar',
                        dock: 'bottom',
                        items: [
                            '->', {
                            xtype: 'button',
                            text: 'Сохранить',
                            ui: 'custom-button',
                            listeners: {
                                click: function() {
                                    console.log('manageBtn')
                                }
                            }}                           
                        ]
                    }
                }
            }).show();
        }
    }
});
