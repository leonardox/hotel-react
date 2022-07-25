import React from 'react'
import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { changeIndividual, changeDuplo, changeTriplo, logout } from '../../redux/UserSlice';
import "./Price.css"
import axios from "axios";

const api = "https://hotel-colors.herokuapp.com/valores";

const Price = () => {
  function initialState() {
    return { individual: '', duplo: '', triplo: '' };
  }
  const [values, setValues] = useState(initialState);
  const [data, setData] = useState(initialState);

  useEffect(() => {
    loadValues();
  }, [])

  const loadValues = async () => {
    const response = await axios.get(api);
    // setValues(...response.data);
    setData({ ...data, "individual": response.data.individual, "duplo": response.data.duplo, "triplo": response.data.triplo });
    console.log(data);
    console.log(response.data);
    console.log(data);

  }


  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    // if (values.individual !== '') {
    //   // setData({ ...data, "individual": values.individual });

    //   // axios.put(api, data);
    //   // setTimeout(() => loadValues, 500);
    //   // dispatch(changeIndividual(values.individual));

    // }
    // if (values.duplo !== '') {
    //   dispatch(changeDuplo(values.duplo));
    // }
    // if (values.triplo !== '') {
    //   dispatch(changeTriplo(values.triplo));
    // }
    axios.put(api, data);
    setTimeout(() => dispatch(logout(), 1000));

  };

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value
    });

    setData({
      ...data,
      [name]: value
    });
  }

  return (
    <div className="p">
      <div className="p-bg"></div>
      <div className="p-wrapper">
        <div className="p-right">
          <p className="p-desc">
            <b>Alterar valor das diárias</b>  (Usar virgula e dois zeros) Ex: 130,00.
          </p>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Preço quarto individual" name="individual" onChange={onChange} />
            <input type="text" placeholder="Preço quarto duplo" name="duplo" onChange={onChange} />
            <input type="text" placeholder="Preço quarto triplo" name="triplo" onChange={onChange} />
            <br />
            <button type="submit">Alterar</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Price
