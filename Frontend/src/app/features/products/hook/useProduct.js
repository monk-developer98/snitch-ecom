import {createProduct , getSellerProduct ,getAllProducts, getProductById} from "../service/product.api"
import {useDispatch} from "react-redux"
import {setSellerProducts,setProducts} from "../state/product.slice"

export const useProduct = () =>{

    const  dispatch = useDispatch()

    async function handleCreateProduct(formData) {
        const data = await createProduct(formData)
        return data.product
    }

    async function handleGetSellerProduct() {
        const data = await getSellerProduct()
        dispatch(setSellerProducts(data.products))
        return data.products
    }

    async function handleAllProducts() {
        const data = await getAllProducts()
        dispatch(setProducts(data.products))
        // return data.products
    }

    async function handleProductById(productId) {
        const data = await getProductById(productId)
        return data.product
    }

    return {handleCreateProduct , handleGetSellerProduct, handleAllProducts , handleProductById}
}