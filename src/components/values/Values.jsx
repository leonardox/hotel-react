import React, { useEffect, useState } from 'react'
import "./Values.css"
import Quartos from "../../img/quartos.jpeg"
import { useSelector } from "react-redux";
import axios from "axios";

const api = "http://localhost:5000/valores";



const Values = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    loadValues();
  }, [])

  const loadValues = async () => {
    const response = await axios.get(api);
    setData(response.data);
    console.log(response.data);
  }
  // const { individual } = useSelector(state => state.user);
  const { duplo } = useSelector(state => state.user);
  const { triplo } = useSelector(state => state.user);
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Quartos} alt="" className='a-img' />
        </div>
      </div>
      <div className="a-right">

        <h1 className="a-title"><span style={{ color: '#0000FF' }}>D</span>
          <span style={{ color: '#008000' }}>i</span>
          <span style={{ color: '#FF0000' }}>á</span>
          <span style={{ color: '#FFC222' }}>r</span>
          <span style={{ color: '#990099' }}>i</span>
          <span style={{ color: '#0000FF' }}>a</span>
          <span style={{ color: '#FF0000' }}>s</span>
        </h1>

        <p className="a-sub">
          Suíte Individual
        </p>
        <p className="a-sub">
          <span style={{ color: '#FFC222' }}>R</span><span style={{ color: '#FF0000' }}>$   </span>
          {data.individual}
        </p>
        <br />
        <p className="a-sub-2">
          Suíte Dupla
        </p>
        <p className="a-sub-2">
          <span style={{ color: '#008000' }}>R</span><span style={{ color: '#0000FF' }}>$   </span>
          {data.duplo}
        </p>
        <br />
        <p className="a-sub-3">
          Suíte Tripla
        </p>
        <p className="a-sub-3">
          <span style={{ color: '#990099' }}>R</span><span style={{ color: '#008000' }}>$   </span>
          {data.triplo}
        </p>
        <br />
        <h1 className="t-obs">*Dispomos de acomodação para até 6 pessoas, favor consultar disponibilidade e valores</h1>
      </div>
    </div>
  )
}

export default Values
