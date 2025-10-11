const AppReducer = (state, action) => {
    switch(action.type){
        case 'DELETE_MOVIMIENTO':
            return {
                ...state,
                movimientos: state.movimientos.filter(movimiento => movimiento.id !== action.payload)
            }
        case 'ADD_MOVIMIENTO':
            return {
                ...state,
                movimientos: [action.payload, ...state.movimientos]
            }
        default:
            return state
    }
}
export default AppReducer