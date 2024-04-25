import React, { useRef, useEffect } from 'react';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import Legend from '@arcgis/core/widgets/Legend';
import ScaleBar from '@arcgis/core/widgets/ScaleBar';
import MapImageLayer from "@arcgis/core/layers/MapImageLayer"
const MainMap = ()=>
{
    const mapDiv = useRef(null);
    useEffect(()=>{
        const map = new Map({
            basemap:'hybrid'
        });
        const view =new MapView({
            map:map,
            container:mapDiv.current,
            zoom:4,
            center:[118,32]
        });
        const mapImageLayer = new MapImageLayer({
            url:"https://ddns.reikomari.page:60808/arcgis/rest/services/MyMapService/MapServer/"
        });
        map.add(mapImageLayer);
        const legend = new Legend({
            view:view
        });
        const scaleBar = new ScaleBar({
            view:view
        });
        view.ui.add(legend,{position:"top-right"});
        view.ui.add(scaleBar,{position:"bottom-left"});
    },[])
    return <div ref={mapDiv} style={{ width: '100%',height:'100%'}}/>;
}
export default MainMap;