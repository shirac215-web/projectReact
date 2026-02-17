import { Users } from "./Users"



export const Main = () => {
    let users= [
    {username:"shira",email:"sh0548508177@gmail.com",password:"244878",phone:"0548508177"},
    {username:"aiala",email:"y548@gmail.com",password:"25788",phone:"0548508577"},
    {username:"chaviva",email:"gjk25@gmail.com",password:"236878",phone:"055648596"},
    {username:"odaia",email:"o122@gmail.com",password:"254878",phone:"0548506577"},
]
    return <>
       <Users  list={users}></Users>
      
    </>
}