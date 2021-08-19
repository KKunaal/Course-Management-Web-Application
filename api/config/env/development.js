
module.exports = {
    // development configuration options
    /**
     * MongoDB connection URI - string URL tells MongoDB drivers how connect to database instance
     * 
     * usual format:
     * mongodb://username:password@hostname:port/database
     * 
     * but since local instance, can omit authorization
     */
    db: 'mongodb://localhost/comp308-w2018',
    port: 3000
};