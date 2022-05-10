import React from 'react'
import "./About.css"
import Frente from "../../img/about.jpeg"
import Award from "../../img/award.png";


const About = () => {
  return (
    <div className="a">
      <div className="a-left">
          <div className="a-card bg"></div>
          <div className="a-card">
              <img src={Frente} alt="" className='a-img' />
          </div>
      </div>
      <div className="a-right">
          
          <h1 className="a-title"><span style={{color:'#0000FF'}}>S</span>
                    <span style={{color:'#008000'}}>o</span>
                    <span style={{color:'#FF0000'}}>b</span>
                    <span style={{color:'#FFC222'}}>r</span>
                    <span style={{color:'#990099'}}>e</span>
                    <span style={{color:'#0000FF'}}> n</span>
                    <span style={{color:'#008000'}}>ó</span>
                    <span style={{color:'#FF0000'}}>s</span>
                    </h1>
        
          <p className="a-sub">
            O hotel oferece recepção 24 horas, wifi grátis, serviço de quarto e um delicioso café da manhã.
          </p>
          <p className="a-desc">
           Todas as nossas suítes são temáticas, climatizadas, possuiem guarda-roupa,
           smart TV, frigobar, mesa de estudos, chuveiro quente, cama box e muito mais.
            </p>
            <br/>
        <p className="a-desc-2">
           Os pontos de interesse famosos próximos ao Hotel Colors Manaus incluem o Centro Cultural Palácio da Justiça,
           Largo de São Sebastião e o Mercado Municipal Adolpho Lisboa.
        </p>
        <br/>
        <p className="a-desc-3">
           O aeroporto mais próximo é o Aeroporto Internacional Eduardo Gomes,
           a 11 km do hotel.
        </p>

        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Avaliações reais <a target='blank' href='https://www.booking.com/hotel/br/colors-manaus-manaus.pt-br.html'>booking.com</a></h4>
            <p className="a-award-desc">
            Casais particularmente gostam da localização — eles deram nota 9,8 para viagem a dois.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
