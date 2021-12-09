import React, { useState } from "react"
import Users from "./components/users"
import SearchStatus from "./components/searchStatus"
import api from "./api"
import User from "./components/user"
import "bootstrap/dist/css/bootstrap.css"

function App(){
    const [users, setUsers]=useState(api.users.fetchAll())
    const handleDelete = (userId)=>{
        for(let i=0; i<users.length; i++){
            if(userId===users[i]._id){
              users.splice(i,1)
            }
          }
          const newUsers = users.map(c=>c)
          setUsers(newUsers)
    }
    const handleToggleBookMark = (id)=>{
        for(let i=0; i<users.length; i++){
        if(id===users[i]._id){
            if(users[i].bookmark===false){
            users[i].bookmark=true}
            else {users[i].bookmark=false}
        }}
        const newUsers = users.map(c=>c)
        setUsers(newUsers)
        
    }
    return(
        <>
        <SearchStatus
            key={users._id}
            length={users.length}
        />
        <table className="table"> 
        <Users
        key={users.id}
        users={users}/>
        {users.map(user=>(
            <User
            key={user._id}
            onDelete={handleDelete}
            onBookMark={handleToggleBookMark}
            {...user}
            />
        ))}
        </table>
        </>
    )
}
export default App