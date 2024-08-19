import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// export const loginUser = createAsyncThunk('auth/loginUser', async (userData, { rejectWithValue }) => {
//     try {
//         const response = await axios.post('/api/auth/login', userData);
//         return response.data;
//     } catch (error) {
//         return rejectWithValue(error.response.data);
//     }
// });

// export const registerUser = createAsyncThunk('auth/registerUser', async (userData, { rejectWithValue }) => {
//     try {
//         const response = await axios.post('/api/auth/register', userData);
//         return response.data;
//     } catch (error) {
//         return rejectWithValue(error.response.data);
//     }
// });
 //    reducers: {
        //     logout(state) {
        //         state.user = null;
        //         state.token = null;
        //         localStorage.removeItem('token');
        //     }
        // },
        // extraReducers: (builder) => {
        //     builder
        //         .addCase(loginUser.pending, (state) => {
        //             state.loading = true;
        //             state.error = null;
        //         })
        //         .addCase(loginUser.fulfilled, (state, action) => {
        //             state.loading = false;
        //             state.user = action.payload.user;
        //             state.token = action.payload.token;
        //             localStorage.setItem('token', action.payload.token);
        //         })
        //         .addCase(loginUser.rejected, (state, action) => {
        //             state.loading = false;
        //             state.error = action.payload;
        //         })
        //         .addCase(registerUser.pending, (state) => {
        //             state.loading = true;
        //             state.error = null;
        //         })
        //         .addCase(registerUser.fulfilled, (state, action) => {
        //             state.loading = false;
        //             state.user = action.payload.user;
        //             state.token = action.payload.token;
        //             localStorage.setItem('token', action.payload.token);
        //         })
        //         .addCase(registerUser.rejected, (state, action) => {
        //             state.loading = false;
        //             state.error = action.payload;
        //         });
        // }



export const Slice=createSlice({
    name:"cart",
    initialState:{
        cart:[],
        total:0,
        Qty:0,
        users: [],
        loggedInUser: {},
        loggedIn: true,
        // user: null,
        // token: null,
        // loading: false,
        // error: null,
    },
    reducers:{
        addToCart:(state,{payload})=>{
            console.log(payload)
            // const find2 =state.users.find((e)=>e.id == e.payload)
            const find=state.loggedInUser.carts.findIndex((e)=>e?.id == payload?.id)
            if(find >=0){
                state.loggedInUser.carts[find].Qty += 1;
                // state.loggedInUser.carts[find].Qty += 1;
                // console.log(state, "state.loggedInUser")
                // state.total = state.loggedInUser.carts.reduce((p, e)=> p + (e.Qty * e.price), 0)
            }else{
                const addValue = {
                    ...payload,
                    Qty:1
                }
            //  state.loggedInUser.carts.push(addValue)
             state.loggedInUser.carts.push(addValue)
             
            }
            console.log(state, "state.loggedInUser")
            state.total = state.loggedInUser.carts.reduce((p, e)=> p + (e.Qty * e.price), 0)
        },
        inCreaseQty:(state,{payload})=>{
            const array=state.loggedInUser.carts.map((e)=>{
                if(e.id === payload.id){
                    e.Qty += 1;
                    return e;
                }else{
                    return e;
                }
            })
        },
        deCreaseQty:(state,{payload})=>{
            let newCart = state.loggedInUser.carts.map((e)=>{
                if (e.id === payload.id){
                  return {...e,Qty:e.Qty - 1};
                }
                return e;
              });
              newCart = newCart.filter((e)=>e.Qty > 0);
              state.loggedInUser.carts = newCart
        },
        removeCart:(state,{payload})=>{
            state.loggedInUser.carts = state.loggedInUser.carts.filter((e)=>e?.id !== payload?.id)
        },
        clearCart:(state,{payload})=>{
            state.loggedInUser.carts=payload = [];
           },
           login : (state, {payload}) => {
            state.loggedInUser = payload
            state.loggedIn =true
           },
        signUp : (state, {payload}) => {
            state.users.push(payload)
        },
        logOut : (state, {payload}) => {
            state.loggedInUser ={}
            state.loggedIn =false
        }
       
    }
    

})

export const {addToCart,inCreaseQty,deCreaseQty,
    removeCart,clearCart, signUp, login, logOut}=Slice.actions;

export default Slice.reducer;