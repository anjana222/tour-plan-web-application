import express from 'express';
import { getBooking, getAllBooking, createBooking, updateBooking, deleteBooking, getbookingbyUID, getUserBookings } from '../controllers/booking.js';

const router = express.Router();

router.get('/:id', getBooking);
router.get("/user/:userId", getUserBookings);
router.post('/create', createBooking);
router.get('/', getAllBooking);
router.put('/update/:id', updateBooking);
router.delete('/delete/:id', deleteBooking);
router.get("/user/:userId", getbookingbyUID);


export default router;