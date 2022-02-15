import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const RequestTrips = (aluno) => {

    useEffect(() => {
        renderListTrips(aluno);
      }, []);


  const [allTrips, setAllTrips] = useState([]);

  //   const aluno = "Roberto-Maia-Vaughan";

  const renderListTrips = (aluno) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trips`;

    axios
      .get(url)
      .then((response) => {
        setAllTrips(response.data.trips);
      })
      .catch((err) => {
        console.log(err);
      });
  };    

  return allTrips;

};
