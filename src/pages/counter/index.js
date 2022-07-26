import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../store/counter-slice";
import Header from "../../components/Header";

function CounterApp() {
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(actions.increment());
  };
  const decrement = () => {
    dispatch(actions.decrement());
  };
  const addBy = (addValue) => {
    dispatch(actions.addBy(addValue));
  };

  return (
    <div>
      <Header />

      <h2>{counter}</h2>
      <button onClick={decrement}>Decrease</button>
      <button onClick={increment}>Increase</button>
      <button onClick={() => addBy(30)}>Add by value</button>
    </div>
  );
}

export default CounterApp;
