import React, { useState } from "react";
import Header from "../Header/Header";
import UserInput from "../UserInput/UserInput";
import ResultTable from "../ResultTable/ResultTable";

const InvestCalculator = () => {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevUserInput) => {
      console.log(prevUserInput);
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  };

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
      {inputIsValid && <ResultTable input={userInput} />}
    </>
  );
};

export default InvestCalculator;
