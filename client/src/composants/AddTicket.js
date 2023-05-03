import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AddTicket() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [isFormValid, setIsFormValid] = useState(false); // état du formulaire

  const handleNomChange = (event) => {
    setTitle(event.target.value);
  };

  const handlePrenomChange = (event) => {
    setDescription(event.target.value);
  };

  const handleCiviliteChange = (event) => {
    setStatus(event.target.value);
  };

  const handleAddContact = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description, status })
    });
    const data = await response.json();
    // Do something with the data, e.g. redirect to the contacts page
  };

  // Vérifier si tous les champs sont remplis
  useEffect(() => {
    if (title && status) { // Vérifier si title et status sont remplis
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [title, status]);
  

  return (
    <div className="App">
      <h1>Ajouter un ticket</h1>

      <form onSubmit={handleAddContact} className="mx-auto w-50">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">title:</label>
          <input type="text" className="form-control" id="title" value={title} onChange={handleNomChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">description:</label>
          <input type="text" className="form-control" id="description" value={description} onChange={handlePrenomChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="status" className="form-label">status:</label>
          <select className="form-select" id="status" value={status} onChange={handleCiviliteChange}>
            <option value="">-- Sélectionner --</option>
            <option value="EN_COURS">En cours</option>
            <option value="TERMINE">Terminé</option>
          </select>
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary" disabled={!isFormValid}>Ajouter</button>
          <Link to="/Tickets" className="btn btn-secondary ms-2">Annuler</Link>
        </div>
      </form>
    </div>
  );
}

export default AddTicket;
