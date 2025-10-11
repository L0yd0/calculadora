import React, {use, useState, useContext} from 'react'
import { GlobalContext } from '../../context/GlobalState'

const CapturaForm = () => {

    const [descripcion, setDescripcion] = useState('')
    const [importe, setImporte] = useState(0)
    
    const {addMovimiento} = useContext(GlobalContext)

    const onSubmit =(e) =>{
        //evitamos el refrescp
        e.preventDefault()
        //creamos objeto
        const nuevoMovimiento={
            id: Math.floor(Math.random()*100000),
            descripcion,
            importe: +importe
        }
        //agregar movimiento
        addMovimiento(nuevoMovimiento)
        //limpiamos pantalla
        setImporte(0)
        setDescripcion('')
    }


  return (
    <>
        <h3>Agregar Movimiento</h3>
        <form onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="descripcion">Descripcion</label>
                <input type="text" value={descripcion} onChange={(e)=> setDescripcion(e.target.value)}placeholder='teclea la descripcion' />
            </div>
            <div className="form-control">
                <label htmlFor="importe">Importe <br/>negativo egresos, positivio ingresos</label>
                <input type="number" value={importe} onChange={(e)=> setImporte(e.target.value)} placeholder='teclea el importe'/>
            </div>
            <button className='btn'>Agregar Movimiento</button>
        </form>
    </>
  )
}

export default CapturaForm
