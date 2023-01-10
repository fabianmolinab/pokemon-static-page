import { render } from '@testing-library/react'
import { Navbar } from '@nextui-org/react'

describe('Test for <Navbar/>', () => {
  test('render component', () => {
    const view = render(<Navbar />)
    console.log(view)
  })
})
