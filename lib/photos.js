export async function getPhotos() {
    // Call an external API endpoint to get METAR.
    const url = 'https://jsonplaceholder.typicode.com/photos'
    const res = await fetch(url)
    const photos = await res.json()

    return {
        photos
    }
}