import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../store/counter-slice";
import { Link } from "react-router-dom";

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
      <header>
        <nav className="header-nav">
          <ul className="header-ul">
            <li>
              <h2
                className="header-h2"
                style={{ fontFamily: "monospace", fontSize: "30px" }}
              >
                <Link to="/counter" style={{ textDecoration: "none" }}>
                  Counter App
                </Link>
              </h2>
            </li>
            <li>
              <h2
                className="header-h3"
                style={{ fontFamily: "monospace", fontSize: "20px" }}
              >
                <Link to="/" style={{ textDecoration: "none" }}>
                  {"> Go to Redux Shopping App"}
                </Link>
              </h2>
            </li>
          </ul>
        </nav>
      </header>

      <h2>{counter}</h2>
      <button onClick={decrement}>Decrease</button>
      <button onClick={increment}>Increase</button>
      <button onClick={() => addBy(30)}>Add by value</button>
    </div>
  );
}

export default CounterApp;
