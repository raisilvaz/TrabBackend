module.exports = {
    development: {
        client: "pg", 
        connection: {
            host:process.env.PGHOST,
            database: process.env.PGDATABASE,
            user: process.env.PGUSER,
            password: process.env.PGPASSWORD,
            ssl:true,
        }
    }
};
 