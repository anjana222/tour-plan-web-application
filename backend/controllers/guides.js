import guide from "../models/guides.js";

export const getAllGuides =  async (req, res) => {
    try {
        const Guide = await guide.find();

        res.status(200).json(Guide);

    } catch (error) {
        res.status(404).json( {message: error.message} );
    }
}

export const getGuide = async (req, res) => {
    const id = req.params.id;
    try {
        const Guide = await guide.findById(id);
        res.status(200).json(Guide);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const createGuide =  async (req, res) => {
    const Guide = req.body;

    const newGuide = new guide(Guide);

    try {
        await newGuide.save();

        res.status(201).json(newGuide);


    } catch (error) {
        res.status(409).json(  {message: error.message} );
    }
}

export const updateGuide = async (req, res) => {

    const id = req.params.id;

    const updateGuide = req.body;

    try {
        await guide.findByIdAndUpdate(id, updateGuide);

        res.status(200).send({status: "Huide updated"});
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const deleteGuide = async (req, res) => {

    const id = req.params.id;

    try {
        await guide.findByIdAndDelete(id);

        res.status(200).send({status: "Guide deleted"});

    }catch{
        res.status(404).json({ message: error.message });
    }
}