import React from "react";

import CalendarHeatmap from "react-calendar-heatmap";
import { Tooltip as ReactTooltip } from 'react-tooltip'
//import { githubdata} from "./GithubData";

import UserContext from './UserContext.js';

import "./Github.css";

function Heatmap() {
  const user = React.useContext(UserContext).value;
  const userID = user.id;

  const [attendance, setAttendance] = React.useState([]);
  const [dataFetched, setDataFetched] = React.useState(false);

  const getAttendance = async () => {
    const options = {
      mode: 'cors',
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'userID': userID,
      }),
    }
    const response = await fetch('http://localhost:3600/get-attendance-batched', options);
    const result = await response.json();
    setAttendance(result); 
    setDataFetched(true);
  }

  React.useEffect(() => {
    getAttendance(); 
  }, []);
  
  console.log("dsfksjdfs");
  for (let i in attendance) {
    console.log(attendance[i]);
  }
 

  if (dataFetched) {
    const today = new Date();
    return (
      <div>
        <CalendarHeatmap
          startDate={shiftDate(today, -365)}
          endDate={today}
          values={attendance}
          classForValue={(value) => {
            if (!value) {
              return "color-empty";
            }
            return `${value.count}` < 5
              ? `color-github-${value.count}`
              : `color-github-5`;
          }}

          // tooltipDataAttrs={(value) => {
          //   if (value.date === null) return null;
          //   return {
          //     "data-tip": `${
          //       value.count
          //     } classes attended on {${value.date.toString().slice(4, 15)}`
          //   };
          // }}
          showWeekdayLabels={false}
        />
        <ReactTooltip />
      </div>
    );
  }

return (<div>Loading...</div>)
}



function shiftDate(date, numDays) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
}

function getRange(count) {
  return Array.from({ length: count }, (_, i) => i);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default Heatmap;
