import React, { useState, useEffect, useRef } from "react";
import PopularProductItem from "./Home/PopularProductItem";



const registerObserver = (ref, setShow, onScrolling) => {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }

            console.log('Triggered', entry)
            onScrolling(entry);
            setShow(true);
            observer.disconnect();
        })
    })

    observer.observe(ref)
}



export default function LazyLoadProduct({ item, i, addCart, deleteCart, cartlist, favProduct, unfavProduct, listInnerRef, onScrolling }) {

    const [showProduct, setShowProduct] = useState(false);
    const ProductRef = useRef(null);

    useEffect(() => {
        registerObserver(ProductRef.current, setShowProduct, onScrolling);
    }, [])


    if (showProduct) {
        return <PopularProductItem
            item={item}
            key={i}
            cartlist={cartlist}
            favProduct={favProduct}
            unfavProduct={unfavProduct}
            deleteCart={deleteCart}
            addCart={addCart}
            listInnerRef={listInnerRef}
        />
    }

    return <span ref={ProductRef} />

}