import React, { useState, useEffect, useRef } from "react";

const registerObserver = (ref, setShow) => {
    const observer = new IntersectionObserver((enteries, observer) => {
        enteries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }

            // console.log('Triggered')
            setShow(true)
            observer.disconnect();
        })
    });

    observer.observe(ref);
}

export default function LazyLoadVideo({ url, videoRef }) {
    const [showVideo, setShowVideo] = useState(false);
    const VideoRef = useRef(null)

    useEffect(() => {
        registerObserver(VideoRef.current, setShowVideo)
    }, [])

    if (showVideo) {
        return <video
            playsInline
            autoPlay
            loop
            ref={videoRef}
            poster="/images/detail-bg.png"
            src={url} />

    }

    return <span ref={VideoRef} className="videoWrapper" />
}