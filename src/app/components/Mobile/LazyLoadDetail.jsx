import React,{ useState,useEffect,useRef} from "react";
import Detail from "./Detail";


const registerObserver =(ref,setShow,onScrolling) =>{

    const observer = new IntersectionObserver((entries,observer)=>{
        entries.forEach(entry =>{
            if(!entry.isIntersecting){
                return;
            }

            console.log('Triggered',entry)
            onScrolling(entry);
            setShow(true);
            observer.disconnect();
        })
    })

    observer.observe(ref);
}

export default function LazyLoadDetail({detail,
    i,
    fetchProductDetails,
    likeProduct,
    unlikeProduct,
    addToCart,
    favProduct,
    unfavProduct,
    getAllProducts,
    listInnerRef,
    onScrolling }){

    const [showProduct,setShowProduct] = useState(false);
    const ProductRef = useRef(null);

    useEffect(()=>{
        registerObserver(ProductRef.current,setShowProduct,onScrolling);
    },[])

    if(showProduct){
        console.log('ITEM DATA',detail)
        return <Detail
        detail={detail}
        key={i}
        fetchProductDetails={fetchProductDetails}
        likeProduct={likeProduct}
        unlikeProduct={unlikeProduct}
        addToCart={addToCart}
        favProduct={favProduct}
        unfavProduct={unfavProduct}
        getAllProducts={getAllProducts}
        listInnerRef={listInnerRef}
    />

    }

    return <span ref={ProductRef}/>
}