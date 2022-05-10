import React from 'react'
import "./Tours.css"
import Day from "../../img/day.png"
import TDay from "../../img/tday.png"
import Tour2 from "../../img/tour2.png"
import Tour2img from "../../img/tour2i.png"
import TTour3 from "../../img/ttour3.png"
import Tour3 from "../../img/tour3.png"
// import Anuncio from "../../img/anuncio.jpeg"
// import Aux from "../../img/feijoada.png"

const Tours = () => {
  return (
    <div className="t">
        <div className="t-top">
        <div><h1><span style={{color:'#0000FF'}}>P</span>
                    <span style={{color:'#008000'}}>a</span>
                    <span style={{color:'#FF0000'}}>s</span>
                    <span style={{color:'#FFC222'}}>s</span>
                    <span style={{color:'#990099'}}>e</span>
                    <span style={{color:'#0000FF'}}>i</span>
                    <span style={{color:'#008000'}}>o</span>
                    <span style={{color:'#FF0000'}}>s</span>
                    </h1></div>
        </div>
        <div className="t-tour-bottom">
            <div className="t-bottom-left">
                <div className="t-card bg"></div>
                <div className='t-card-title'>
                    <img src={TDay} alt="" className='t-img' />
                </div>
                <div className="t-card">
                    <img src={Day} alt="" className='t-img' />
                </div>
            </div>
            <div className="t-bottom-right">
                
                <h1 className="t-title">O que inclui:</h1>
                <ul>
                    <li>Transporte (hotel - Passeio - Hotel)</li>
                    <li>Taxa de visita</li>
                    <li>Almoço regional</li>
                    <li>Água mineral durante o percurso no barco</li>
                    <li>Guia bilingue</li>
                </ul>
            <br/>
            <h1 className="t-title">Saída:</h1>
            <ul>
                <li>Do hotel a partir das 08H20</li>
                <li>Terça-feira, Quarta-feira, Quinta-feira, Sábado e Domingo</li>
            </ul>
            <br/>
            <h1 className="t-title">Retorno:</h1>
            <ul>
                <li>Chegada prevista para às 16H30</li>
            </ul>
            <br/>
                <h1 className="t-obs">*Valores a consultar</h1>
            </div>
        </div>

        <div className="t-tour-bottom">
            <div className="t-bottom-left">
                <div className="t-card bg-2"></div>
                <div className='t-card-title-2'>
                    <img src={Tour2} alt="" className='t-img' />
                </div>
                <div className="t-card-2">
                    <img src={Tour2img} alt="" className='t-img' />
                </div>
            </div>
            <div className="t-bottom-right-2">
                
                <h1 className="t-title">O que inclui:</h1>
                <ul>
                    <li>Transporte (hotel - Passeio - Hotel)</li>
                    <li>Taxa de visita</li>
                    <li>Almoço regional</li>
                    <li>Água mineral durante o percurso no barco</li>
                    <li>Guia bilingue</li>
                </ul>
            <br/>
            <h1 className="t-title">Saída:</h1>
            <ul>
                <li>Do hotel a partir das 07H20</li>
                <li>Terça-feira, Quarta-feira, Quinta-feira, Sábado e Domingo</li>
            </ul>
            <br/>
            <h1 className="t-title">Retorno:</h1>
            <ul>
                <li>Ás 16H o grupo retorna a Manaus, chegada prevista para às 18H30</li>
            </ul>
            <br/>
                <h1 className="t-obs">*Valores a consultar</h1>
            </div>
        </div>

        <div className="t-tour-bottom">
            <div className="t-bottom-left">
                <div className="t-card bg-3"></div>
                <div className='t-card-title-3'>
                    <img src={TTour3} alt="" className='t-img' />
                </div>
                <div className="t-card-3">
                    <img src={Tour3} alt="" className='t-img' />
                </div>
            </div>
            <div className="t-bottom-right-3">
                
                <h1 className="t-title">O que inclui:</h1>
                <ul>
                    <li>Transporte (hotel - Passeio - Hotel)</li>
                    <li>Taxa de visita</li>
                    <li>Almoço regional</li>
                    <li>Água mineral durante o percurso no barco</li>
                    <li>Guia bilingue</li>
                </ul>
            <br/>
            <h1 className="t-title">Saída:</h1>
            <ul>
                <li>Do hotel a partir das 07H20</li>
                <li>Terça-feira, Quarta-feira, Quinta-feira, Sábado e Domingo</li>
            </ul>
            <br/>
            <h1 className="t-title">Retorno:</h1>
            <ul>
                <li>Ás 16H o grupo retorna a Manaus, chegada prevista para às 18H30</li>
            </ul>
            <br/>
                <h1 className="t-obs">*Valores a consultar</h1>
            </div>
        </div>
    </div>
  )
}

export default Tours
