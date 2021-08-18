module.exports = {
    env: {  
        MONGODB_URI: process.env.MONGODB_URI ,
        MONGODB_DB: process.env.MONGODB_DB },
    images: {
        domains: [
            'via.placeholder.com',
            'localhost:3000',
            'jr-portfolio.s3.us-west-002.backblazeb2.com',
            'source.unsplash.com',
            'latex.codecogs.com',
            // ...
        ]
    }
}
