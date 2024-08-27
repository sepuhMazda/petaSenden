ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([12269941.335424, -884871.669397, 12273787.728772, -882759.766577]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Sendencopy_1 = new ol.format.GeoJSON();
var features_Sendencopy_1 = format_Sendencopy_1.readFeatures(json_Sendencopy_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sendencopy_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sendencopy_1.addFeatures(features_Sendencopy_1);
var lyr_Sendencopy_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sendencopy_1, 
                style: style_Sendencopy_1,
                popuplayertitle: "Senden copy",
                interactive: true,
                title: '<img src="styles/legend/Sendencopy_1.png" /> Senden copy'
            });
var format_tambahanBangunan_2 = new ol.format.GeoJSON();
var features_tambahanBangunan_2 = format_tambahanBangunan_2.readFeatures(json_tambahanBangunan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tambahanBangunan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tambahanBangunan_2.addFeatures(features_tambahanBangunan_2);
var lyr_tambahanBangunan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tambahanBangunan_2, 
                style: style_tambahanBangunan_2,
                popuplayertitle: "tambahanBangunan",
                interactive: true,
                title: '<img src="styles/legend/tambahanBangunan_2.png" /> tambahanBangunan'
            });
var format_RT_Senden_3 = new ol.format.GeoJSON();
var features_RT_Senden_3 = format_RT_Senden_3.readFeatures(json_RT_Senden_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RT_Senden_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RT_Senden_3.addFeatures(features_RT_Senden_3);
var lyr_RT_Senden_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RT_Senden_3, 
                style: style_RT_Senden_3,
                popuplayertitle: "RT_Senden",
                interactive: true,
    title: 'RT_Senden<br />\
    <img src="styles/legend/RT_Senden_3_0.png" /> 48<br />\
    <img src="styles/legend/RT_Senden_3_1.png" /> 49<br />\
    <img src="styles/legend/RT_Senden_3_2.png" /> 50<br />\
    <img src="styles/legend/RT_Senden_3_3.png" /> 51<br />\
    <img src="styles/legend/RT_Senden_3_4.png" /> 52<br />\
    <img src="styles/legend/RT_Senden_3_5.png" /> 53<br />\
    <img src="styles/legend/RT_Senden_3_6.png" /> 54<br />\
    <img src="styles/legend/RT_Senden_3_7.png" /> 55<br />\
    <img src="styles/legend/RT_Senden_3_8.png" /> 56<br />\
    <img src="styles/legend/RT_Senden_3_9.png" /> 57<br />\
    <img src="styles/legend/RT_Senden_3_10.png" /> <br />'
        });
var format_jalanSenden_4 = new ol.format.GeoJSON();
var features_jalanSenden_4 = format_jalanSenden_4.readFeatures(json_jalanSenden_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalanSenden_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalanSenden_4.addFeatures(features_jalanSenden_4);
var lyr_jalanSenden_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalanSenden_4, 
                style: style_jalanSenden_4,
                popuplayertitle: "jalanSenden",
                interactive: true,
                title: '<img src="styles/legend/jalanSenden_4.png" /> jalanSenden'
            });
var format_Makam_5 = new ol.format.GeoJSON();
var features_Makam_5 = format_Makam_5.readFeatures(json_Makam_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Makam_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Makam_5.addFeatures(features_Makam_5);
var lyr_Makam_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Makam_5, 
                style: style_Makam_5,
                popuplayertitle: "Makam",
                interactive: true,
                title: '<img src="styles/legend/Makam_5.png" /> Makam'
            });
var format_TK_layer_6 = new ol.format.GeoJSON();
var features_TK_layer_6 = format_TK_layer_6.readFeatures(json_TK_layer_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TK_layer_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TK_layer_6.addFeatures(features_TK_layer_6);
var lyr_TK_layer_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TK_layer_6, 
                style: style_TK_layer_6,
                popuplayertitle: "TK_layer",
                interactive: true,
                title: '<img src="styles/legend/TK_layer_6.png" /> TK_layer'
            });
var format_pondok_7 = new ol.format.GeoJSON();
var features_pondok_7 = format_pondok_7.readFeatures(json_pondok_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pondok_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pondok_7.addFeatures(features_pondok_7);
var lyr_pondok_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pondok_7, 
                style: style_pondok_7,
                popuplayertitle: "pondok",
                interactive: true,
                title: '<img src="styles/legend/pondok_7.png" /> pondok'
            });
var format_masjid_8 = new ol.format.GeoJSON();
var features_masjid_8 = format_masjid_8.readFeatures(json_masjid_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_masjid_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_masjid_8.addFeatures(features_masjid_8);
var lyr_masjid_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_masjid_8, 
                style: style_masjid_8,
                popuplayertitle: "masjid",
                interactive: true,
                title: '<img src="styles/legend/masjid_8.png" /> masjid'
            });
var format_Dukuh_9 = new ol.format.GeoJSON();
var features_Dukuh_9 = format_Dukuh_9.readFeatures(json_Dukuh_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dukuh_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dukuh_9.addFeatures(features_Dukuh_9);
var lyr_Dukuh_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dukuh_9, 
                style: style_Dukuh_9,
                popuplayertitle: "Dukuh",
                interactive: true,
                title: '<img src="styles/legend/Dukuh_9.png" /> Dukuh'
            });
