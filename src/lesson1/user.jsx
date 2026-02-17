
export const User = ({ username, mail,password,phone }) => {
    return <>
        <h3>username:{username} is mail:{mail}</h3>
        {phone.length == 10 || phone.length == 9 &&<h4>טלפון תקין</h4>}
          {password.length< 5  &&<h4> סיסמא קצרה מידי</h4>}

    </>
}