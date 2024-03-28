import Culture from "../models/culture.js";

export const getAllCultures = async (req, res) => {
    try {
        const culture = await Culture.find();
        res.status(200).json(culture);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const getCulture = async (req, res) => {
    const id = req.params.id;
    try {
        const culture = await Culture.findById(id);
        res.status(200).json(culture);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const createCulture = async (req, res) => {
    const culture = req.body;
    const newCulture = new Culture(culture);
    try {
        await newCulture.save();
        res.status(201).json(newCulture);
    } catch (error) {
        res.json({ message: error });
    }
}

export const updateCulture = async (req, res) => {
    const id = req.params.id;
    const update = req.body;
    try {
        await Culture.findByIdAndUpdate(id, update);
        res.status(200).send({ status: "Culture updated" });
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const deleteCulture = async (req, res) => {
    const id = req.params.id;
    try {
        await Culture.findByIdAndDelete(id);
        res.status(200).send({ status: "Culture deleted" });
    } catch {
        res.status(404).json({ message: error });
    }
}

