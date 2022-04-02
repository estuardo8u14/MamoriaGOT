import React from "react";
import './Carta.css';
import cartaT from '../../../public/assets/images/cartaT.png';

export default function Carta({ carta, handleEleccion, vuelta, noTocar}) {

    const handleClick = () => {
        if (!noTocar) {
            handleEleccion(carta)
        }
    }

    return(
        <div className="carta">
            <div className={vuelta ? "vuelta" : ""}>
                <img 
                    className="frente" 
                    src={carta.src} 
                    alt="frente carta"
                />
                <img 
                    className="trasero" 
                    src={cartaT}
                    onClick= {handleClick} 
                    alt="trasero carta" 
                />
            </div>
        </div>
    )
}