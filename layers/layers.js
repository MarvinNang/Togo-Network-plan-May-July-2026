var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_togo_new_scores_1 = new ol.format.GeoJSON();
var features_togo_new_scores_1 = format_togo_new_scores_1.readFeatures(json_togo_new_scores_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_togo_new_scores_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_togo_new_scores_1.addFeatures(features_togo_new_scores_1);
var lyr_togo_new_scores_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_togo_new_scores_1, 
                style: style_togo_new_scores_1,
                popuplayertitle: 'togo_new_scores',
                interactive: true,
    title: 'togo_new_scores<br />\
    <img src="styles/legend/togo_new_scores_1_0.png" /> 0 - 1<br />\
    <img src="styles/legend/togo_new_scores_1_1.png" /> 1 - 2<br />\
    <img src="styles/legend/togo_new_scores_1_2.png" /> 2 - 3<br />\
    <img src="styles/legend/togo_new_scores_1_3.png" /> 3 - 4<br />\
    <img src="styles/legend/togo_new_scores_1_4.png" /> 4 - 5<br />' });
var format_perfecture_boundaries_2 = new ol.format.GeoJSON();
var features_perfecture_boundaries_2 = format_perfecture_boundaries_2.readFeatures(json_perfecture_boundaries_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_perfecture_boundaries_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_perfecture_boundaries_2.addFeatures(features_perfecture_boundaries_2);
var lyr_perfecture_boundaries_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_perfecture_boundaries_2, 
                style: style_perfecture_boundaries_2,
                popuplayertitle: 'perfecture_boundaries',
                interactive: true,
                title: '<img src="styles/legend/perfecture_boundaries_2.png" /> perfecture_boundaries'
            });
var format_TOGOstationmapsdataUpdate_25052026_3 = new ol.format.GeoJSON();
var features_TOGOstationmapsdataUpdate_25052026_3 = format_TOGOstationmapsdataUpdate_25052026_3.readFeatures(json_TOGOstationmapsdataUpdate_25052026_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TOGOstationmapsdataUpdate_25052026_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TOGOstationmapsdataUpdate_25052026_3.addFeatures(features_TOGOstationmapsdataUpdate_25052026_3);
var lyr_TOGOstationmapsdataUpdate_25052026_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TOGOstationmapsdataUpdate_25052026_3, 
                style: style_TOGOstationmapsdataUpdate_25052026_3,
                popuplayertitle: 'TOGO station maps data Update_25.05.2026',
                interactive: true,
    title: 'TOGO station maps data Update_25.05.2026<br />\
    <img src="styles/legend/TOGOstationmapsdataUpdate_25052026_3_0.png" /> Active<br />\
    <img src="styles/legend/TOGOstationmapsdataUpdate_25052026_3_1.png" /> planned<br />\
    <img src="styles/legend/TOGOstationmapsdataUpdate_25052026_3_2.png" /> <br />' });
var format_Proposed_sites_NP_May_July_4 = new ol.format.GeoJSON();
var features_Proposed_sites_NP_May_July_4 = format_Proposed_sites_NP_May_July_4.readFeatures(json_Proposed_sites_NP_May_July_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Proposed_sites_NP_May_July_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Proposed_sites_NP_May_July_4.addFeatures(features_Proposed_sites_NP_May_July_4);
var lyr_Proposed_sites_NP_May_July_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Proposed_sites_NP_May_July_4, 
                style: style_Proposed_sites_NP_May_July_4,
                popuplayertitle: 'Proposed_sites_NP_May_July',
                interactive: true,
                title: '<img src="styles/legend/Proposed_sites_NP_May_July_4.png" /> Proposed_sites_NP_May_July'
            });
var group_Basedata = new ol.layer.Group({
                                layers: [lyr_togo_new_scores_1,lyr_perfecture_boundaries_2,],
                                fold: 'open',
                                title: 'Base data'});

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_togo_new_scores_1.setVisible(true);lyr_perfecture_boundaries_2.setVisible(true);lyr_TOGOstationmapsdataUpdate_25052026_3.setVisible(true);lyr_Proposed_sites_NP_May_July_4.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,group_Basedata,lyr_TOGOstationmapsdataUpdate_25052026_3,lyr_Proposed_sites_NP_May_July_4];
lyr_togo_new_scores_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'score': 'score', });
lyr_perfecture_boundaries_2.set('fieldAliases', {'fid': 'fid', 'adm2_name': 'adm2_name', 'area_sqkm': 'area_sqkm', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_TOGOstationmapsdataUpdate_25052026_3.set('fieldAliases', {'S/N�': 'S/N�', 'STATION ID': 'STATION ID', 'City': 'City', 'prefecture': 'prefecture', 'STATION NAME': 'STATION NAME', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Vendor Name': 'Vendor Name', 'Civil Works Status': 'Civil Works Status', 'Office Supplies': 'Office Supplies', 'Start date': 'Start date', 'Status': 'Status', 'Condition': 'Condition', });
lyr_Proposed_sites_NP_May_July_4.set('fieldAliases', {'id': 'id', 'Site_Name': 'Site_Name', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Area': 'Area', 'Type': 'Type', ' Nb_racks': ' Nb_racks', });
lyr_togo_new_scores_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'score': 'TextEdit', });
lyr_perfecture_boundaries_2.set('fieldImages', {'fid': 'TextEdit', 'adm2_name': 'TextEdit', 'area_sqkm': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', });
lyr_TOGOstationmapsdataUpdate_25052026_3.set('fieldImages', {'S/N�': 'Range', 'STATION ID': 'TextEdit', 'City': 'TextEdit', 'prefecture': 'TextEdit', 'STATION NAME': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Vendor Name': 'TextEdit', 'Civil Works Status': 'TextEdit', 'Office Supplies': 'TextEdit', 'Start date': 'TextEdit', 'Status': 'TextEdit', 'Condition': 'TextEdit', });
lyr_Proposed_sites_NP_May_July_4.set('fieldImages', {'id': 'TextEdit', 'Site_Name': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'Area': 'TextEdit', 'Type': 'TextEdit', ' Nb_racks': 'TextEdit', });
lyr_togo_new_scores_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'score': 'no label', });
lyr_perfecture_boundaries_2.set('fieldLabels', {'fid': 'no label', 'adm2_name': 'inline label - always visible', 'area_sqkm': 'no label', 'center_lat': 'no label', 'center_lon': 'no label', });
lyr_TOGOstationmapsdataUpdate_25052026_3.set('fieldLabels', {'S/N�': 'no label', 'STATION ID': 'no label', 'City': 'inline label - always visible', 'prefecture': 'inline label - always visible', 'STATION NAME': 'inline label - always visible', 'Latitude': 'no label', 'Longitude': 'no label', 'Vendor Name': 'no label', 'Civil Works Status': 'no label', 'Office Supplies': 'no label', 'Start date': 'no label', 'Status': 'no label', 'Condition': 'inline label - always visible', });
lyr_Proposed_sites_NP_May_July_4.set('fieldLabels', {'id': 'no label', 'Site_Name': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', 'Area': 'no label', 'Type': 'inline label - always visible', ' Nb_racks': 'inline label - always visible', });
lyr_Proposed_sites_NP_May_July_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});