const fetch = require("node-fetch");
const url = "https://danbooru.donmai.us/posts/random.json?tags=rem_(re:zero)+rating:safe"

const getImage = async url => {
    try {
        const response = await fetch(url)
        const json =  await response.json()
        return json
        
    }
    catch(error){
        console.log(error)
    }
}

module.exports = getImage(url)

