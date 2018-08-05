import * as React from 'react'
import './app.scss'

interface AppProps {
  name: string
}

const App: React.SFC<AppProps> = (props) => (
  <p>Hello {props.name}!</p>
)

App.defaultProps = {
  name: 'David',
}

export default App
