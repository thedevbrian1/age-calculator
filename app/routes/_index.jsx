import { useState } from "react";

export const meta = () => {
  return [
    { title: "Age calculator" },
    { name: "description", content: "Welcome to our age calculator." },
  ];
};

export default function Index() {
  // Declare state variables for storing the form inputs
  let [day, setDay] = useState("");
  let [month, setMonth] = useState("");
  let [year, setYear] = useState("");

  // Declare state variables for storing the date differences
  let [dateDifference, setDateDifference] = useState(0);
  let [monthDifference, setMonthDifference] = useState(0);
  let [yearDifference, setYearDifference] = useState(0);

  // Declare state variables for errors
  let [dayError, setDayError] = useState(false);
  let [monthError, setMonthError] = useState(false);
  let [yearError, setYearError] = useState(false);

  function handleClick() {
    let today = new Date();

    let currentDay = today.getDate();

    let currentMonth = today.getMonth();
    console.log({ currentMonth });

    let currentYear = today.getFullYear();
    console.log({ currentYear });

    if (!day || Number(day) < 1 || Number(day) > 31) {
      setDayError(true);
    } else {
      setDayError(false);
    }
    if (!month || Number(month) < 0 || Number(month) > 11) {
      setMonthError(true);
    } else {
      setMonthError(false);
    }
    if (!year || Number(year) > currentYear) {
      setYearError(true);
    } else {
      setYearError(false);
    }

    setDateDifference(currentDay - day);
    setMonthDifference(currentMonth - month);
    setYearDifference(currentYear - year);

    console.log({ dateDifference });
    console.log({ monthDifference });
    console.log({ yearDifference });
  }

  return (
    <main className="max-w-4xl mx-auto">
      <div className="flex gap-4 mt-28">
        <div>
          <Label htmlFor="day" hasError={dayError}>
            Day
          </Label>
          <Input id="day" value={day} setValue={setDay} hasError={dayError} />
          {dayError ? (
            <p className="text-red-500">Must be a valid day</p>
          ) : null}
        </div>
        <div>
          <Label htmlFor="month" hasError={monthError}>
            Month
          </Label>
          <Input
            id="month"
            value={month}
            setValue={setMonth}
            hasError={monthError}
          />
          {monthError ? (
            <p className="text-red-500">Must be a valid month</p>
          ) : null}
        </div>
        <div>
          <Label htmlFor="year" hasError={yearError}>
            Year
          </Label>
          <Input
            id="year"
            value={year}
            setValue={setYear}
            hasError={yearError}
          />
          {yearError ? (
            <p className="text-red-500">Must be less than current year</p>
          ) : null}
        </div>
      </div>
      <div className="flex justify-end mt-8 pr-4">
        <button
          type="button"
          className="bg-purple-500 hover:bg-purple-300 transition ease-in-out duration-300 px-4 py-2 rounded-md"
          onClick={handleClick}
        >
          Calculate
        </button>
      </div>
      <div className="mt-8">
        <Display
          numValue={yearDifference}
          textValue={"years"}
          hasError={yearError}
        />
        <Display
          numValue={monthDifference}
          textValue={"months"}
          hasError={monthError}
        />
        <Display
          numValue={dateDifference}
          textValue={"days"}
          hasError={dayError}
        />
      </div>
    </main>
  );
}

function Label({ children, htmlFor, hasError }) {
  return (
    <label
      htmlFor={htmlFor}
      className={`uppercase ${hasError ? "text-red-500" : ""}`}
    >
      {children}
    </label>
  );
}

function Input({ id, value, setValue, hasError }) {
  return (
    <input
      type="number"
      id={id}
      value={value}
      onChange={(event) => {
        setValue(event.target.value);
      }}
      className={`px-4 py-2 rounded-md block border ${
        hasError ? "border-red-500" : "border-gray-300"
      } `}
    />
  );
}

function Display({ numValue, textValue, hasError }) {
  return (
    <p className="font-bold text-7xl">
      <span className="text-purple-500">{hasError ? "--" : numValue}</span>{" "}
      {textValue}
    </p>
  );
}
