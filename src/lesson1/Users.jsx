import { User } from "./user"

export const Users=({list}) =>
    {
       
  return <>
   {list.map(u=><User username={u.username}email={u.email}password={u.password}phone={u.phone}></User>)}
        

    </>
    }
