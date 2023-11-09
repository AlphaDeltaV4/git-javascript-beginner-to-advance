function nearestTo100(value1, value2) {
    // Calculate the absolute differences between each value and 100
    const diff1 = Math.abs(value1 - 100);
    const diff2 = Math.abs(value2 - 100);
  
    // Compare the absolute differences to determine which value is closer
    if (diff1 < diff2) {
      return value1;
    } else {
      return value2;
    }
  }
  
  // Example usage:
  const result1 = nearestTo100(90, 89);
  console.log("Output 1:", result1); // Output - 90
  
  const result2 = nearestTo100(-90, -89);
  console.log("Output 2:", result2); // Output - -89
  