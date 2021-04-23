const Twit = require('twit');
const getImage = require("./getImage")
const getBase64Image = require("./getBase64Image");

const Twitter = new Twit({
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
    access_token: process.env.access_token,
    access_token_secret: process.env.access_token_secret
})

let imageInfo
const url = "https://danbooru.donmai.us/posts/random.json?tags=rem_(re:zero)+rating:safe"

function getPost() {
    Promise.all([getImage(url)])
        .then((data) => {
            imageInfo = data[0]
            console.log(imageInfo)
            Promise.all([getBase64Image(imageInfo.large_file_url)])
                .then((imageData) => {
                    postToTwitter(imageData[0])
                }
            )
        }
    )
}

function postToTwitter(imageData) {
    console.log("ImageInfo", imageInfo)

    Twitter.post('media/upload', { media_data: imageData }, function (err, data, response) {

        const mediaIdStr = data.media_id_string
        const meta_params = { media_id: mediaIdStr }

        Twitter.post('media/metadata/create', meta_params, function () {
            try {
                const params = { status: `Artist: ${imageInfo[0].tag_string_artist} \nSource: ${imageInfo[0].source}`, media_ids: [mediaIdStr] }

                Twitter.post('statuses/update', params, function (err, data, response) {
                    console.log("New post", data)
                })
            }
            catch (error) {
                console.log("A error has occurred while posting")
            }
        })
    })
}

setInterval(function () {
    getPost()
}, 3600000);

