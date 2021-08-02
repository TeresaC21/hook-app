import React, { useState, useEffect } from 'react';
import Message from './Message';

import './effects.css';

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: '',
    });

    const {name, email} = formState;

    useEffect(() => {
       console.log('heeey');
    }, []);

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value,
        })
    }

    return (
        <>
            <h2>Effects title</h2>
            <hr/>

            <div className="form-group">
                <input 
                    type="text" 
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <input 
                    type="text" 
                    name="email"
                    className="form-control"
                    placeholder="email@ejemplo.com"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>

            { (name === '123') && <Message /> }
        </>
    )
}

export default SimpleForm
