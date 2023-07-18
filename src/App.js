import logo from './logo.svg';
import './App.css';
import Home from "./Home"
import Create from "./Create"
import Update from "./Update"
import Page404 from "./Page404"
import NavBar from "./NavBar"
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
  	<BrowserRouter>
	<NavBar/>
	<Routes>
		<Route path="/" element={<Home/>}/>
		<Route path="/create" element={<Create/>}/>
		<Route path="/update" element={<Update/>}/>
		<Route path="*" element={<Page404/>}/>
	</Routes>
	</BrowserRouter>
    </div>
  );
}

export default App;
