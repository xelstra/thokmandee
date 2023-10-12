import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './components/header'
import Menu from './components/home'
import ProductsList from './components/products'
import Footer from './components/footer'

function App() {
  return (
    <>
      <div className=''>
        <Header />
      </div>
      <div className="">
        <div>
          <Menu />
        </div>
        <div className='ps-3 pe-3'>
          <ProductsList />
        </div>
      </div>
      <div className='w-100 bg-info'><Footer/></div>
    </>
  )
}

export default App
