import '../App.scss';
import Todolist from './Todolist';
import { createStore } from 'redux'
import { reducer } from '../Redux/Reducers/reducer';
import { Provider } from 'react-redux';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import AddTask from './AddTask';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const store = createStore(reducer)

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <div className="container-fluid">
        <Header />
        <Routes>
          <Route path="/" element={<AddTask />}></Route>
          <Route path="show-todos" element={<Todolist />}></Route>
        </Routes>
        </div>
      </BrowserRouter>    
    </Provider>
  );
}

export default App;
