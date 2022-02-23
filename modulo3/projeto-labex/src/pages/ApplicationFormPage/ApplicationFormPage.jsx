import { useNavigate } from "react-router-dom";
import { RequestTrips } from "../../Hooks/RequestTrips";
import React, { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import axios from "axios";
import useForm from "../../Hooks/useForm";
import {DivAppForm, AppForm, DivButtons} from './styles'


export default function ApplicationFormPage() {
  const { form, onChange, cleanFields } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
  });

  const navigate = useNavigate();
  const [allTrips, functionReturn] = RequestTrips("Roberto-Maia-Vaughan");
  const [value, setValue] = useState("");
  const [selectTrips, setSelectTrips] = useState("");

  const register = (event) => {
    event.preventDefault();
    submitApplication();
    cleanFields();
  };

  const handlerOnChange = (e) => {
    setSelectTrips(e.target.value);
  };

  const submitApplication = () => {
    const aluno = "Roberto-Maia-Vaughan";
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trips/${selectTrips}/apply`;

    const body = { ...form, country: value.label };

    console.log(body);

    axios
      .post(url, body)
      .then((resp) => {
        alert("Candidatura Realizada com Sucesso !");
        console.log(resp);
        setSelectTrips("");
        setValue("");
      })
      .catch((err) => {
        alert(
          "Algo Inesperado Aconteceu, Verifique os campos e tente novamente"
        );
        console.log(err);
      });
  };

  //função dos selects de paises
  const CountrySelector = () => {
    const options = useMemo(() => countryList().getData(), []);

    const changeHandler = (value) => {
      setValue(value);
    };

    return (
      <Select
        options={options}
        value={value}
        onChange={changeHandler}
        required
      />
    );
  };

  //função de rotas
  const FunctionRouterPages = (url) => {
    navigate(url);
  };

  return (
    <DivAppForm>
      <AppForm>
        <h3>Inscreva-se para uma viagem</h3>
        <form onSubmit={register}>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={handlerOnChange}
          >
            <option selected>Escolha uma Viagem</option>
            {allTrips.map((item) => {
              return (
                <option value={item.id} name={item.name} key={item.id}>
                  {item.name}
                </option>
              );
            })}
          </select>
          <input
            type="text"
            className="form-control"
            placeholder="Nome"
            name={"name"}
            required
            pattern={"^.{3,}"}
            title="Minimo 3 Letras"
            value={form.name}
            onChange={onChange}
          />
          <input
            type="Number"
            min={"18"}
            className="form-control"
            placeholder="Idade"
            value={form.age}
            onChange={onChange}
            name={"age"}
            required
          />
          <input
            type="text"
            className="form-control"
            placeholder="Texto De Candidatura"
            value={form.applicationText}
            onChange={onChange}
            name={"applicationText"}
            pattern={"^.{30,}"}
            title="Minimo 30 Caracters"
            required
          />
          <input
            type="text"
            className="form-control"
            placeholder="Profissão"
            value={form.profession}
            onChange={onChange}
            name={"profession"}
            pattern={"^.{10,}"}
            title="Minimo 10 Caracters"
            required
          />
          {CountrySelector()}
          <DivButtons>
            <button
              className="btn btn-info"
              onClick={() => FunctionRouterPages("/trips/list")}
            >
              Voltar
            </button>
            <button className="btn btn-info">Enviar</button>
          </DivButtons>
        </form>
      </AppForm>
    </DivAppForm>
  );
}
