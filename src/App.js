import React from "react";
import Counter from "./components/Counter";
import CounterMapDispatchFn from "./components/CounterMapDispatchFn";
import CounterMapDispatchObj from "./components/CounterMapDispatchObj";


const App = () => (
    <div className="App">
      <Counter />
      <CounterMapDispatchFn/>
      <CounterMapDispatchObj/>
    </div>
);

export default App;