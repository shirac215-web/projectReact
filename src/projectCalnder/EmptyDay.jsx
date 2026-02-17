export const EmptyDay = ({ colorSlots, colorFrames }) => {

  return <>
    <div className="day-cell" style={{ backgroundColor: colorSlots, border: `1px solid ${colorFrames}`, opacity: 0.7 }}>
    </div>
  </>
};