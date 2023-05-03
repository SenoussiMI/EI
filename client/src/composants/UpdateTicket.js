import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function UpdateTicket() {
  const [ticket, setTicket] = useState({ title: '', description: '', status: '' });
  const [isFormValid, setIsFormValid] = useState(false); // ajout de l'état "isFormValid" pour gérer l'activation du bouton "Enregistrer"
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/tickets/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.ticket) {
            setTicket(data.ticket);
        }
      });
  }, [id]);

  const handleUpdateTicket = async (event) => {
    event.preventDefault();
    const response = await fetch(`/api/edit/${id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: ticket.title, description: ticket.description, status: ticket.status })
    });
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    // Vérification de la validité du formulaire
    setIsFormValid(ticket.title !== '' && ticket.status !== '');
  }, [ticket]);

  return (
    <div className="App">
      <h1 className="text-center mb-4">Modifier le ticket</h1>
      <form onSubmit={handleUpdateTicket} className="mx-auto w-50">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">title:</label>
          <input type="text" className="form-control" id="title" value={ticket.title} onChange={(event) => setTicket({ ...ticket, title: event.target.value })} />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">description:</label>
          <input type="text" className="form-control" id="description" value={ticket.description} onChange={(event) => setTicket({ ...ticket, description: event.target.value })} />
        </div>
        <div className="mb-3">
          <label htmlFor="status" className="form-label">status:</label>
          <select className="form-select" id="status" value={ticket.status} onChange={(event) => setTicket({ ...ticket, status: event.target.value })}>
          <option value="">-- Sélectionner --</option>
            <option value="2">En cours</option>
            <option value="1">Terminé</option>
          </select>
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary" disabled={!isFormValid}>Enregistrer</button> {/* ajout de la désactivation du bouton */}
          <Link to="/Tickets" className="btn btn-secondary ms-2">Annuler</Link>
        </div>
      </form>
    </div>
  );
}

export default UpdateTicket;
