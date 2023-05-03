const express = require('express');
const router = express.Router();
const service = require('../service/service');

router.get('/tickets', async (req, res) => {
  const tickets = await service.getAllTickets();
  res.json({ tickets });
});

router.post('/delete/:id', async (req, res) => {
  const { id } = req.params;
  await service.deleteTicket(id);
  res.redirect('/');
});

router.get('/edit/:id', async (req, res) => {
  const { id } = req.params;
  const ticket = await service.getTicketById(id);
  res.render('edit', { ticket });
});

/*
router.get('/add', async (req, res) => {
  res.render('add');
});
*/

router.post('/add', async (req, res) => {
  const { title, description } = req.body;
  await service.addTicket(title, description);
  res.redirect('/');
});

module.exports = router;