var format_posRonda_10 = new ol.format.GeoJSON();
var features_posRonda_10 = format_posRonda_10.readFeatures(json_posRonda_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_posRonda_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_posRonda_10.addFeatures(features_posRonda_10);
var lyr_posRonda_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_posRonda_10, 
                style: style_posRonda_10,
                popuplayertitle: "posRonda",
                interactive: true,
                title: '<img src="styles/legend/posRonda_10.png" /> posRonda'
            });
var format_Clipped_11 = new ol.format.GeoJSON();
var features_Clipped_11 = format_Clipped_11.readFeatures(json_Clipped_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_11.addFeatures(features_Clipped_11);
var lyr_Clipped_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_11, 
                style: style_Clipped_11,
                popuplayertitle: "Clipped",
                interactive: true,
                title: '<img src="styles/legend/Clipped_11.png" /> Clipped'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Sendencopy_1.setVisible(true);lyr_tambahanBangunan_2.setVisible(true);lyr_RT_Senden_3.setVisible(true);lyr_jalanSenden_4.setVisible(true);lyr_Makam_5.setVisible(true);lyr_TK_layer_6.setVisible(true);lyr_pondok_7.setVisible(true);lyr_masjid_8.setVisible(true);lyr_Dukuh_9.setVisible(true);lyr_posRonda_10.setVisible(true);lyr_Clipped_11.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Sendencopy_1,lyr_tambahanBangunan_2,lyr_RT_Senden_3,lyr_jalanSenden_4,lyr_Makam_5,lyr_TK_layer_6,lyr_pondok_7,lyr_masjid_8,lyr_Dukuh_9,lyr_posRonda_10,lyr_Clipped_11];
lyr_Sendencopy_1.set('fieldAliases', {'KAL_KEL': 'KAL_KEL', 'KEC_KAPN': 'KEC_KAPN', 'KAB_KOTA': 'KAB_KOTA', 'DUSUN': 'DUSUN', });
lyr_tambahanBangunan_2.set('fieldAliases', {'id': 'id', });
lyr_RT_Senden_3.set('fieldAliases', {'id': 'id', });
lyr_jalanSenden_4.set('fieldAliases', {'id': 'id', });
lyr_Makam_5.set('fieldAliases', {'nama': 'nama', });
lyr_TK_layer_6.set('fieldAliases', {'nama': 'nama', });
lyr_pondok_7.set('fieldAliases', {'nama': 'nama', });
lyr_masjid_8.set('fieldAliases', {'nama': 'nama', });
lyr_Dukuh_9.set('fieldAliases', {'nama': 'nama', });
lyr_posRonda_10.set('fieldAliases', {'nama': 'nama', });
lyr_Clipped_11.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'addr_stree': 'addr_stree', 'building': 'building', 'addr_house': 'addr_house', 'roof_mater': 'roof_mater', 'building_m': 'building_m', 'access_roo': 'access_roo', 'name': 'name', });
lyr_Sendencopy_1.set('fieldImages', {'KAL_KEL': 'TextEdit', 'KEC_KAPN': 'TextEdit', 'KAB_KOTA': 'TextEdit', 'DUSUN': 'TextEdit', });
lyr_tambahanBangunan_2.set('fieldImages', {'id': '', });
lyr_RT_Senden_3.set('fieldImages', {'id': 'TextEdit', });
lyr_jalanSenden_4.set('fieldImages', {'id': 'TextEdit', });
lyr_Makam_5.set('fieldImages', {'nama': 'TextEdit', });
lyr_TK_layer_6.set('fieldImages', {'nama': 'TextEdit', });
lyr_pondok_7.set('fieldImages', {'nama': 'TextEdit', });
lyr_masjid_8.set('fieldImages', {'nama': 'TextEdit', });
lyr_Dukuh_9.set('fieldImages', {'nama': 'TextEdit', });
lyr_posRonda_10.set('fieldImages', {'nama': 'TextEdit', });
lyr_Clipped_11.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'addr_stree': 'TextEdit', 'building': 'TextEdit', 'addr_house': 'TextEdit', 'roof_mater': 'TextEdit', 'building_m': 'TextEdit', 'access_roo': 'TextEdit', 'name': 'TextEdit', });
lyr_Sendencopy_1.set('fieldLabels', {'KAL_KEL': 'no label', 'KEC_KAPN': 'no label', 'KAB_KOTA': 'no label', 'DUSUN': 'no label', });
lyr_tambahanBangunan_2.set('fieldLabels', {'id': 'no label', });
lyr_RT_Senden_3.set('fieldLabels', {'id': 'no label', });
lyr_jalanSenden_4.set('fieldLabels', {'id': 'no label', });
lyr_Makam_5.set('fieldLabels', {'nama': 'no label', });
lyr_TK_layer_6.set('fieldLabels', {'nama': 'no label', });
lyr_pondok_7.set('fieldLabels', {'nama': 'no label', });
lyr_masjid_8.set('fieldLabels', {'nama': 'no label', });
lyr_Dukuh_9.set('fieldLabels', {'nama': 'no label', });
lyr_posRonda_10.set('fieldLabels', {'nama': 'no label', });
lyr_Clipped_11.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'addr_stree': 'no label', 'building': 'no label', 'addr_house': 'no label', 'roof_mater': 'no label', 'building_m': 'no label', 'access_roo': 'no label', 'name': 'no label', });
lyr_Clipped_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});