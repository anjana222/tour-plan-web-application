import booking from "../models/booking.js";

export const getAllBooking = async (req, res) => {
  try {
    const bookings = await booking.find();

    res.status(200).json(bookings);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getBooking = async (req, res) => {
  const id = req.params.id;
  try {
    const Booking = await booking.findById(id);
    res.status(200).json(Booking);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const getUserBookings = async (req, res) => {
  const userID = req.params.userId;
  try {
    const bookings = await booking.find({ userId: userID });
    res.status(200).json(bookings);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const createBooking = async (req, res) => {
  const Booking = req.body;

  const newBooking = new booking(Booking);

  try {
    await newBooking.save();

    res.status(201).json(newBooking);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateBooking = async (req, res) => {
  const id = req.params.id;

  const updateBookings = req.body;

  try {
    await booking.findByIdAndUpdate(id, updateBookings);

    res.status(200).send({ status: "Booking updated" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteBooking = async (req, res) => {
  const id = req.params.id;

  try {
    await booking.findByIdAndDelete(id);

    res.status(200).send({ status: "Booking deleted" });
  } catch {
    res.status(404).json({ message: error.message });
  }
};

export const getbookingbyUID = async (req, res) => {
  const id = req.params.id;
  try {
    const bookings = await booking.findOne(id);
    res.status(200).json(bookings);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
