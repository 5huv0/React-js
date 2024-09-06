import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

function App() {
  const appStyle = {
    display : "flex",
    flexDirection : "row",
    background : "darkGrey"
  }


  return ( 
    <div className = "App" style={appStyle}>
      <Header name = "robin" color = "red"/>
      <div>
      <Main greet = "Hi!!!"/>
      <Sidebar />
      </div>
    </div>
  )
}

export default App;
