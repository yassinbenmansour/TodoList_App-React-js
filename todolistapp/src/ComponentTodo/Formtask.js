import React, { useState } from 'react'
import Task from './Task'



export default function Formtask() {

    const [tache,SetTache] = useState([
        {nom:"sport"},
        {nom:"football"},
        {nom:"coding session"}

    ])
  return (
    <div>

        <div className="container mt-5 ">

        <h1>Todo List App</h1>
        Entre une tache :
        <input type="text" className='form-control ' />
        <br />
        <input type="button" className='btn btn-primary ' value="Ajouter " />
        
        <br />
        <br />
        <h1>Todo List : Task</h1>

        <ul>
            {
                tache.map((t) => {
                    return <li> <Task txt={t.nom}/></li>
                }) 
            }
        </ul>
        </div>
      
    </div>
  )
}
