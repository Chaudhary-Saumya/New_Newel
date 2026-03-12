import express from 'express';
import { validate } from '../validations/validation.js';
import { contactSchema } from '../validations/contactValidation.js';
import { createContact, getContacts } from '../controller/ContactController.js';
import { contactLimiter } from '../utils/RateLimiter.js';

const router = express.Router();

// Apply rate limit only to contact form
router.post('/addContact', contactLimiter, validate(contactSchema), createContact);

router.get('/getContact', getContacts);

export default router;