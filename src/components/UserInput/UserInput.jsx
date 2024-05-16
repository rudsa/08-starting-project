import React from "react";

const UserInput = (props) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <lable>Initial Investment</lable>
          <input
            type="number"
            required
            value={props.userInput.initialInvestment}
            onChange={(event) =>
              props.onChange("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <lable>Annual Investement</lable>
          <input
            type="number"
            required
            value={props.userInput.annualInvestment}
            onChange={(event) =>
              props.onChange("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <lable>Expected Return</lable>
          <input
            type="number"
            required
            value={props.userInput.expectedReturn}
            onChange={(event) =>
              props.onChange("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <lable>Duration</lable>
          <input
            type="number"
            required
            value={props.userInput.duration}
            onChange={(event) => props.onChange("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
