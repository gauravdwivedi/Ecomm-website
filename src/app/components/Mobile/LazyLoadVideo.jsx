import React, { useState, useEffect, useRef } from "react";



const registerObserver = (ref, setShow) => {
    const observer = new IntersectionObserver((enteries, observer) => {
        enteries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }

            console.log('Triggered')
            setShow(true)
            observer.disconnect();
        })
    });

    observer.observe(ref);
}

export default function LazyLoadVideo({ url }) {
    const [showVideo, setShowVideo] = useState(false);
    const VideoRef = useRef(null)

    useEffect(() => {
        registerObserver(VideoRef.current, setShowVideo)
    }, [])

    if (showVideo) {
        return <div id="videoWrapper"  >
            <video
                playsInline
                autoPlay

                loop
                poster="/images/detail-bg.png"
                src={url} />
        </div>
    }


    return <span ref={VideoRef} className="videoWrapper" />
}