const AppReducer = (state, action) => {
    switch (action.type) {
        case 'GET_MOVIMIENTOS':
            return {
                ...state,
                loading: false,
                movimientos: action.payload
            }
        case 'DELETE_MOVIMIENTO':
            return {
                ...state,
                loading: false,
                movimientos: state.movimientos.filter(movimiento => movimiento._id !== action.payload)
            }
        case 'ADD_MOVIMIENTO':
            return {
                ...state,
                loading: false,
                movimientos: [action.payload, ...state.movimientos]
            }
        case 'MOVIMIENTO_ERROR':
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state
    }
}

export default AppReducer
