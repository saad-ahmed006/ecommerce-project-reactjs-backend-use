import { createSlice } from '@reduxjs/toolkit'




export const homeSlice = createSlice({
  name: 'counter',
  initialState: {
    categories: [],
    products: [],
    category: [],
    singleproduct: [],
    relatedproduct: [],
    searchproduct:[],
    cart: [],
    quan: 0,
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
    getSearchProdutSuccess: (state, payload) => {
      const searchproduct = payload.payload
      state.searchproduct = searchproduct
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

    // }}

    // AddToCart: (state, action) => {
    //   let { item, quantity } = action.payload;
    //   let itemInCart = state.cart.findIndex((p) => p.id === item.id);
    //   // console.log(itemInCart);
    //   if (itemInCart >= 0) {
    //     state.cart[itemInCart].attributes.quan = quantity += 1
    //   }
    //   else {
    //     const tempev = { ...item, quan: quantity }
    //     state.cart.push(tempev)
    //   }
    // },

    AddToCart: (state, action) => {
      const { item, quantity } = action.payload;
      const itemInCartIndex = state.cart.findIndex((p) => p.id === item.id);

      if (itemInCartIndex >= 0) {
        state.cart[itemInCartIndex].attributes.quan += quantity;
      } else {
        const newItem = { ...item, attributes: { ...item, quan: quantity } };
        // state.cart.push(newItem);
        state.cart.push(newItem)
      }
    },


    // AddToCart: (state, action) => {}
    //   const { item, quantity } = action.payload;
    //   const itemInCart = state.cart.findIndex((p) => p.id === item.id);
    //   // console.log(itemInCart);
    //   // Check if the previous item is the same as the current item
    // if (state.lastClickedItem === item.id) {
    //     // Double click detected, increase quantity
    //     if (itemInCart !== -1) {
    //       state.cart[itemInCart].attributes.quantity += 1;
    //     }
    //   } else {
    //     // Single click detected, add new item
    //     if (itemInCart !== -1) {
    //       state.cart[itemInCart].attributes.quantity +=1;
    //     } else {
    //       const newItem = {
    //         item: {
    //           ...item,
    //           attributes: {
    //             ...item.attributes,
    //             quantity: quantity,
    //           }
    //         }
    //       };

    //       state.cart = [...state.cart, newItem];
    //     }
    //   }
    // },


    // AddToCart: (state, action) => {
    //   const { item, quantity } = action.payload;
    //   const itemInCart = state.cart.findIndex((p) => p.id === item.id);
    //   // console.log(itemInCart);
    //   // Check if the previous item is the same as the current item
    //   if (state.lastClickedItem === item.id) {
    //     // Double click detected, increase quantity
    //     if (itemInCart !== -1) {
    //       state.cart[itemInCart].item.attributes.quantity = quantity;
    //     }
    //   } else {
    //     // Single click detected, add new item
    //     if (itemInCart !== -1) {
    //       state.cart[itemInCart].item.attributes.quantity = quantity;
    //     } else {
    //       const newItem = {
    //         item: {
    //           ...item,
    //           attributes: {
    //             ...item.attributes,
    //             quantity: quantity,
    //           }
    //         }
    //       };

    //       state.cart = [...state.cart, newItem];
    //     }
    //   }
    // },

    handleRemoveFromCart: (state, action) => {
      // console.log(action.payload.id);
      // const { item } = action.payload;

      const updatedCart = state.cart.filter((p) => p.id != action.payload.id);
      state.cart = updatedCart


    },
    handleCartProductQuantity: (state, action) => {
      const [type, item] = action.payload;
      // console.log(type);
      const itemInCartIndex = state.cart.findIndex((p) => p.id === item.id);
      if (type === "inc") {
        // console.log("Add");
        state.cart[itemInCartIndex].attributes.quan += 1;
      } else if (type === "dec") {
        if (state.cart[itemInCartIndex].attributes.quan === 1) return
        state.cart[itemInCartIndex].attributes.quan -= 1;
      }
    }



  },
})

export const {getSearchProdutSuccess,handleCartProductQuantity, handleRemoveFromCart, AddToCart, getRelatedProductSuccess, getSingleProductSuccess, getCategoriesIdDataSuccess, getCategoryItemSuccess, getProductItemSuccess } = homeSlice.actions

export default homeSlice.reducer