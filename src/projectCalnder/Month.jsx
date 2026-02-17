import { useEffect, useState } from "react"
import { Day } from "./day"
import { EmptyDay } from "./EmptyDay"

export const Month = ({ days, month, colorSlots, colorFrames, monthIndex, addEvent }) => {

  // הוספת המשתנה לחישוב התאים הריקים מבלי למחוק כלום
  // אנחנו לוקחים את ה-dayOfWeek של היום הראשון בחודש (למשל 3 עבור יום שלישי)
  // ומחסירים 1 כדי לדעת כמה משבצות ריקות צריך (ראשון ושני)
  const firstDayOfWeek = month.days[0] ? month.days[0].dayOfWeek : 1;
  const emptySlotsCount = firstDayOfWeek - 1;

  return <>
    {console.log(colorSlots)}
    <div className="month-card"id={`month-${monthIndex}`}>
      <h2>{month.name}</h2>
      <div className="days-header">
        {/* סדר ימים מ-א' עד ז' */}
        {['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז'].map(d => <span key={d}>{d}</span>)}
      </div>
      <div className="days-grid">

        {/* הוספת התאים הריקים לפני ימי החודש */}
        {Array.from({ length: emptySlotsCount }).map((_, index) => (
          <EmptyDay key={`empty-${index}`} />
        ))}

        {/* המיפוי המקורי שלך נשאר בדיוק אותו דבר */}
        {month.days.map((day, index) => (
          <Day 
            monthIndex={monthIndex} 
            dayIndex={index} 
            key={index} 
            addEvent={addEvent} 
            day={day} 
            colorSlots={colorSlots} 
            colorFrames={colorFrames} 
          />
        ))}
      </div>
    </div>
  </>
}