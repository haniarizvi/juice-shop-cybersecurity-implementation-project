const bcrypt = require('bcryptjs');

// Use an async IIFE (Immediately Invoked Function Expression)
(async () => {
    const password = 'StrongP@ss123';
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('Original:', password);
    console.log('Hashed:', hashedPassword);
    
    // Verify password
    const isMatch = await bcrypt.compare(password, hashedPassword);
    console.log('Password match:', isMatch);
})();