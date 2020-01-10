import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

import "../../assets/stylesheets/index.scss";
import "../../assets/stylesheets/map.scss";

export default function Map(props) {
    const { location, listings } = props;

    const MAPBOX_TOKEN =
        "pk.eyJ1IjoibW9ycmlzd3IwMSIsImEiOiJjazJ5bG41aXMwOHMyM3BvbWFqOTN4bGZvIn0.KO-oP4jvOJGvetmgUaJuTQ";
    const [viewport, setViewport] = useState({
        latitude: 53.818993,
        longitude: -1.521709,
        // latitude: location.latlng.lat,
        // longitude: location.latlng.lng,
        height: "100vh",
        width: "80vw",
        zoom: 12
    });

    const [selectedListing, setSelectedListing] = useState(null);

    return (
        <div className='map'>
            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={MAPBOX_TOKEN}
                mapStyle='mapbox://styles/morriswr01/ck2ymreg40qim1cujynrxvuv4'
                onViewportChange={viewport => {
                    setViewport(viewport);
                }}
            >
                {listings.map((listing, i) => (
                    <Marker
                        className='houseMarker'
                        key={i}
                        latitude={listing.latitude}
                        longitude={listing.longitude}
                    >
                        <button
                            onClick={e => {
                                e.preventDefault();
                                console.log("Selected listing " + i);
                                if (selectedListing !== i) {
                                    setSelectedListing(i);
                                } else {
                                    setSelectedListing(null);
                                }
                            }}
                        ></button>
                    </Marker>
                ))}

                {selectedListing !== null ? (
                    <Popup
                        longitude={listings[selectedListing].longitude}
                        latitude={listings[selectedListing].latitude}
                    >
                        <img
                            src={listings[selectedListing].img_url}
                            alt='No image'
                        />
                        <div>{listings[selectedListing].price}</div>
                    </Popup>
                ) : null}
            </ReactMapGL>
        </div>
    );
}
