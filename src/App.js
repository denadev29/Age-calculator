import { useState } from "react";

export default function App() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const currentYear = new Date().getFullYear();
  console.log(currentYear);
  const getYear = currentYear - year;
  return (
    <div className="app">
      <div className="inner-app">
        <Inputs
          day={day}
          setDay={setDay}
          month={month}
          setMonth={setMonth}
          year={year}
          setYear={setYear}
        />
        <hr style={{ backgroundColor: " red" }}></hr>
        <div>
          <Output>
            <span>{year === "" ? "- -" : getYear} </span>years
          </Output>
          <Output>
            <span>- -</span>month
          </Output>
          <Output>
            <span>- -</span>days
          </Output>
        </div>
      </div>
      <Button></Button>
    </div>
  );
}

function Inputs({ day, setDay, month, setMonth, year, setYear }) {
  return (
    <div className="container">
      <div>
        <label>Day</label>
        <br />
        <input
          className="input"
          placeholder="DD"
          value={day}
          onChange={(e) => setDay(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Month</label>
        <br />
        <input
          className="input"
          placeholder="MM"
          value={month}
          onChange={(e) => setMonth(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Year</label>
        <br />
        <input
          className="input"
          placeholder="YYYY"
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
        />
      </div>
    </div>
  );
}

function Button() {
  return (
    <button className="btn">
      <img
        className="btn-icon"
        src="../assets/images/icon-arrow.svg"
        alt="arrow"
      />
    </button>
  );
}
function Output({ children }) {
  return (
    <div>
      <h1>{children}</h1>
    </div>
  );
}
