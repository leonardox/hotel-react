import React from 'react'
import "./Board.css"
import Anuncio from "../../img/anuncio.png"
import Aux from "../../img/feijoada.png"

const Board = () => {
  return (
    <div className="b">
        <div className="b-left">
            <div className="b-card-right bg"></div>
            <div className="b-card">
                <img src={Anuncio} alt="" className='b-img' />
            </div>
        </div> 
        <div className="b-right">
            <div className="b-card bg"></div>
            <div className="b-card-right">
                <img src={Aux} alt="" className='b-img' />
            </div>
        </div>
    </div>
  )
}

export default Board
