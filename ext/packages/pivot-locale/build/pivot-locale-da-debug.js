
/**
 * Danish translation by Steen Ole Andersen
 *
 */

Ext.define('Ext.locale.da.pivot.Grid', {
    override: 'Ext.pivot.Grid',

    textTotalTpl:       'Total ({name})',
    textGrandTotalTpl:  'Grand total'
});
Ext.define('Ext.locale.da.pivot.plugin.RangeEditor', {
    override: 'Ext.pivot.plugin.RangeEditor',

    textWindowTitle:    'Range editor',
    textFieldValue:     'Værdi',
    textFieldEdit:      'Felt',
    textFieldType:      'Type',
    textButtonOk:       'Ok',
    textButtonCancel:   'Fortryd',
    textTypePercentage: 'Procent',
    textTypeIncrement:  'Forøg',
    textTypeOverwrite:  'Overskriv',
    textTypeUniformly:  'Ensartet'

});
Ext.define('Ext.locale.da.pivot.plugin.configurator.Column', {
    override: 'Ext.pivot.plugin.configurator.Column',

    sumText:                    'Sum',
    avgText:                    'Gns',
    countText:                  'Antal',
    minText:                    'Min',
    maxText:                    'Max',
    groupSumPercentageText:     'Gruppe sum procent',
    groupCountPercentageText:   'Gruppe antal procent',
    varText:                    'Var',
    varPText:                   'Varp',
    stdDevText:                 'StdDev',
    stdDevPText:                'StdDevp',

    sortAscText:                'Sorter A to Z',
    sortDescText:               'Sorter Z to A',
    sortClearText:              'Fravælg sortering',
    clearFilterText:            'Slet filter fra "{0}"',
    labelFiltersText:           'Label filtre',
    valueFiltersText:           'Værdi filtre',
    equalsText:                 'Lig med...',
    doesNotEqualText:           'Ej lig med...',
    beginsWithText:             'Begynder med...',
    doesNotBeginWithText:       'Begynder ikke med...',
    endsWithText:               'Slutter med...',
    doesNotEndWithText:         'Slutter ikke med...',
    containsText:               'Indeholder...',
    doesNotContainText:         'Indeholder ikke...',
    greaterThanText:            'Større end...',
    greaterThanOrEqualToText:   'Større end eller lig med...',
    lessThanText:               'Mindre end...',
    lessThanOrEqualToText:      'Mindre end eller lig med...',
    betweenText:                'Mellem...',
    notBetweenText:             'Ikke mellem...',
    top10Text:                  'Top 10...',

    equalsLText:                'lig med',
    doesNotEqualLText:          'ej lig med',
    beginsWithLText:            'begynder med',
    doesNotBeginWithLText:      'begynder ikke med',
    endsWithLText:              'slutter med',
    doesNotEndWithLText:        'slutter ikke med',
    containsLText:              'indeholder',
    doesNotContainLText:        'indeholder ikke',
    greaterThanLText:           'er større end',
    greaterThanOrEqualToLText:  'er større end eller lig med',
    lessThanLText:              'er mindre end',
    lessThanOrEqualToLText:     'er mindre end eller lig med',
    betweenLText:               'er mellem',
    notBetweenLText:            'ikke er mellem',
    top10LText:                 'Top 10...',
    topOrderTopText:            'Øverst',
    topOrderBottomText:         'Nederst',
    topTypeItemsText:           'Elementer',
    topTypePercentText:         'Procent',
    topTypeSumText:             'Sum'

});
Ext.define('Ext.locale.da.pivot.plugin.configurator.FilterLabelWindow',{
    override: 'Ext.pivot.plugin.configurator.FilterLabelWindow',

    titleText:          'Label filter ({0})',
    fieldText:          'Vis elementer for hvilke',
    caseSensitiveText:  'Case sensitive'
});
Ext.define('Ext.locale.da.pivot.plugin.configurator.FilterTopWindow',{
    override: 'Ext.pivot.plugin.configurator.FilterTopWindow',

    titleText:      'Top 10 filter ({0})',
    fieldText:      'Vis',
    sortResultsText:'Sorter resultat'
});
Ext.define('Ext.locale.da.pivot.plugin.configurator.FilterValueWindow',{
    override: 'Ext.pivot.plugin.configurator.FilterValueWindow',

    titleText:      'Value filter ({0})',
    fieldText:      'Vis elementer for hvilke'
});
Ext.define('Ext.locale.da.pivot.plugin.configurator.Panel', {
    override: 'Ext.pivot.plugin.configurator.Panel',

    panelAllFieldsText:     'Drop ubrugte felter her',
    panelTopFieldsText:     'Drop kolonne felter her',
    panelLeftFieldsText:    'Drop række felter her',
    panelAggFieldsText:     'Drop agg felter her'

});
