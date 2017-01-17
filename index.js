const Mitm = require('mitm');
const mitm = Mitm();

mitm.on('request', (req, res) => {
  throw new Error('Network requests forbidden in offline mode');
  res.end();
});
