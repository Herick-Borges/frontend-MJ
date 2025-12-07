
import { BrowserRouter } from 'react-router-dom'
import './App.scss'
import AppRoutes from './routes.jsx'

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App
