import React from "react";
import Header from "./component/Header";
import { Balance } from "./component/Balance";
import { IncomeExpenses } from "./component/IncomeExpenses";
import { TransationList } from "./component/TransationList";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransationList />
      </div>
    </>
  );
}

export default App;
