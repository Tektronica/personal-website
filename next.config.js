module.exports = {
    env: {
        MONGODB_USER: process.env.MONGODB_USER,
        MONGODB_PASSWORD: process.env.MONGODB_PASSWORD,
        MONGODB_DB: process.env.MONGODB_DB,
        BACKBLAZE_BUCKET_ID: process.env.BACKBLAZE_BUCKET_ID,
        BACKBLAZE_KEY_ID: process.env.BACKBLAZE_KEY_ID,
        BACKBLAZE_APP_KEY: process.env.BACKBLAZE_APP_KEY,
        BACKBLAZE_URL: process.env.BACKBLAZE_URL,
    },
    images: {
        domains: [
            'via.placeholder.com',
            'localhost:3000',
            'jr-portfolio.s3.us-west-002.backblazeb2.com',
            'source.unsplash.com',
            'latex.codecogs.com',
            'maps.googleapis.com',
            'f002.backblazeb2.com',
            'photos.app.goo.gl',
            'lh5.googleusercontent.com',
            // ...
        ]
    }
}
