import express from 'express';
import { getGuide, getAllGuides, createGuide, updateGuide, deleteGuide } from '../controllers/guides.js';

const router = express.Router();

router.get('/:id', getGuide);
router.post('/create', createGuide);
router.get('/', getAllGuides);
router.put('/update/:id', updateGuide);
router.delete('/delete/:id', deleteGuide);


export default router;