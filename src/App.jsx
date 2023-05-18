import './App.css'
import DestinationData from './pages/DestinationData'
import SourceData from './pages/SourceTable'
import Tables from './pages/Tables'

function App() {

  return (
    <div className='container'>
      <h1>Data Lineage</h1>
      <Tables/>
      <SourceData/>
      <DestinationData/>
    </div>
  )
}

export default App
