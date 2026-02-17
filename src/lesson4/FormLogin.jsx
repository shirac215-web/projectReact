import swal from 'sweetalert'

export const FormLogin = ({ chek }) => {

    const s = (e) => {

        e.preventDefault();

        const user = {
            email: e.target[0].value,
            password: e.target[1].value
        }

        let u = chek(user.email, user.password)
        if(u){
          swal(`Hello ${u.username}`, 'login successfully', 'success')  
        }
        else{
            swal(`Ooppss!!!`, 'login failed. user not found', 'error')  
        }
    }
    return <>
        <form onSubmit={(e) => s(e)}>
            <label htmlFor="UN">email:</label><br></br>
            <input id="UN" placeholder="input email"></input><br></br><br></br>
            <label htmlFor="PW">Password:</label><br></br>
            <input id="PW" placeholder="input password" type='password'></input><br></br><br></br>
            <input type='submit' value='enter'></input>
        </form>
    </>



}
