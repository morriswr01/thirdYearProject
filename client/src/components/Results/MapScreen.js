import React, { useState } from "react";
import ReactMapGL from "react-map-gl";

export default function MapScreen() {
    const MAPBOX_TOKEN =
        "pk.eyJ1IjoibW9ycmlzd3IwMSIsImEiOiJjazJ5bG41aXMwOHMyM3BvbWFqOTN4bGZvIn0.KO-oP4jvOJGvetmgUaJuTQ";
    const [viewport, setViewport] = useState({
        latitude: 52.402178,
        longitude: -1.529844,
        height: "100vh",
        width: "100vw",
        zoom: 15
    });
    return (
        <div>
            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={MAPBOX_TOKEN}
                mapStyle='mapbox://styles/morriswr01/ck2ymreg40qim1cujynrxvuv4'
                onViewportChange={viewport => {
                    setViewport(viewport);
                }}
            ></ReactMapGL>
        </div>
    );
}
