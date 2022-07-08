import axios from "axios"
// lo de la linea 3 iria en un .env, solo la parte de localhost:3001, la parte de http si va asi 
const baseUrl = "http://localhost:3001"


export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS"
export const GET_ONE_PRODUCT = "GET_ONE_PRODUCT"
export const ADD_PRODUCT = "ADD_PRODUCT"
export const UPDATE_PRODUCT = "UPDATE_PRODUCT"
export const DELETE_PRODUCT = "DELETE_PRODUCT"

export const GET_ALL_USERS = "GET_ALL_USERS"
// El one user no esta aun
export const GET_ONE_USER = "GET_ONE_USER"
export const ADD_USER = "ADD_USER"


// PRODUCTS ACTIONS

export const getAllProducts = () => (dispatch) => {
    axios.get(`${baseUrl}/products`)
        .then(res => {
            dispatch({
                type: GET_ALL_PRODUCTS,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}

export const getOneProduct = (id) => (dispatch) => {
    axios.get(`${baseUrl}/products/${id}`)
        .then(res => {
            dispatch({
                type: GET_ONE_PRODUCT,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}

export const addProduct = (product) => (dispatch) => {
    axios.post(`${baseUrl}/products`, product)
        .then(res => {
            dispatch({
                type: ADD_PRODUCT,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}

export const updateProduct = (id, product) => (dispatch) => {
    axios.put(`${baseUrl}/product/${id}`, product)
        .then(res => {
            dispatch({
                type: UPDATE_PRODUCT,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}

export const deleteProduct = (id) => (dispatch) => {
    axios.delete(`${baseUrl}/product/${id}`)
        .then(res => {
            dispatch({
                type: DELETE_PRODUCT,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}

// PRODUCTS ACTIONS

// USER ACTIONS

export const getAllUsers = () => (dispatch) => {
    axios.get(`${baseUrl}/users`)
        .then(res => {
            dispatch({
                type: GET_ALL_USERS,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}

export const getOneUser = (id) => (dispatch) => {
    axios.get(`${baseUrl}/users/${id}`)
        .then(res => {
            dispatch({
                type: GET_ONE_USER,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}

export const addUser = (user) => (dispatch) => {
    axios.post(`${baseUrl}/users`, user)
        .then(res => {
            dispatch({
                type: ADD_USER,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}

// USER ACTIONS