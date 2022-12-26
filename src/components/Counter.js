import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from "../store/counter";
import classes from './Counter.module.css';

const Counter = () => {
  const  dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const showCounter = useSelector(state => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increase());
  }

  const incrementByHandler = () => {
    dispatch(counterActions.increaseBy(5));
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrease());
  }

  const decrementByHandler = () => {
    dispatch(counterActions.decreaseBy({amount:5}));
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{showCounter && counter}</div>
      <div>
        <button onClick={incrementByHandler}>Increment By 5</button>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={decrementByHandler}>Decrement By 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
