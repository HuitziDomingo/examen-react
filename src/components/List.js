import React, { useState } from 'react'
import { getFields } from '../api/api'


const List = () => {

    const [fieldsJSON, setFieldsJSON] = useState(getFields)

    const Fields = () => {
        // return fieldsJSON.map(field => (
        //     <p key={field.id}>{field.label}</p>
        // ))
        console.log(fieldsJSON)
    }


    return (
        <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="card-title">Juanito Perez</h5>
                <p className="card-text">Genero</p>
                <p>{Fields}</p>
                <a href="#" className="btn btn-primary">Borrar</a>
            </div>
        </div>
    )
}

export default List
