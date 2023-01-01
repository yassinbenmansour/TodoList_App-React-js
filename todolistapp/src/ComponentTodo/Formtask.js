import React, { useState } from 'react'
import Task from './Task'
import {v4 as uuidv4} from 'uuid';


export default function Formtask() {

    const [Taches,setTaches] = useState([
        //example delete array no problrm
        {id:uuidv4(),nom:"sport"},
        {id:uuidv4(),nom:"football"},
        {id:uuidv4(),nom:"coding session"}
    ])


    const [Tache , setTache] = useState('');


    const zidtache = () => {

             //GA3 element affecter l Nelements  spread operator
            let Nelements = [...Taches];

            let Nelement = {};


            //line  Nelement sous form d'objet  {id:uuidv4(),nom:"chi haja"},

            Nelement.id = uuidv4();
            Nelement.nom = Tache;


            // zadt objet element f nelemnts li hiya array
            Nelements.push(Nelement);


            setTaches(Nelements);

            setTache("");

        }


        const deleteFunction = (idp) => {

            let ntache = Taches.filter((e)=>{

                return  e.id != idp ;

            })

                setTaches(ntache);

        }

  return (
    <div>

        <h1>Todo list</h1>
        <form>
            <label>Entre une Tache :</label>
            <input type="text" onChange={(el) => {setTache(el.target.value)}} />
            
            <input type="button" value="Ajouter une tache" className='btn btn-primary' onClick={zidtache} />
        </form>

        <br />
        <br />


        <h1>List des Taches :</h1>

        <ul style={{listStyle:'none' }}>

            {
                Taches.map((e) => {
                    return <li key={e.id}>       <Task delf={()=> {deleteFunction(e.id)}} txt={e.nom} /></li>
                })
            }
        </ul>

        
        

    </div>
  )
}
