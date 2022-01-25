import { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
//components
import Nav from './components/Nav'
//pages
import Login from './pages/Login'
//contexts
import UserContext from './contexts/UserContext';
//css
import './App.css';

function App() {
  // in able for us to use our context, we import first, then we can use the useContext hook to access our context
  //const user = useContext(UserContext)
  //console.log(user)
  return (
    <div className="App">
   
{/* All context comes with the Provider Component. this allows us to use this as a wrapper and share the information to all of it's children. We need the value prop inside our provider.*/}
  <UserContext.Provider value={'Christina'}>
      <Nav />

      {/*  We need to wrap all of our routes inside react reouter Routes component */}

      
      <Routes>
        <Route path='login' element={<Login />} />
      </Routes>



  </UserContext.Provider>
  


    </div>
  );
}

export default App;
