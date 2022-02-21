import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../Hooks/useForm";
import {CreateTrip, CardForm, DivButtonsCreateTrip} from './styles'


export default function CreateTripPage() {
  const { form, onChange, cleanFields } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      alert("Você Não esta Logado");
      navigate("/login");
    }
  }, []);

  const preventCreateTrip = (event) => {
    event.preventDefault();

    if (validationDate()) {
      return false;
    }

    createTrip();
    cleanFields();
  };

  //validação de data
  const validationDate = () => {
    const str = form.date;
    const data = new Date(str.split("/").reverse().join("/"));
    const novaData = new Date();
    if (data < novaData) {
      alert("A data Deve ser maior que a data atual");
      return true;
    } else {
      return false;
    }
  };

  const createTrip = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/Roberto-Maia-Vaughan/trips`;
    const jwt = localStorage.getItem("token");
    const auth = { headers: { auth: jwt } };

    axios
      .post(url, form, auth)
      .then((resp) => {
        alert("Viagem Criada Com Sucesso !");
      })
      .catch((err) => {
        alert("Algo Deu Errado, verifique os campos e tente novamente");
        console.log(err);
      });
  };

  const FunctionRouterPages = (url) => {
    navigate(url);
  };

  return (
    <CreateTrip>
      <CardForm>
        <form onSubmit={preventCreateTrip}>
          <h1>Criar Viagem</h1>
          <input
            type="text"
            className="form-control"
            placeholder="Nome"
            name="name"
            value={form.name}
            required
            onChange={onChange}
            pattern={"^.{5,}"}
            title="Minimo 5 Letras"
          />
          <select
            className="form-select"
            aria-label="Default select example"
            name="planet"
            onChange={onChange}
            required
          >
            <option selected>Escolha um Planeta</option>
            <option name="Mercúrio">Mercúrio</option>
            <option name="Vênus">Vênus</option>
            <option name="Terra">Terra</option>
            <option name="Marte">Marte</option>
            <option name="Jupiter">Jupiter</option>
            <option name="Saturno">Saturno</option>
            <option name="Urano">Urano</option>
            <option name="Netuno">Netuno</option>
            <option name="Plutão">Plutão</option>
          </select>
          <input
            type="date"
            className="form-control"
            placeholder="Data"
            required
            min="2022-02-16"
            name="date"
            value={form.date}
            onChange={onChange}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Descrição"
            name="description"
            value={form.description}
            required
            onChange={onChange}
            pattern={"^.{30,}"}
            title="Minimo 30 Letras"
          />
          <input
            type="number"
            min={50}
            className="form-control"
            placeholder="Duração em Dias"
            name="durationInDays"
            value={form.durationInDays}
            required
            onChange={onChange}
          />
          <DivButtonsCreateTrip>
          <button className="btn btn-info" onClick={() => FunctionRouterPages("/admin/trips/list")}>
            Voltar
          </button>
          <button className="btn btn-info" >Criar</button>
          </DivButtonsCreateTrip>
        </form>
      </CardForm>
    </CreateTrip>
  );
}
