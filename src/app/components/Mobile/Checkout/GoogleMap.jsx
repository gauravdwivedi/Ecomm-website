import React from "react";
import { useEffect } from "react";

const GoogleMap = ({ lat, lng }) => {
    useEffect(() => {
        const iframeData = document.getElementById("googleMapFrame");
        iframeData.src = `https://maps.google.com/maps?q=${lat},${lng}&hl=es;&output=embed`;
    })
    return (
        <div className="gmap">
            <iframe id="googleMapFrame" width="100%" height="200" style={{ marginBottom: '30px' }}></iframe>
        </div>
    )
}

export default GoogleMap