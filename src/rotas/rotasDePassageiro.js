import Express from 'express';

const router = Express.Router();

router.get('/', (req, res) => {
  res.send('Get passageiro.');
});

router.post('/', (req, res) => {
  res.send('Post passageiro!');
});
router.put('/:id', (req, res) => {
  res.send('Put passageiro!');
});
router.delete('/:id', (req, res) => {
  res.send('Delete passageiro!');
});

export default router;