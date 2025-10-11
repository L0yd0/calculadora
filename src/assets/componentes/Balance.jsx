import React, {useContext} from 'react'
import {GlobalContext} from '../../context/GlobalState'

const Balance = () => {

    const {movimientos} = useContext(GlobalContext)
    //obtengo los importes en un array llamado importes
    const importes = movimientos.map(movimiento => movimiento.importe)
    console.log(importes)

    //calculamos el total del dinero que tenemos usando reduce 
    const total = importes.reduce((acc, item) => (acc+= item), 0).toFixed(2)
  return (
    <>
        <h4>Tu saldo</h4>
        <h1>${total}</h1>
    </>
  )
}

export default Balance
