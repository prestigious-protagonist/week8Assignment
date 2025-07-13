exports.log = (message) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] LOG: ${message}`);
};
