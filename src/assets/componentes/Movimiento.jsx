import React, {useContext} from 'react'
import { GlobalContext } from '../../context/GlobalState'

const Movimiento = ({movimiento}) => {

    const {deleteMovimiento} = useContext(GlobalContext)

    const signo = movimiento.importe < 0 ? '-' : '+'
  return (
    <li className={movimiento.importe < 0 ? 'minus' : 'plus'}>
        {movimiento.descripcion} <span>{signo}${Math.abs(movimiento.importe)}</span>
        <button className='delete-btn' onClick={()=> deleteMovimiento(movimiento.id)}>x</button>
    </li>
  )
}

export default Movimiento
