import React from 'react'


export default function Task({txt}) {
  return (
    <div>
       <input type="text" value={txt}  readOnly/>
        <input type="button" value="Supprimer une tache" className='btn btn-danger' />
    </div>
  )
}
