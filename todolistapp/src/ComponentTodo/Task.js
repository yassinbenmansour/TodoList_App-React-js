import React from 'react'


export default function Task({txt,delf}) {







  return (
    <div>
       <input type="text" value={txt}  readOnly/>
        <input type="button" value="Supprimer une tache" onClick={delf} className='btn btn-danger' />
    </div>
  )
}
