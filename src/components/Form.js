import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Form = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            country: '',
            gender: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().min(3, 'Los nombres deben tener al menos 3 letras').required('El nombre es requerido'),
            country: Yup.string().required('El pais es requerido'),
            gender: Yup.string().required("El genero es requerido")
        }),
        onSubmit: users => {
            try{
                console.log(users)
            }catch(e){
                console.log(e)
            }
        },
    })




    return (
        <form action="" onSubmit={formik.handleSubmit}>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlForm="inputCity">Nombre</label>
                    <input type="text" className="form-control" id="inputCity" vlaue={formik.values.name} onChange={formik.handleChange} />
                </div>
                <div className="form-group col-md-4">
                    <label htmlForm="inputState">Pais</label>
                    <select id="inputState" className="form-control" value={formik.values.country}>
                        <option selected>Mexico</option>
                        <option>Ecuador</option>
                        <option>Canada</option>
                    </select>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value={formik.values.gender} onChange={formik.handleChange} checked />
                    <label className="form-check-label" htmlFor="exampleRadios1">
                        Mujer
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value={formik.values.gender} onChange={formik.handleChange}/>
                    <label className="form-check-label" htmlFor="exampleRadios2">
                        Hombre
                    </label>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Publicar</button>
        </form>
    )
}

export default Form
