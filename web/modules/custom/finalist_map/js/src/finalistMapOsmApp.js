import React, {useState} from 'react';
import {MapContainer, TileLayer, FeatureGroup} from 'react-leaflet';
import {EditControl} from "react-leaflet-draw";

function FinalistMapOsmApp() {
  const [value, setValue] = useState('');
  const drawValues = [];

  function _onChange(drawControl) {
    let values = {
      'layerType': drawControl.layerType,
    };

    if (drawControl.layerType === 'polygon') {
      values.parts = drawControl.layer._parts;
    }
    else if (drawControl.layerType === 'circle') {
      values.latlng = drawControl.layer._latlng;
      values.radius = drawControl.layer._mRadius;
    }
    else if (drawControl.layerType === 'rectangle') {
      values.latlngs = drawControl.layer._latlngs;
    }

    saveDrawValues(values);
  }

  function saveDrawValues(newDrawValues) {
    drawValues.push(newDrawValues);
    setValue(JSON.stringify(drawValues));
  }

  return (
    <>
      <MapContainer center={[52.639730, 4.833984]} zoom={9} scrollWheelZoom={false} maxZoom={18}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FeatureGroup>
          <EditControl
            position="topright"
            onEdited={_onChange}
            onCreated={_onChange}
            onDeleted={_onChange}
            draw={{
              polyline: false,
              marker: false,
              circlemarker: false,
            }}
          />
        </FeatureGroup>
      </MapContainer>
      <textarea rows={15} cols={100} value={value} readOnly/>
    </>
  );
}

export default FinalistMapOsmApp;
