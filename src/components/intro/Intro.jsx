import React from 'react'
import "./Intro.css"
import Bg from "../../img/bg.png"
import Hotel from "../../img/frente22.png"

const Intro = () => {
  return (
    <div className='i'>
        <div className="i-left">
            <div className="i-left-wrapper">
                <div className="i-name">
                    <h1><span style={{color:'#0000FF'}}>H</span>
                    <span style={{color:'#008000'}}>o</span>
                    <span style={{color:'#FF0000'}}>t</span>
                    <span style={{color:'#FFC222'}}>e</span>
                    <span style={{color:'#990099'}}>l</span>

                    <span style={{color:'#0000FF'}}> C</span>
                    <span style={{color:'#008000'}}>o</span>
                    <span style={{color:'#FF0000'}}>l</span>
                    <span style={{color:'#FFC222'}}>o</span>
                    <span style={{color:'#FF0066'}}>r</span>
                    <span style={{color:'#990099'}}>s</span></h1>
                </div>
                <div className="i-local">
                    <h2>
                    <span style={{color:'#0000FF'}}>M</span>
                    <span style={{color:'#008000'}}>a</span>
                    <span style={{color:'#FF0000'}}>n</span>
                    <span style={{color:'#FFC222'}}>a</span>
                    <span style={{color:'#FF0066'}}>u</span>
                    <span style={{color:'#990099'}}>s</span>
                    </h2>
                </div>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Hospedagem</div>
                        <div className="i-title-item">Passeios</div>
                        <div className="i-title-item">Tranquilidade</div>
                        <div className="i-title-item">Conforto</div>
                        <div className="i-title-item">Atendimento 24h</div>
                    </div>
                </div>
                <div className="i-desc">
                    <p>
                        Localizados a 300 metros do Teatro Amazonas, oferecemos conforto, tranquilidade e boa acomodação
                        em uma excelente localização no centro de Manaus.
                    </p>  
                </div>
                <svg
                    width="75"
                    height="75"
                    viewBox="0 0 75 75"
                    fill="none"
                    stroke="green"
                    className="i-scroll"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <g id="scroll">
                        <path
                        id="Vector"
                        d="M40.5 15L34.5 9L28.5 15"
                        stroke-width="3"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        />
                        <path
                        id="Vector_2"
                        d="M28.5 24L34.5 30L40.5 24"
                        stroke-width="3"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        />
                        <g id="Group">
                        <path
                            id="Vector_3"
                            d="M9 37.5H60"
                            stroke-width="3"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        </g>
                        <path
                        id="Vector_4"
                        d="M34.5 27V9"
                        stroke-width="2.9895"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        />
                        <g id="Group_2">
                        <path
                            id="Vector_5"
                            d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                            stroke-width="3"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        </g>
                    </g>
        </svg>
            </div>
        </div>
        <div className="i-right">
            <img src={Hotel} alt=""className="i-bg"/>
            <img src={Bg} alt="" className="i-img" />
        </div>
    </div>
  )
}

export default Intro
