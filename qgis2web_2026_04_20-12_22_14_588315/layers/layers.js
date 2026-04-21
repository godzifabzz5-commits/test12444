var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_final_1 = new ol.format.GeoJSON();
var features_final_1 = format_final_1.readFeatures(json_final_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_final_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_final_1.addFeatures(features_final_1);
var lyr_final_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_final_1, 
                style: style_final_1,
                popuplayertitle: 'final',
                interactive: true,
    title: 'final<br />\
    <img src="styles/legend/final_1_0.png" /> 0 - 20<br />\
    <img src="styles/legend/final_1_1.png" /> 20 - 40<br />\
    <img src="styles/legend/final_1_2.png" /> 40 - 60<br />\
    <img src="styles/legend/final_1_3.png" /> 60 - 80<br />\
    <img src="styles/legend/final_1_4.png" /> 80 - 100<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_final_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_final_1];
lyr_final_1.set('fieldAliases', {'ID': 'ID', 'NOM': 'NOM', 'CODE_SIREN': 'CODE_SIREN', 'Nombre d\'h': 'Nombre d\'h', 'Taux': 'Taux', });
lyr_final_1.set('fieldImages', {'ID': 'TextEdit', 'NOM': 'TextEdit', 'CODE_SIREN': 'TextEdit', 'Nombre d\'h': 'TextEdit', 'Taux': 'TextEdit', });
lyr_final_1.set('fieldLabels', {'ID': 'hidden field', 'NOM': 'hidden field', 'CODE_SIREN': 'hidden field', 'Nombre d\'h': 'inline label - always visible', 'Taux': 'inline label - always visible', });
lyr_final_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});