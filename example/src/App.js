import React from 'react'

import { useGrowl, Growl } from 'growl-react-component'
import './index.css'
import 'growl-react-component/dist/index.css'

function App() {
  const [active, setActive] = useGrowl()

  return (
    <div className="app">
      <header className="">
        <a className="App-link" href="#" onClick={() => {
          void setActive(true)
        }}>
          Click here to activate the growl
        </a>
      </header>
      <Growl onDismissed={() => setActive(false)} active={active} timer={5000} message="Hello World!"/>
    </div>
  )
}

export default App
