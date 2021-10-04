import React, { useEffect, useState } from 'react'
import { getCredits } from '../helpers/getCredits';

export const MainScreen = () => {
    const [creditsList, setCreditsList] = useState([]);

    useEffect(() => {
        (async () => {
            const credits = await getCredits();
            setCreditsList(credits);
        })();
    }, [])
    return (
        <div className="Register-Screen__main">
            <main className="Register-Screen__credits-list">
                <h1>Créditos</h1>
                {creditsList.map(({no_control, name, description, type }) => (
                        <div className = "Register-Screen__credit-item">
                            <p>No de Control: {no_control}</p>
                            <p>Nombre: {name}</p>
                            <p>Descripcion {description}</p>
                            <p>Tipo: {type}</p>
                        </div>
                    ))
                }
            </main>
        </div>
    )
}
