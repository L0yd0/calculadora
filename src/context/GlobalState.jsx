/* eslint-disable react-refresh/only-export-components */
import React, {createContext, useReducer} from "react";
import AppReducer from "./AppReducer";
//Initial state
const initialState = {
    movimientos:[
        //esto es lo que supuestamente debe de mostrar en movimientos
        //{ id: 1, descripcion: 'Flower', importe: -20 },
    ]
}

//context creation
export const GlobalContext = createContext(initialState)

//provider creation
export const GlobalProvider = ({ children }) => {
    const [state,dispatch] = useReducer(AppReducer, initialState)

    //acciones
    function deleteMovimiento(id){
        dispatch({
            type: 'DELETE_MOVIMIENTO',
            payload: id
        })
    }
    function addMovimiento(movimiento){
        dispatch({
            type: 'ADD_MOVIMIENTO',
            payload:movimiento
        })
    }
    return (<GlobalContext.Provider value={{
        movimientos: state.movimientos, 
        deleteMovimiento,
        addMovimiento
    }}>
        {children}
    </GlobalContext.Provider>)
}