
import './App.css';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <div className="App">
      <Router>
        
        <ResetScroll></ResetScroll>

        <Route path="/" exact>
          <HomePage></HomePage>
        </Route>

        <Route path='/search'>
          <SearchPage></SearchPage>
        </Route>


        {/* <Route path='*'>
          <HomePage></HomePage>
        </Route> */}

      </Router>
    </div>
  );
}

export default App;
