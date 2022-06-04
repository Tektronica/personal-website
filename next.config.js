module.exports = {
    env: {
        MONGODB_USER: process.env.MONGODB_USER,
        MONGODB_PASSWORD: process.env.MONGODB_PASSWORD,
        MONGODB_DB: process.env.MONGODB_DB,
    },
    images: {
        domains: [
            'via.placeholder.com',
            'localhost:3000',
            'jr-portfolio.s3.us-west-002.backblazeb2.com',
            'source.unsplash.com',
            'latex.codecogs.com',
            'maps.googleapis.com',
            // ...
        ]
    }
}
