// Generate a random 32-byte secret key using crypto
import crypto from 'crypto';  // Import Node.js crypto module

// Generate a 32-byte random secret and convert it to hexadecimal format
const secret = crypto.randomBytes(32).toString('hex');

// Output the generated secret key to the console
console.log(secret);
