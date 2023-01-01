import React from 'react'




export default function Task({txt}) {
  return (
    <div >
        <div>

              <input type="text" value={txt} readOnly/> <input type="button" className='btn btn-danger' value="Supprimer" />
              
        </div>
    </div>
  )
}
