import * as React from 'react'

interface AppProps {
  name: string
}

const App: React.SFC<AppProps> = (props) => (
  <div>Hello {props.name}!</div>
)

App.defaultProps = {
  name: 'David',
}

export default App
