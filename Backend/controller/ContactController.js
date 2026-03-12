import prisma from "../config/prisma.js";
import { contactSchema } from "../validations/contactValidation.js";

export const createContact = async (req, res) => {
  try {
    const result = contactSchema.safeParse(req.body);
    if (!result.success) {
      const errorMessage = result.error.issues[0]?.message || "Validation failed";
      return res.status(400).json({
        success: false,
        message: errorMessage
      });
    }

    const contact = await prisma.contact.create({
      data: result.data
    });

    return res.status(201).json({
      success: true,
      message: "Contact submitted successfully",
      data: contact
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message
    });

  }
}

export const getContacts = async (req, res) => {
    try {

        const cotacts = await prisma.contact.findMany();

        res.status(200).json({
            success: true,
            data: cotacts
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    } 
}

