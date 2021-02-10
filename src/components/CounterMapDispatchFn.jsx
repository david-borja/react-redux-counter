import React from "react";
import { connect } from "react-redux";
import { increment, decrement, reset } from "../redux/actions";

const Counter = ({ count, increment, decrement, reset }) => {
  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state.count,
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  reset: () => dispatch(reset())
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
