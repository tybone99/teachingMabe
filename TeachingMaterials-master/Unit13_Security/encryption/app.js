// Libs
const express = require("express");
const bodyParser = require("body-parser");
// Include the crypto lib for access to encryption functions
const crypto = require("crypto");

// Configure libs
const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

// URL Mappings
app.get("/", function(req, resp) {resp.redirect("/html/encryption.html");});
app.get("/supportedCiphers", getCiphers);
app.post("/encrypt", encryptMessage);
app.post("/decrypt", decryptMessage);

// Run server
const server = app.listen(8085, function() {
	console.log("Running server. :)");
});

function getCiphers(req, resp) {
	resp.status(200).json(crypto.getCiphers());
}

const plainTextEncoding = "utf8";
const cipherTextEncoding = "hex";

function encryptMessage(req, resp) {
    var algo = req.body.algorithm;
    var data = req.body.message;
    var key = req.body.key;
    console.log("trying to encrypt using " + algo + " on " + data);

    // Taken from https://nodejs.org/api/crypto.html#crypto_class_cipher
    var cipher = crypto.createCipher(algo, key);
    var cipherText = cipher.update(data, plainTextEncoding, cipherTextEncoding);
    cipherText += cipher.final(cipherTextEncoding);
    console.log("encrypt result: " + cipherText);
    resp.status(200).json({"result": cipherText});
}

function decryptMessage(req, resp) {
    var algo = req.body.algorithm;
    var data = req.body.message;
    var key = req.body.key;
    console.log("trying to decrypt (" + data + ")...");

    var decipher = crypto.createDecipher(algo, key);
    try
    {
        var plainText = decipher.update(data, cipherTextEncoding, plainTextEncoding);
        plainText += decipher.final(plainTextEncoding);
        resp.status(200).json({"result": plainText});
    }
    catch(error) {
        resp.status(400).json({"result": "Could not decrypt; check your cipher text and password"});
    }
}