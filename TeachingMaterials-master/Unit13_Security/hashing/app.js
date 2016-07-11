// Libs
const express = require("express");
const bodyParser = require("body-parser");
// Include the crypto lib for access to hashing functions
const crypto = require("crypto");

// Configure libs
const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

// URL Mappings
app.get("/", function(req, resp) {resp.redirect("/html/hash.html");});
app.get("/supportedHashes", getHashAlgos);
app.post("/hash", hashData);
app.post("/saltyHash", hashDataWithSalt);
app.post("/passwordHash", hashPassword);
app.post("/passwordVerify", verifyPassword);

// Run server
const server = app.listen(8085, function() {
    console.log("Running server. :)");
});

const dataEncoding = "utf8";
const hashEncoding = "hex";

function getHashAlgos(req, resp) {
    // Node's supported hashing algorithms
    resp.status(200).json(crypto.getHashes());
}

function hashData(req, resp) {
    var data = req.body.message;
    var algo = req.body.algorithm;
    var key = req.body.key;

    var hasher = crypto.createHmac(algo, key);
    hasher.update(data);
    var result = hasher.digest(hashEncoding);

    resp.status(200).json({
        result: result
    });
}

function hashDataWithSalt(req, resp) {
    var data = req.body.message;
    var algo = req.body.algorithm;
    var key = req.body.key;

    var hasher = crypto.createHmac(algo, key);

    var salt = generateSalt();
    hasher.update(salt + data);
    var result = hasher.digest(hashEncoding);

    resp.status(200).json({
        result: result,
        salt: salt
    });
}

function hashPassword(req, resp) {
    var password = req.body.password;
    var algo = req.body.algorithm;
    var iter = req.body.iterations;
    var outLen = 128;//req.body.outputLength;
    var salt = generateSalt();

    crypto.pbkdf2(password, salt, iter, outLen, algo, function (error, key) {
        if (error) {
            resp.status(500).json({
                result: "There was an error; no key generated",
                salt: "(none)"
            });
        } else {
            resp.status(200).json({
                result: key.toString("hex"),
                salt: salt
            });
        }
    });
}

function verifyPassword(req, resp) {
    var hash = req.body.hash;
    var salt = req.body.salt;
    var password = req.body.password;
}

function generateSalt() {
    return crypto.randomBytes(128).toString("hex");
}