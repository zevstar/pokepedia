import { useContext } from 'react'
//components
import Nav from './components/Nav'
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
  <UserContext.Provider value={'Teo'}>
      <Nav />
  </UserContext.Provider>
  


    </div>
  );
}

export default App;
