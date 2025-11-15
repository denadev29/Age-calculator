import { useState } from "react";

export default function App() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const [age, setAge] = useState({
    years: "--",
    months: "--",
    days: "--",
  });

  function calculateAge() {
    const birth = new Date(year, month - 1, day);
    const today = new Date();

    if (isNaN(birth)) return;

    let y = today.getFullYear() - birth.getFullYear();
    let m = today.getMonth() - birth.getMonth();
    let d = today.getDate() - birth.getDate();

    if (d < 0) {
      const prevMonthDays = new Date(
        today.getFullYear(),
        today.getMonth(),
        0
      ).getDate();
      d += prevMonthDays;
      m--;
    }

    if (m < 0) {
      m += 12;
      y--;
    }

    setAge({ years: y, months: m, days: d });
  }

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

        <hr style={{ backgroundColor: "red" }} />

        <div>
          <Output>
            <span>{age.years}</span> years
          </Output>
          <Output>
            <span>{age.months}</span> months
          </Output>
          <Output>
            <span>{age.days}</span> days
          </Output>
        </div>
      </div>

      <Button onClick={calculateAge} />
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

function Button({ onClick }) {
  return (
    <button className="btn" onClick={onClick}>
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
