import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getCreditByID } from "../helpers/getCreditByID";
import { CreditTypes } from "../infos/CreditTypes";
import { delecteCredit, deleteCredit } from "../services/deleteCredit";
import { editCredit } from "../services/editCredit";

export const EditCredit = ({ history }) => {
  const { creditID } = useParams();
  const [formValues, setFormValues] = useState({
    id: creditID,
    name: "default",
    no_control: "default",
    description: "default",
    type: "default",
  });
  const { name, no_control, description, type } = formValues;
  const handleChange = (evt) => {
    setFormValues({
      ...formValues,
      [evt.target.name]: evt.target.value,
    });
  };
  const handleDelete = async () => {
    const msg = await deleteCredit(creditID);
    alert(msg);
    history.push("/credits");
  };
  const handleEdit = async () => {
    const msg = await editCredit(formValues);
    alert(msg);
    history.push("/credits");
  };

  useEffect(() => {
    (async () => {
      const credit = await getCreditByID(creditID);
      if (credit) {
        setFormValues({
          ...formValues,
          name: credit.name.stringValue,
          no_control: credit.no_control.stringValue,
          description: credit.description.stringValue,
          type: credit.type.stringValue,
        });
      }
      console.log(credit);
    })();
  }, []);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (name.length < 5) {
      alert("Nombre debe tener mas de 5 letras");
    } else if (no_control.length < 8) {
      alert("Rellene el campo no de control");
    } else if (description.length < 5) {
      alert("Descripcion debe tener mas de 5 letras");
    } else if (type === 0) {
      alert("Elija un tipo de credito");
    } else {
      (async () => {})();
    }
  };
  return (
    <div className="full-wrapper flex-center">
      <form className="Register-Screen__form card" onSubmit={handleSubmit}>
        <h1 className="title">Creditos complementarios</h1>
        <span className="Main-Screen__span">
          <label className="Main-Screen__label">Nombre </label>
          <input
            className="Main-Screen__input"
            autoComplete="off"
            value={name}
            onChange={handleChange}
            name="name"
          />
        </span>
        <span className="Main-Screen__span">
          <label className="Main-Screen__label">No de Control</label>
          <input
            className="Main-Screen__input"
            autoComplete="off"
            value={no_control}
            onChange={handleChange}
            name="no_control"
          />
        </span>
        <span className="Main-Screen__span">
          <label className="Main-Screen__label">Descripcion</label>
          <input
            className="Main-Screen__input"
            autoComplete="off"
            value={description}
            onChange={handleChange}
            name="description"
          />
        </span>
        <span className="Main-Screen__span">
          <label className="Main-Screen__label">Tipo</label>
          <select
            className="Main-Screen__select"
            value={type}
            onChange={handleChange}
            name="type"
          >
            <option value="0">Opciones</option>
            {CreditTypes.map(({ id, name }) => (
              <option key={id} value={name}>
                {name}
              </option>
            ))}
          </select>
        </span>
        <span className="button-group">
          <button className="primary-btn" type="button" onClick={handleEdit}>
            Enviar
          </button>
          <button className="danger-btn" type="button" onClick={handleDelete}>
            Eliminar
          </button>
        </span>
      </form>
    </div>
  );
};
