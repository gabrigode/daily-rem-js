const fetch = require("node-fetch");

const getBase64Image = async url =>{
    const response = await fetch(url)
    const buffer = await response.buffer()
    const buf = buffer.toString('base64')
    return buf
}

module.exports = getBase64Image