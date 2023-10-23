import express from 'express'
import { addNewContact, getContact, getContactWithID, updateContact,removeContact } from '../controller/contactController.js'

const router = express.Router()

router.get('/', getContact)
router.post('/', addNewContact)
router.get('/:contactId', getContactWithID)
router.put('/:contactId', updateContact)
router.delete('/:contactId',removeContact)

export default router;