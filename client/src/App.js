import React  from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import Reviews from './page/Reviews'
import SingleReview from './page/SingleReview'
import Search from './component/Search'

function App() {

  return (
    <div className='App'>
      <Container className="App-header">
        <Router>
          <Search />
          <Route path='/reviews/:id' exact component={SingleReview} />
          <Route path='/reviews/query/:keyword' component={Reviews}/>
        </Router>
      </Container>
    </div>
  );
}

export default App;
