import { useState } from "react"

export const AddEvent = ({ dayIndex, monthIndex, addEvent, setFlag }) => {
    const [newEvent, setNewEvent] = useState({ type: "", text: "" })

    const add = (e) => {
        e.preventDefault() // חשוב מאוד למנוע שגיאות שליחה
        addEvent(monthIndex, dayIndex, newEvent)
        setFlag(false)
    }

    return (
        <div style={{
            padding: "20px",
            backgroundColor: "#fff",
            borderRadius: "10px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
            border: "1px solid #ddd",
            direction: "rtl"
        }}>
            <form onSubmit={add}>
                <label style={{ display: "block", marginBottom: "5px" }}>סוג האירוע:</label>
                <input 
                    style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
                    placeholder="הכנס סוג" 
                    onChange={(e) => setNewEvent({ ...newEvent, type: e.target.value })}
                />

                <label style={{ display: "block", marginBottom: "5px" }}>תיאור:</label>
                <input 
                    style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
                    placeholder="הכנס טקסט" 
                    type='text' 
                    onChange={(e) => setNewEvent({ ...newEvent, text: e.target.value })}
                />

                <button type='submit' style={{
                    width: "100%",
                    padding: "10px",
                    backgroundColor: "#007bff",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer"
                }}>שמור</button>
            </form>
        </div>
    )
}