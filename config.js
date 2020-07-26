module.exports = {
    api: {
        port: process.env.API_PORT || 3000,
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'notasecret!'
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'remotemysql.com',
        user: process.env.MYSQL_USER || 'PxGvpwFxp5',
        password: process.env.MYSQL_PASSWORD || 'gZxbwnTKSL',
        database: process.env.MYSQL_DB || 'PxGvpwFxp5',
    }
}