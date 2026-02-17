import { useState } from "react";
import { AddEvent } from "./AddEvent";
import { Event } from "./Event";

export const Day = ({ day, colorSlots, colorFrames, monthIndex, dayIndex, addEvent }) => {

  const [flag, setFlag] = useState(false);

  return <>
    <div className="day-cell" style={{ backgroundColor: colorSlots, border: `1px solid ${colorFrames}` }}>
      
      <div className="day-header" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span className="day-name">{day.name}</span>
        
        {/* שינוי כאן: הלחיצה הופכת את המצב של flag */}
        <button 
          className="add-event-plus-btn" 
          onClick={(e) => {
            e.stopPropagation(); 
            setFlag(!flag); // אם זה true יהיה false, ולהפך
          }}
        >
          {flag ? '-' : '+'} {/* שינוי ויזואלי קטן: פלוס הופך למינוס כשזה פתוח */}
        </button>
      </div>

      <div className="events-list">
        {day.events.map((event, index) => (
          <Event key={index} event={event} monthIndex={monthIndex} dayIndex={dayIndex} />
        ))}
      </div>

      {/* הלוגיקה המקורית שלך נשארת כאן */}
      {flag && <AddEvent addEvent={addEvent} monthIndex={monthIndex} dayIndex={dayIndex} setFlag={setFlag}></AddEvent>}
    </div>
  </>
};