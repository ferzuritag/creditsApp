import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getCredits } from '../helpers/getCredits';

export const MainScreen = () => {
    const [creditsList, setCreditsList] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    useEffect(() => {
        
        setisLoading(true);
        setTimeout(() =>{
            (async () => {
                const credits = await getCredits();
                setCreditsList(credits);
            })();
            
        setisLoading(false);
        },1000);
        
    }, [])
    return (
        isLoading ? 
        <div className="full-wrapper flex-center">

                <p className="loading">Cargando...</p>

        </div>
        :
        <div className="full-wrapper flex-center">

            <div className="Main-Screen__form-container animate__animated animate__fadeIn card">
                <h1>Créditos</h1>
                <main className="Register-Screen__credits-list">

                    {creditsList.map(({id, no_control, name, description, type }) => (
                        <Link className="Register-Screen__credit-item animate__animated animate__fadeIn" to={`./credits/${id}`}>
                            <div className="Register-Screen__credit-item">
                            <p>No de Control: {no_control}</p>
                            <p>Nombre: {name}</p>
                            <p>Descripción: {description}</p>
                            <p>Tipo: {type}</p>
                            </div>
                        </Link>
                    ))
                    }
                </main>
            </div>

        </div>
    )
}
