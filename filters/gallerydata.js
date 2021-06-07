const sizeOf = require('image-size');


module.exports = function (gallery) {
    let dataGallery = [];
    gallery.forEach((image) => {
        let imageObj;
        if (process.env.ELEVENTY_ENV == 'production') {
            imageObj = {
                w: sizeOf("./src/" + image.url).width,
                h: sizeOf("./src/" + image.url).height,
                src: "https://dimitriadis.netlify.com/" + image.url,
                title: image.title
            };
        } else {
            imageObj = {
                w: sizeOf("./src/" + image.url).width,
                h: sizeOf("./src/" + image.url).height,
                src: "http://localhost:8080/" + image.url,
                title: image.title
            };
        }
        dataGallery.push(imageObj);
    });
    return JSON.stringify(dataGallery);
}