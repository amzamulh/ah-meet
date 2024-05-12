export const ahToggle = (value, cb) => {
    const newValue = !value; // Toggle the value
    
    if (cb) {
      cb(newValue); // Call the callback with the new value
    }
    
    return newValue; // Return the new value
  };
