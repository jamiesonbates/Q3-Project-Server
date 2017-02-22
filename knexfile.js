'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/q3_project_dev'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
