import { Header } from './components/Header'
import { About } from './components/About'
import { Cities } from './components/Cities'

export const HomePage = (props) => {
  return (
    <>
      <Header selectValue={props} />
      <Cities />
      <About />
    </>
  )
}