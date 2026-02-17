import { useState } from "react"
import init from "./basicCalnder"
import './Stayle.css';
import { From } from "./From"
import { Year } from "./year"

export const Main = () => {
     const [calander, setCalander] = useState(JSON.parse(localStorage.getItem('basicCalander')))
     const [calanderIndex, setCalanderIndex] = useState()
     let [list, setList] = useState(JSON.parse(localStorage.getItem('list')))

     // --- פונקציית חיפוש וגלילה ---
     const [searchMonth, setSearchMonth] = useState("");

     const handleSearch = () => {
          if (!searchMonth) return;
          // מציאת האינדקס של החודש לפי השם שלו במערך
          const monthIdx = calander.months.findIndex(m => m.name === searchMonth);
          
          if (monthIdx !== -1) {
               const element = document.getElementById(`month-${monthIdx}`);
               if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    // הוספת קלאס להדגשה זמנית
                    element.classList.add('highlight-month');
                    setTimeout(() => element.classList.remove('highlight-month'), 2000);
               }
          } else {
               alert("החודש לא נמצא בלוח זה");
          }
     }

     const saveCalander = () => {
          if (calanderIndex) {
               list[calanderIndex] = calander
          }
          else {
               let counter = JSON.parse(localStorage.getItem('counter'))
               setCalanderIndex(counter)
               calander.id = ++counter
               list.push(calander)
               localStorage.setItem('counter', JSON.stringify(counter))
          }
          localStorage.setItem('list', JSON.stringify(list))
     }

     const addEvent = (monthIndex, dayIndex, event) => {
          let c = { ...calander }; // שימוש ב-spread כדי להבטיח רינדור מחדש
          c.months[monthIndex].days[dayIndex].events.push(event)
          setCalander(c)
          list[calanderIndex] = c
          localStorage.setItem('list', JSON.stringify(list))
          setCalander(JSON.parse(localStorage.getItem('list'))[calanderIndex])
     }

     return (
          <div style={{ backgroundColor: calander?.style?.backgroundColor, minHeight: '100vh', paddingBottom: '50px' }}>
               
               {/* 1. כותרת דינמית מעוצבת */}
               <h1 className="main-title" style={{ color: calander?.style?.textColor }}>
                    {calander?.name ? `לוח השנה של ${calander.name}` : "לוח שנה"}
               </h1>

               {/* 2. סרגל חיפוש מהיר */}
               <div className="search-bar">
                    <select onChange={(e) => setSearchMonth(e.target.value)} className="search-select">
                         <option value="">בחר חודש לחיפוש...</option>
                         {calander?.months?.map((m, i) => (
                              <option key={i} value={m.name}>{m.name}</option>
                         ))}
                    </select>
                    <button onClick={handleSearch} className="search-btn">🔍 עבור לחודש</button>
               </div>

               {/* 3. רכיבי הלוח */}
               <From 
                    setCalander={setCalander} 
                    send={saveCalander} 
                    list={list} 
                    setCalanderIndex={setCalanderIndex} 
                    calander={calander} 
               />
               
               <Year calander={calander} addEvent={addEvent} />
          </div>
     )
}