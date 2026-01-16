import React from 'react'
import { atom, useAtom } from 'jotai'

const countAtom = atom(0)

function App() {
  const [count, setCount] = useAtom(countAtom)

  return (
    <div className="container mx-auto p-4 prose">
      <h1>Welcome to Omoikane</h1>
      <p>
        <button onClick={() => setCount((c) => c + 1)}>
          count is {count}
        </button>
      </p>
    </div>
  )
}

export default App
