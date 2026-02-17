
export const Event = ({ event,monthIndex,index }) => {

    return <>
      <div className={`event-item ${event.type}`}>
      <span className="event-icon">{event.type}</span>
      <span className="event-text">{event.text}</span>
     </div>
    </>
}

{/* <p>{event.type} {event.text}</p> */}