import React from "react";
import { connect } from "react-redux";
import { increment, decrement, reset } from "../redux/actions";

const Counter = ({ count, decrement, increment, reset }) => {
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

const actionCreators = {
  increment,
  decrement,
  reset,
};

export default connect(mapStateToProps, actionCreators)(Counter);
