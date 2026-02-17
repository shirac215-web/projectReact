import { useState } from "react"

export const Game = () => {
    const [num, setNum] = useState(Math.floor(Math.random() * 1000))
    const [tries, setTries] = useState(0)
    const [message, setMessage] = useState()


    function check(value) {
        setTries(tries + 1)
        if (value > num) {
            setMessage('הכנס מספר קטן יותר')
        }
        else if (num > value) {
           setMessage('הכנס מספר גדול יותר')
        }
        else {
            setMessage('👌כל הכבוד ניחשתה נכון')

        }
    }

    return <>
        <input type="number" placeholder="input number" onBlur={(e) => check(e.target.value)}></input>
        {tries < 10 ?
            <>
               
                <p>{message}</p>
            </>
            :
            <>
                <h3>מספר הניחושים שלך {tries}</h3>
                <h4>😒נכשלת</h4>
            </>
        }
    </>
}