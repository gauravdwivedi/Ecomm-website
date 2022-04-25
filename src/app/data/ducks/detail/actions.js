import types from "./types";

export function fetchProductDetails(slug) {
    return {
        CALL_API: [
            {
                type: types.FETCH_PRODUCT_DETAILS,
                meta: {
                    path: "/v1/product/detailwithVideo?slug=" + slug,
                    method: "GET",
                }
            }
        ]
    }
}