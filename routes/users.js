var snarkjs = require('snarkjs');

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const hash = await contribute();
  res.send(`Contribution hash: ${hash}`);
});

async function contribute() {
  let newFd = { type: "mem" };
  const hash =
      await snarkjs.zKey.contribute( "data/circuit_0001.zkey", newFd, "contributor #2", "010a020b030d040f0r050g0tkalasdkasd", null);

  console.log(`data length= ${JSON.stringify(newFd.data.length)}`);

  return JSON.stringify(hash, null, 1);

}

module.exports = router;
