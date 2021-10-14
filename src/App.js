
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';

function App() {
  return (
<>
    <Navbar brandname="Text Analysis" home="Home" About="About" Contact="Contact"/>
    <div className="container my-4">
 <Textarea heading="Text Analyzer"/>
 {/* <About/> */}
 </div>
 
 
  </>
    );
}

export default App;
