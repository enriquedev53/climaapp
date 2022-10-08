import AppClima from './components/AppClima'
import { ClimaProvider } from './hooks/ClimaProvider'

function App() {
 return (
  <ClimaProvider>
    <header>
      <h1>Consulta Clima</h1>
    </header>
    <AppClima />
  </ClimaProvider>
 )
}

export default App
