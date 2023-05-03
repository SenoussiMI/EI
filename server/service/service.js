const dao = require('../dao/prisma');

async function getAllTickets() {
  try {
    const tickets = await dao.getAllTickets();
    return tickets;
  } catch (err) {
    throw new Error(`Erreur pendant fetching all tickets: ${err.message}`);
  }
}

async function updateTicket(id, title, description, status) {
  if (!id || !title || !description || !status) {
    throw new Error("Paramètre requis manquant pour updating ticket");
  }

  try {
    await dao.updateTicket(id, title, description, status);
  } catch (err) {
    throw new Error(`Erreur pendant updating ticket: ${err.message}`);
  }
}

async function deleteTicket(id) {
  if (!id) {
    throw new Error("Paramètre requis manquant pour deleting ticket");
  }

  try {
    await dao.deleteTicket(id);
  } catch (err) {
    throw new Error(`Erreur pendant deleting ticket: ${err.message}`);
  }
}

async function getTicketById(id) {
    try {
      const ticket = await dao.getTicketById(id);
      if (!ticket) {
        throw new Error(`Ticket with id ${id} not found`);
      }
      return ticket;
    } catch (err) {
      throw new Error(`Erreur pendant getting ticket by id: ${err.message}`);
    }
  }
  

async function addTicket(title, description) {
  if (!title || !description) {
    throw new Error("Paramètre requis manquant pour adding ticket");
  }

  try {
    await dao.addTicket(title, description);
  } catch (err) {
    throw new Error(`Erreur pendant adding ticket: ${err.message}`);
  }
}

module.exports = {
  getAllTickets,
  updateTicket,
  deleteTicket,
  getTicketById,
  addTicket,
};
