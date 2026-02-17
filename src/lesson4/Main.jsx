import { FormAdd } from "./FormAdd"
import { FormLogin } from "./FormLogin"


export const Main = () => {
    let user = [
        { username: "shira", email: "sh0548508177@gmail.com", password: "244878" },
        { username: "aiala", email: "y548@gmail.com", password: "25788" },
        { username: "chaviva", email: "gjk25@gmail.com", password: "236878" },
        { username: "odaia", email: "o122@gmail.com", password: "254878" }
    ]

    const chek = (email, password) => {

        // user.forEach(i => {
        //     if (i.email == email && i.password == password) {
        //         return i;
        //     }
        // }
        // )

        for (let i = 0; i < user.length; i++) {
            if (user[i].email == email && user[i].password == password) {
                return user[i];
            }
        }

        return null

    }

    const newUser = (u) => {
        console.log(u);

        for (let i = 0; i < user.length; i++) {
            if (user[i].email == u.email) {
                return false;
            }
        }

        // user.forEach(i => {
        //     console.log(i);
        //     if (i.email == u.email) {
        //         console.log('same email');
        //         return false;
        //     }
        // })

        user.push(u);
        return true;

    }
    return <>
        <FormAdd newUser={newUser}></FormAdd>
        <FormLogin chek={chek}></FormLogin>


    </>

}