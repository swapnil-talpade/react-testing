import './App.css'
import Users from './components/users'
import Providers from './providers'

function App() {
  return (
    <Providers>
      <div className="App">
        <Users />
      </div>
    </Providers>
  )
}

export default App
