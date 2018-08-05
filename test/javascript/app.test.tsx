import * as React from 'react'
import * as renderer from 'react-test-renderer'

import { App } from 'Javascript/app'

it('renders app component with a custom name', () => {
  const component = renderer.create(<App name={'Dmitriy'}/>)
  expect(component).toMatchSnapshot()
})

it('renders app component with a default name', () => {
  const component = renderer.create(<App/>)
  expect(component).toMatchSnapshot()
})
