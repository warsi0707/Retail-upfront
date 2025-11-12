import { createSlice } from "@reduxjs/toolkit";
import { deleteProductThunk, fetchProducts, getProductByIdThunk, postProductsThunk,postOrderThunk, getOrdersThunk, searchProductThunk, toggleStatusThunk, fetchAllOrders } from "./productThunk";
import toast from "react-hot-toast";

const savedCartItems = JSON.parse(localStorage.getItem("carts")) || [];
const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        productDetail: {},
        productLoading: false,
        productError: false,
        cartItems: savedCartItems.map((item)=> ({...item, quantity:item.quantity || 1, totalAmmount: item.totalAmmount})),
        subTotal: localStorage.getItem("cartTotal") || "",
        orders: []
    },
    reducers: {
        cartItems: (state, action)=>{
            const carts = JSON.parse(localStorage.getItem('carts'))
            state.cartItems = carts
        },
        addToCart: (state, action)=>{
            const product = action.payload.product
            const existing = state.cartItems.find((item)=> item._id === product._id)
            if(existing){
                if(existing.quantity < existing.stock){
                    existing.quantity +=1
                    existing.subTotal = existing.price * existing.quantity
                    toast.success("Item increase")
                }
            }else{
                toast.success("Added to cart")
                state.cartItems.push({...product, quantity:1, totalAmmount: product.price})
                state.subTotal = state.cartItems.totalAmmount
            }
           localStorage.setItem("carts", JSON.stringify(state.cartItems))
           localStorage.setItem("cartTotalAmmount", state.cartItems.totalAmmount)
        },
        increaseQnt: (state, action)=>{
            const product = action.payload
            const existing = state.cartItems.find((item)=> item._id === product._id)
            if(existing){
                if(existing.quantity < existing.stock){
                    existing.quantity += 1
                    existing.totalAmmount = existing.price * existing.quantity
                }
            }
            localStorage.setItem('carts', JSON.stringify(state.cartItems))
        },
        decreaseQnt: (state, action)=>{
            const product = action.payload
            const existing = state.cartItems.find((item)=> item._id === product._id)
            if(existing){
                if(existing.quantity < existing.stock){
                    existing.quantity -= 1
                    existing.totalAmmount = existing.price * existing.quantity
                }
            }
            localStorage.setItem('carts', JSON.stringify(state.cartItems))
        },
        removeCartItem: (state,action)=>{
            state.cartItems = state.cartItems.filter((cart)=> cart._id !== action.payload._id)
            const existing = JSON.parse(localStorage.getItem('carts'))
            existing.filter((item)=> item._id !== action.payload._id)
            localStorage.setItem('carts', JSON.stringify(state.cartItems))
            toast.success("Removed")
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchProducts.pending, (state)=>{
            state.productLoading = true
        })
        .addCase(fetchProducts.rejected, (state)=>{
            state.productLoading = false
            state.productError = true
        })
        .addCase(fetchProducts.fulfilled, (state, action)=>{
            if(!Array.isArray){
                state.products = []
            }
            state.products = action.payload
        })
        .addCase(postProductsThunk.pending, (status)=>{
            status.productLoading = true
        })
        .addCase(postProductsThunk.rejected, (state)=>{
            state.productError = true
            state.productLoading = false
        })
        .addCase(postProductsThunk.fulfilled, (state, action)=>{
            state.productLoading = false
            if(!Array.isArray){
                state.products = []
            }
            state.products = [...state.products, action.payload.product]
        })
        .addCase(deleteProductThunk.pending,(state)=>{
            state.productLoading = true
        })
        .addCase(deleteProductThunk.rejected, (state)=>{
            state.productLoading = false
            state.productError = false
        })
        .addCase(deleteProductThunk.fulfilled, (state, action)=>{
            state.products = state.products.filter((product)=> product._id !== action.payload.product._id)
        })
        .addCase(getProductByIdThunk.pending, (state)=>{
            state.productLoading = true
        })
        .addCase(getProductByIdThunk.rejected, (state)=>{
            state.productLoading = false
            state.productError = false
        })
        .addCase(getProductByIdThunk.fulfilled, (state, action)=>{
            state.productLoading = false
            state.productDetail = action.payload.product
        })
        .addCase(postOrderThunk.pending, (state)=>{
            state.productLoading = true
        })
        .addCase(postOrderThunk.rejected, (state)=>{
            state.productLoading = false
            state.productError = true
        })
        .addCase(postOrderThunk.fulfilled, (state,action)=>{

            state.orders = action.payload.booking
        })
        .addCase(getOrdersThunk.pending, (state)=>{
            state.productLoading = true
        })
        .addCase(getOrdersThunk.rejected, (state)=>{
            state.productLoading = false
            state.productError = true
        })
        .addCase(getOrdersThunk.fulfilled, (state,action)=>{
            state.orders = action.payload.orders
        })
        .addCase(searchProductThunk.pending, (state)=>{
            state.productLoading = true
        })
        .addCase(searchProductThunk.rejected, (state)=>{
            state.productLoading = false
            state.productError = true
        })
        .addCase(searchProductThunk.fulfilled, (state,action)=>{
            state.products = action.payload.products
        })
        .addCase(toggleStatusThunk.pending, (state)=>{
            state.productLoading = true
        })
        .addCase(toggleStatusThunk.rejected, (state)=>{
            state.productLoading = false
            state.productError = false
        })
        .addCase(toggleStatusThunk.fulfilled, (state, action)=>{

        })
        .addCase(fetchAllOrders.pending, (state)=>{
            state.productLoading = true
        })
        .addCase(fetchAllOrders.rejected, (state)=>{
            state.productError = true
        })
        .addCase(fetchAllOrders.fulfilled, (state, action)=>{

        })
    }
})

export const {cartItems, addToCart,increaseQnt,decreaseQnt, removeCartItem} = productSlice.actions;
const productReducer = productSlice.reducer;
export default productReducer