import { useEffect, useState } from 'react'
import api from './services/api'

function App() {
  const [status, setStatus] = useState('Connecting...')

  useEffect(() => {
    api.get('/ping')
      .then((res) => setStatus(res.data))
      .catch(() => setStatus('Could not reach backend'))
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-purple-600 mb-4">Meow</h1>
      <p className="text-lg text-gray-600">Backend status:</p>
      <p className="text-xl font-semibold text-green-500 mt-2">{status}</p>
    </div>
  )
}

export default App
