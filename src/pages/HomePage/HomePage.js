import { Header } from './components/Header'
import { About } from './components/About'
import { Offers } from './components/Offers'

export const HomePage = (props) => {
  return (
    <>
      <Header selectValue={props} />
      <About />
      <Offers />
    </>
  )
}