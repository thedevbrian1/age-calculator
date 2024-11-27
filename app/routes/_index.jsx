import { useState } from "react";

export const meta = () => {
  return [
    { title: "Age calculator" },
    { name: "description", content: "Welcome to our age calculator." },
  ];
};

export default function Index() {
  // Declare state variables for storing the form inputs
  let [day, setDay] = useState(0);
  let [month, setMonth] = useState(0);
  let [year, setYear] = useState(0);

  // Declare state variables for storing the date differences
  let [dateDifference, setDateDifference] = useState(0);
  let [monthDifference, setMonthDifference] = useState(0);
  let [yearDifference, setYearDifference] = useState(0);

  function handleClick() {
    let today = new Date();
    console.log({ today });

    let currentDay = today.getDate();
    console.log({ currentDay });

    let currentMonth = today.getMonth();
    console.log({ currentMonth });

    let currentYear = today.getFullYear();
    console.log({ currentYear });

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
          <Label htmlFor="day">Day</Label>
          <Input id="day" value={day} setValue={setDay} />
        </div>
        <div>
          <Label htmlFor="month">Month</Label>
          <Input id="month" value={month} setValue={setMonth} />
        </div>
        <div>
          <Label htmlFor="year">Year</Label>
          <Input id="year" value={year} setValue={setYear} />
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
        <Display numValue={yearDifference} textValue={"years"} />
        <Display numValue={monthDifference} textValue={"months"} />
        <Display numValue={dateDifference} textValue={"days"} />
      </div>
    </main>
  );
}

function Label({ children, htmlFor }) {
  return (
    <label htmlFor={htmlFor} className="uppercase">
      {children}
    </label>
  );
}

function Input({ id, value, setValue }) {
  return (
    <input
      type="number"
      id={id}
      value={value}
      onChange={(event) => {
        setValue(event.target.value);
      }}
      className="px-4 py-2 rounded-md block border border-gray-300"
    />
  );
}

function Display({ numValue, textValue }) {
  return (
    <p className="font-bold text-7xl">
      <span className="text-purple-500">{numValue}</span> {textValue}
    </p>
  );
}
