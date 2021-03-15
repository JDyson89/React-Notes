import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Form from './components/Form/Form.component'
import Home from './components/Home/Home.component'

function App(){
  return(
    <Router>
      <div>
        <Route exact path='/' component={Home}/>
        <Route exact path='/form' component={Form}/>
      </div>
    </Router>

  )

//   return studentData.map((student) => (
//     <div className='studentCard'>
//       <h1>{student.name} is a {student.school} student</h1>
//     </div>
  // )); 
}

export default App;