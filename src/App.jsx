import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar';
import Home from './components/Home';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import Footer from './components/Footer';


function App() {
 

  return (
    <>
      <Navbar />
      {/*<Home />*/}
      <RegisterPage />
      <LoginPage />
      <Footer />
    </>
  )
}

export default App
