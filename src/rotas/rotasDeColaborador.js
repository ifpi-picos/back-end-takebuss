import Express from 'express';

const router = Express.Router();

router.get('/', (req, res) => {
  res.send('Get colaborador.');
});

router.post('/', (req, res) => {
  res.send('Post colaborador!');
});
router.put('/:id', (req, res) => {
  res.send('Put colaborador!');
});
router.delete('/:id', (req, res) => {
  res.send('Delete colaborador!');
});

export default router;