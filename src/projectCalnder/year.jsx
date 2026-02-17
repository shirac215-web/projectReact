import { Month } from "./Month"

export const Year = ({ calander, addEvent }) => {

    return <div style={
        calander.style ?
            { backgroundColor: calander.style.backgroundColor, color: calander.style.textColor }
            : {}}
    >

        {/* <h1>לוח שנה{calander.name}</h1> */}
        <div className="months-container">
            {calander.months.map((month, index) => (
                <Month days={calander.days} key={index} monthIndex={index} addEvent={addEvent} month={month} colorSlots={calander.style.backgroundColorSlot} colorFrames={calander.style.borderFrame} />
            ))}
        </div>
        {/* {calander.months.map(x => <Month month={x}></Month>)} */}
    </div>
}
