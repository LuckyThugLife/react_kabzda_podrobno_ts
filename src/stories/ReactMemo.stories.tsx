import React, {useState} from "react";

export default {
    title: "React.memo demo",
}

export const NewMessagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

export const UsersSecret = (props: { users: Array<string> }) => {
    console.log("Users")
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}
export const Users = React.memo(UsersSecret)


export const Example1 = () => {
    console.log("Example1")
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Rustam", "Fira", "Adam", "Aya"])
    
    const addUser = () => {
      const newUser = [...users, "Maruf " + new Date().getTime()]
        setUsers(newUser)
    }

    return <>
        <button onClick={()=>setCounter(counter+1)}>+</button>
        <button onClick={addUser}>add user</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}