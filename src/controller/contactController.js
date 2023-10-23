import mongoose from "mongoose";
import Contact from "../models/contactModel.js";

// Retrieve a list of contacts
export const getContact = async (req, res) => {

  try {
    const contact = await Contact.find({});
    return res.status(200).json(contact)
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}

// Add a new contact
export const addNewContact = async (req, res) => {
  try {
    // Create a new Contact instance with the request body data
    const newContact = new Contact(req.body);

    // Save the new contact to the database
    const savedContact = await newContact.save();

    // Send the saved contact as a JSON response
    res.json(savedContact);
  } catch (error) {
    // Handle errors by sending a 500 Internal Server Error response
    res.status(500).send({ message: error.message })
  }
};

export const getContactWithID = async (req, res) => {
  try {
    // Extract the 'contactId' parameter from the request params
    const { contactId } = req.params;

    // Use 'contactId' to find a contact by its ID
    const contact = await Contact.findById(contactId);

    // Check if a contact was found
    if (!contact) {
      // If no contact is found, return a 404 Not Found response
      return res.status(404).send({ message: 'Contact not found' });
    }

    // If a contact is found, return it in the response
    return res.status(200).send({ contact });
  } catch (error) {
    // Handle any errors by sending a 500 Internal Server Error response
    res.status(500).send({ message: error.message });
  }
};

export const updateContact = async (req, res) => {
  try {
    const { contactId } = req.params;
    
    // Use await to get the updated contact
    const updatedContact = await Contact.findByIdAndUpdate(contactId, req.body, { new: true });
    
    // Check if the contact was found and updated
    if (!updatedContact) {
      return res.status(404).json({ message: 'No Contact Found' });
    }

    return res.status(200).json({ message: "Contact Updated successfully", contact: updatedContact });

  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const removeContact = async(req,res) =>{
  try {
    const { contactId } = req.params;
    
    // Use await to get the updated contact
    const updatedContact = await Contact.findOneAndRemove(contactId);
    
    // Check if the contact was found and updated
    if (!updatedContact) {
      return res.status(404).json({ message: 'No Contact Found' });
    }

    return res.status(200).json({ message: "Contact deleted successfully"});

  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}