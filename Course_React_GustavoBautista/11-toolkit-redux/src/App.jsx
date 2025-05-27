import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementBy2 } from './store/slices/counter/counterSlice';

function App() {

  //
  const {counter} =  useSelector( state => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <h1>count is {counter}</h1>
      <div className="card">
        <button type='buttton' onClick={()=> dispatch(increment())}>
          count is {counter}
        </button>
        <p>
        <button type='buttton' onClick={()=> dispatch(increment())}>
            Increment
        </button>
        <button type='buttton' onClick={()=> dispatch(decrement())}>
            Decrement
        </button>
        <button type='buttton' onClick={()=> dispatch(incrementBy2())}>
            Increment by 2
        </button>
        </p>
      </div>
    </>
  )
}

export default App
