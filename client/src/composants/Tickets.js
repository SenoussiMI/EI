import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';

function Tickets() {
  const [backendData, setBackendData] = useState({ tickets : [] });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("/api/tickets");
    const data = await response.json();
    setBackendData(data);
  };

  const handleDeleteTicket = async (id) => {
    const response = await fetch(`/api/delete/${id}`, { method: 'POST' });
    const data = await response.json();
    setBackendData(data);
  };

  return (
    <>
    <h2 className="text-center mb-4">Liste des Tickets</h2>
    <ListGroup as="ol" numbered className="mx-auto w-75">
      {backendData.tickets.map((ticket, i) => (
       <ListGroup.Item key={i} as="li" className="d-flex justify-content-between align-items-center">
       <div className="ms-2 me-auto">
         <div className="fw-bold">{ticket.title} {ticket.description}</div>
       </div>
       <div>
         {ticket.status === 'A_FAIRE' || ticket.status === 'EN_COURS' ? (
           <a className="btn btn-danger me-2" onClick={() => handleDeleteTicket(ticket.id)}>Supprimer</a>
         ) : null}
         <Link to={`/${ticket.id}/Modifier`} className="btn btn-primary">Modifier</Link>
       </div>
     </ListGroup.Item>
      ))}
    </ListGroup>
    <section className="text-center mt-4">
      <Link to={`/ajouter`} className="btn btn-primary">Ajouter un Ticket</Link>
    </section>
  </>
  );
}

export default Tickets;
