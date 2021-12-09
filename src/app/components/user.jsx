import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";

const User = (person)=>{
    
    return (
        <>
        <tbody>
            <tr>
            <td>{person.name}</td>
            <td>{person.qualities.map(qualitiesName=>
                <Qualitie
                    key={qualitiesName._id}
                    {...qualitiesName}
                />)}
            </td>
            <td>{person.profession.name}</td>
            <td>{person.completedMeetings}</td>
            <td>{person.rate}</td>
            <td><button onClick={()=>person.onBookMark(person._id)}>
                <BookMark
                key={person.id}
                status={person.bookmark}
                />
                </button></td>
            <td><button 
            className='btn btn-danger' 
            onClick={()=>person.onDelete(person._id)}>delete</button></td>
            </tr>
            </tbody>
        </>
    )
 
}

export default User