import React from "react";
import {useEffect, useState} from "react";
import Carta from "../Carta/Carta";
import "./Memoria.css"




const imagenesCartas = [
  {"src": '/assets/images/carta_0.png', pareja: false},
  {"src": '/assets/images/carta1.png', pareja: false},
  {"src": '/assets/images/carta2.png', pareja: false},
  {"src": '/assets/images/carta3.png', pareja: false},
  {"src": '/assets/images/carta4.png', pareja: false},
  {"src": '/assets/images/carta5.png', pareja: false}
]

function Memoria() {
  const [cartas, setCartas] = useState([])
  const [turnos, setTurnos] = useState(0)
  const [eleccionUno, setEleccionUno] = useState(null)
  const [eleccionDos, setEleccionDos] = useState(null)
  const [noTocar, setNoTocar] = useState(false)

  //Revolver cartas
  const revolverCartas = () => {
    const revolvidasCartas = [...imagenesCartas, ...imagenesCartas]
      .sort(() => Math.random() - 0.5)
      .map((carta) => ({ ...carta, id: Math.random() }))
    
    setEleccionUno(null)
    setEleccionDos(null)
    setCartas(revolvidasCartas)
    setTurnos(0)
  }

  //handle de eleccion
  const handleEleccion = (carta) => {
    eleccionUno ? setEleccionDos(carta) : setEleccionUno(carta)
  }

  useEffect(() => {
    if (eleccionUno && eleccionDos) {
      setNoTocar(true)
      if (eleccionUno.src === eleccionDos.src) {
        setCartas(prevCartas => {
          return prevCartas.map(carta => {
            if (carta.src === eleccionUno.src){
              return {...carta, pareja: true}
            }else {
              return carta
            }
          })
        })
        resetTurno()
      } else {
        setTimeout(() => resetTurno(), 1500)
      }
    }
  }, [eleccionUno, eleccionDos])

  const resetTurno = () => {
    setEleccionUno(null)
    setEleccionDos(null)
    setTurnos(prevTruno => prevTruno + 1 )
    setNoTocar(false)
  }

  useEffect(() => {
    revolverCartas()
  }, [])

  return (
    <div className="Memoria">
      <h1>Memoria</h1>
      <h2>GAME OF THRONES</h2>
      <button onClick={revolverCartas}>Empezar</button>
      <div className="grid-cartas">
        {cartas.map(carta =>(
          <Carta 
            key = {carta.id} 
            carta={carta}
            handleEleccion={handleEleccion}
            vuelta={carta === eleccionUno || carta === eleccionDos || carta.pareja}      
            noTocar={noTocar}
          />
        ))}
      </div>
      <h3>
        Turnos: {turnos}
      </h3>
      <h5>Imagenes dibujadas y juego creado por Estuardo Ureta 17010</h5>
    </div>
  );
}
export default Memoria;
