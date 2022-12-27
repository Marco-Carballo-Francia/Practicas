import React, { useState } from "react";
import { logicaMedio } from './JS';
import style from './Medio.module.css';

export const Medio = () => {
    const [input, setInput] = useState('');

    const handleInputChange = e => {
        setInput(e.target.value);
    };

    // useEffect(() => {
    //     medio(input); 
    // }, [input]);

    const handleSubmit = e => {
        e.preventDefault();
        logicaMedio(input);
        setInput('');
    };

    return (
        <div>
            <form onSubmit={e => handleSubmit(e)} className={style.form}>
                <input 
                    type="text"
                    name='array'
                    value={input}
                    placeholder='Escribir los numero separados de una coma(,) sin espacios...'
                    onChange={e => handleInputChange(e)}
                />
            </form>
            <div className={style.output}>
                { input ? <p>{logicaMedio(input)}</p> : <p>Ningun dato para calcular</p> }
            </div>
        </div>
    )
}