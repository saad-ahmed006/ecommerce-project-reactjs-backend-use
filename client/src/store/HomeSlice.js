import { createSlice } from '@reduxjs/toolkit'
import { useEffect } from 'react'

export const homeSlice = createSlice({
  name: 'counter',
  initialState: {
    categories: [],
    products: [],
    category: [],
    singleproduct: [],
    relatedproduct: [],
    cart: [],
  },

  reducers: {
    getCategoryItemSuccess: (state, payload) => {
      const categories = payload.payload
      state.categories = categories
    },
    getProductItemSuccess: (state, payload) => {
      const products = payload.payload
      state.products = products
    },

    getCategoriesIdDataSuccess: (state, payload) => {
      const category = payload.payload
      state.category = category
    },
    getSingleProductSuccess: (state, payload) => {
      const singleproduct = payload.payload
      state.singleproduct = singleproduct
    },
    getRelatedProductSuccess: (state, payload) => {
      const relatedproduct = payload.payload
      state.relatedproduct = relatedproduct
    },
    // AddToCart: (state, action ) => {
    //   const {item, quantity } = action.payload;
    //   console.log("this is cart", item);
    //   // console.log(quantity);
    //   const itemInCart = state.cart.findIndex((p) => p.id === item.id);
    //   // console.log(itemInCart);
    //   if (itemInCart !== -1) {
    //     state.cart[itemInCart].attributes.quan += quantity
    //   } else {
    //     item.attributes.quan = quantity
    //     state.cart=[...state.cart,item]
    //   }

    // }
    AddToCart: (state, action) => {
      const { item, quantity } = action.payload;
      const itemInCart = state.cart.findIndex((p) => p.item.id === item.id);

      // Check if the previous item is the same as the current item
      if (state.lastClickedItem === item.id) {
        // Double click detected, increase quantity
        if (itemInCart !== -1) {
          state.cart[itemInCart].item.attributes.quantity = quantity;
        }
      } else {
        // Single click detected, add new item
        if (itemInCart !== -1) {
          state.cart[itemInCart].item.attributes.quantity = quantity;
        } else {
          const newItem = {
            item: {
              ...item,
              attributes: {
                ...item.attributes,
                quantity: quantity,
              }
            }
          };

          state.cart = [...state.cart, newItem];
        }
      }
    },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
    handleRemoveFromCart: (state, action) => {
      const updatedCart = state.cart.filter((item) => item.id !== action.payload);
      state.cart = [updatedCart]
      
    }
  },
})

export const { handleRemoveFromCart, AddToCart, getRelatedProductSuccess, getSingleProductSuccess, getCategoriesIdDataSuccess, getCategoryItemSuccess, getProductItemSuccess } = homeSlice.actions

export default homeSlice.reducer