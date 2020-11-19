import React, { useContext } from "react";
//styles
import { H1, H4, P } from "../components/styledComponents/Text";
import {
  InputForm,
  ShortInp,
  Textarea,
  Select,
} from "../components/styledComponents/Form";
import { SendBtn } from "../components/styledComponents/Buttons";
import "../styles/apply.css";
//services
import api from "../services/api";
//context
import { TripsContext } from "../contex/TripsContext";
import { CadidatesContext } from "../contex/CadidatesContext";
//hooks
import { useForm } from "../hooks/useForm";
//components
import NavBar from "../components/NavBar";
//router
import { useHistory } from "react-router-dom";

const Apply = () => {
  const { trips } = useContext(TripsContext);
  const { candidatesArr, setCandidates } = useContext(CadidatesContext);
  const { form, onChange } = useForm({
    name: "",
    country: "",
    age: "",
    profession: "",
    description: "",
    selectTrip: "",
  });

  const history = useHistory();
  const candidateId = Math.floor(Math.random() * 100000) + 5;
  

  const handleInputChange = (event) => {
    const { value, name } = event.target;

    onChange(value, name);
  };

  function handleApply(e) {
    e.preventDefault();

    const body = {
      name: form.name,
      age: form.age,
      applicationText: form.description,
      profession: form.profession,
      country: form.country,
    };

    api
      .post(`/trips/${candidateId}/apply`, body)
      .then((response) => {
        console.log("response", response)
        const newCandidate = {
          id: candidateId,
          name: form.name,
          age: form.age,
          description: form.description,
          profession: form.profession,
          country: form.country,
        };

        const newArr = [...candidatesArr];
        newArr.push(newCandidate);

        setCandidates(newArr);
        alert(response.data.message);

        history.push("/");
      })
      .catch((error) => {
        alert("Please verify our info and try again.");
        console.log(error);
      });
  }

  return (
    <>
      <NavBar />
      <div className="apply-container">
        <H1> Application </H1>
        <P> Enter your info to apply for this trip! </P>

        <form className="apply-form" onSubmit={handleApply}>
          <H4> Name: </H4>
          <InputForm
            value={form.name}
            onChange={handleInputChange}
            name={"name"}
            type={"text"}
            pattern={"[A-Za-z]{3,}"}
            required
          />

          <div className="apply-formDiv">
            <div>
              <H4>Age:</H4>
              <ShortInp
                value={form.age}
                onChange={handleInputChange}
                name={"age"}
                type={"number"}
                min="18"
                required
              />
            </div>
            <div>
              <H4>Trip:</H4>
              <Select
                value={form.selectTrip}
                onChange={handleInputChange}
                required
                name={"selectedTrip"}
              >
                {trips.map((trip) => (
                  <option value={trip.name} key={trip.id}>
                    {trip.name}
                  </option>
                ))}
              </Select>
            </div>
          </div>

          <H4>Country:</H4>
          <InputForm
            value={form.country}
            onChange={handleInputChange}
            name={"country"}
            type={"text"}
            required
          />
          <H4>Profession:</H4>
          <InputForm
            value={form.profession}
            onChange={handleInputChange}
            name={"profession"}
            type={"text"}
            required
          />
          <H4> Why should you go on this trip? </H4>
          <Textarea
            value={form.description}
            onChange={handleInputChange}
            name={"description"}
            required
          />
          <SendBtn> Apply </SendBtn>
        </form>
      </div>
    </>
  );
};

export default Apply;
