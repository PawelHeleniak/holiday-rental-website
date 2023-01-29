import { Header } from './components/Header'
import { About } from './components/About'
import { Cities } from './components/Cities'

export const HomePage = () => {
  return (
    <>
      <Header />
      <Cities />
      <About />
    </>
  )
}