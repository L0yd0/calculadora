import './App.css'
import Header from './assets/componentes/Header'
import Balance from './assets/componentes/Balance'
import IngresosEgresos from './assets/componentes/IngresosEgresos'
import MovimientosLista from './assets/componentes/MovimientosLista'
import CapturaForm from './assets/componentes/CapturaForm'
import { GlobalProvider } from './context/GlobalState'

function App() {
  return(
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance />
        <IngresosEgresos/>
        <MovimientosLista/>
        <CapturaForm/>
      </div>
    </GlobalProvider>
  )
}

export default App
