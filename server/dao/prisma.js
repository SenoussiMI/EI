//const { Prisma } = require('@prisma/client') marche pas

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient({
    datasources: {
      db: {
        url: "postgresql://admin:root@localhost:5432/recette",
      },
    },
  });

async function getAllTickets() {
  const tickets = await prisma.ticket.findMany();
  return tickets;
}

async function getTicketById(id) {
    const ticket = await prisma.ticket.findUnique({
      where: {
        id: parseInt(id)
      }
    })
  
    return ticket;
  }

async function addTicket(title, description) {
  const ticket = await prisma.ticket.create({
    data: {
      title,
      description,
      status: 'à faire'
    }
  });
  return ticket;
}

async function updateTicket(id, title, description, status) {
  const ticket = await prisma.ticket.update({
    where: { id: parseInt(id) },
    data: {
      title,
      description,
      status
    }
  });
  return ticket;
}

async function deleteTicket(id) {
  const ticket = await prisma.ticket.delete({
    where: { id: parseInt(id), status: { not: 'terminé' } }
  });
  return ticket;
}

module.exports = {
  getAllTickets,
  getTicketById,
  addTicket,
  updateTicket,
  deleteTicket,
};
