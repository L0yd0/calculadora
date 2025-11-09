/* eslint-disable react-refresh/only-export-components */
import React, {createContext, useReducer, useEffect} from "react";
import AppReducer from "./AppReducer";
//Initial state
const initialState = {
    movimientos:[
        //esto es lo que supuestamente debe de mostrar en movimientos
        //{ id: 1, descripcion: 'Flower', importe: -20 },
    ],
    loading: true, 
    error: null 
}

//url de la api 
const API_URL = 'https://calculadora-back-d9aj.onrender.com/api/movimientos'

//context creation
export const GlobalContext = createContext(initialState)

//provider creation
export const GlobalProvider = ({ children }) => {
    const [state,dispatch] = useReducer(AppReducer, initialState)

    //cargamos los datos al iniciar la app
     useEffect(()=>{
        getMovimientos()
    }, [])
    //acciones
    async function getMovimientos(){
        try {
            const response = await fetch(`${API_URL}`) 
            const data = await response.json()

            dispatch({
                type: 'GET_MOVIMIENTOS',
                payload: data
            })
        } catch (error) {
            dispatch({ type: 'MOVIMIENTO_ERROR', payload: error.message });
        }
    }

    async function deleteMovimiento(id){
        try {
            dispatch({
            type: 'DELETE_MOVIMIENTO',
            payload: id
        })
        } catch (error) {
            dispatch({ type: 'MOVIMIENTO_ERROR', payload: error.message });
        }
    }
     async function addMovimiento(movimiento){
        try {
            dispatch({
            type: 'ADD_MOVIMIENTO',
            payload:movimiento
        })
        } catch (error) {
            dispatch({ type: 'MOVIMIENTO_ERROR', payload: error.message });
        }
    }
    return (<GlobalContext.Provider value={{
        movimientos: state.movimientos, 
        loading: state.loading,
        error: state.error,
        deleteMovimiento,
        addMovimiento
    }}>
        {children}
    </GlobalContext.Provider>)
}