import React, { useState } from 'react'
import Task from './Task';
import {v4 as uuidv4} from 'uuid';



export default function Formtask() {

    const [tache,setTache] = useState([
        {id:uuidv4(),nom:"sport"},
        {id:uuidv4(),nom:"football"},
        {id:uuidv4(),nom:"coding session"}

    ])

    const [ztache , setZtache]= useState('');

    const zidtache = () => {
        let ntaches = [...tache];
        let ntache = {} ;

        ntache.id = uuidv4();
        ntache.nom = ztache ;
        ntaches.push(ntache);

        setTache(ntaches);
        setZtache("");
    }




  return (
    <div>

        <div className="container mt-5 ">

        <h1>Todo List App</h1>
        <form>
        Entre une tache :
        <input type="text" className='form-control '  onChange={(e)=>{setZtache(e.target.value)}} />
        <br />
        <input type="button" onClick={zidtache} className='btn btn-primary ' value="Ajouter " />
        </form>
        <br />
        <br />
        <h1>Todo List : Task</h1>

        <ul>
            {
                tache.map((t) => {
                    return <li key={t.id}> <Task  txt={t.nom}/></li>
                }) 
            }
        </ul>
        </div>
      
    </div>
  )
}
