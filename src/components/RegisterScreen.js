import React, { useState } from 'react'
import { CreditTypes } from '../infos/CreditTypes';
import { publishCredit } from '../services/publishCredit';
import { Link } from 'react-router-dom';

export const RegisterScreen = () => {
    const [formValues, setFormValues] = useState({
        name: '',
        no_control: '',
        description: '',
        type: 0,
    })
    const { name, no_control, description, type } = formValues;
    const handleChange = (evt) => {
        setFormValues({
            ...formValues,
            [evt.target.name]: evt.target.value,
        });
    }
    const handleSubmit = (evt) => {
        evt.preventDefault();
        if(name.length < 5){
            alert("Nombre debe tener mas de 5 letras");
        }else if(no_control.length < 8){
            alert("Rellene el campo no de control");
        } else if(description.length < 5){
            alert("Descripcion debe tener mas de 5 letras");
        } else if( type === 0){
            alert("Elija un tipo de credito");
        }else{
        (async () => {
            const msg = await publishCredit(formValues);
            alert(msg);
            setFormValues({
                name: '',
                no_control: '',
                description: '',
                type: 0,
            });
        })();
        }
    }
    return (
        <div className="full-wrapper flex-center">
                <form className="Register-Screen__form card" onSubmit={handleSubmit}>
                    <h1 className="title">Creditos complementarios</h1>
                    <span className="Main-Screen__span">
                        <label className="Main-Screen__label" >Nombre </label>
                        <input className="Main-Screen__input" autoComplete="off" value={name} onChange={handleChange} name="name" />
                    </span>
                    <span className="Main-Screen__span">
                        <label className="Main-Screen__label" >No de Control</label>
                        <input className="Main-Screen__input" autoComplete="off" value={no_control} onChange={handleChange} name="no_control" />
                    </span>
                    <span className="Main-Screen__span">
                        <label className="Main-Screen__label">Descripcion</label>
                        <input className="Main-Screen__input" autoComplete="off" value={description} onChange={handleChange} name="description" />
                    </span>
                    <span className="Main-Screen__span">
                        <label className="Main-Screen__label">Tipo</label>
                        <select className="Main-Screen__select" value={type} onChange={handleChange} name="type">
                            <option value="0">Opciones</option>
                            {CreditTypes.map(({ id, name }) => (
                                <option key={id} value={name}>{name}</option>
                            ))}
                        </select>
                    </span>
                    <button className="primary-btn" type="submit">Enviar</button>
                    
                </form>
            </div>
    )
}
