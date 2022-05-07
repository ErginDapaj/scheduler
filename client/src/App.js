import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Schedule from 'react-schedule-job'
import 'react-schedule-job/dist/index.css'
const function_1 = () => {};
  
const function_2 = () => {};
  
const jobs = [
  {
    fn: function_1,
    id: '1',
    schedule: '* * * * *',
  }
,
  {
    fn: function_2,
    id: '2',
    schedule: '4 * 8,2,10,17,21,14,19 4,1 *',
  }
]

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/schedule")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
        <Schedule 
        jobs={jobs}
        timeZone='UTC'
        dashboard={{ hidden: false }}
      />
      </header>
    </div>
  );
}

export default App;