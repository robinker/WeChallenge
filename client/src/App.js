import React  from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import Home from './page/Home'
import Reviews from './page/Reviews'
import SingleReview from './page/SingleReview'

function App() {

  return (
    <div className='App'>
      <Container className="App-header">
        <Router>
          <Route path='/' exact component={Home} />
          <Route path='/reviews/:id' exact component={SingleReview} />
          <Route path='/reviews/query/:keyword' component={Reviews}/>
        </Router>
      </Container>
    </div>
  );
}

export default App;
