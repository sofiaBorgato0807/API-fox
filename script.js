let foximg = document.getElementById('imgData');

function data() {
    fetch('https://randomfox.ca/floof/')
        .then(data => {
            return data.json();
        })
        .then(fox => {
            console.log(fox);
            foximg.src = fox.image;
            console.log(fox.image);
        })
}

function download() {
    const imageUrl = foximg.src;

    fetch(imageUrl)
        .then(response => response.blob())
        .then(blob => {

            const blobUrl = URL.createObjectURL(blob);

            const downloadLink = document.createElement('a');
            downloadLink.href = blobUrl;
            downloadLink.download = 'random_fox_image.jpg';

            document.body.appendChild(downloadLink);
            downloadLink.click();

            document.body.removeChild(downloadLink);
            URL.revokeObjectURL(blobUrl);
        });
}
