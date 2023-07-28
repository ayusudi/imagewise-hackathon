import { createPool } from 'mysql2';
const { DB_HOST, DB_USER, DB_PORT, DB_PASSWORD, DB_NAME, DB_SSLVERSION } = process.env

export const pool = createPool({
  host: DB_HOST || 'localhost',
  port: Number(DB_PORT) || 4000,
  user: DB_USER || 'root',
  password: DB_PASSWORD || '',
  database: DB_NAME || 'test',
  ssl: {
    minVersion: DB_SSLVERSION || '',
    rejectUnauthorized: true
  }
})

export default async function excuteQuery(query: string, cb: Function) {
  pool.query(query, function (err, rows) {
    if (err) {
      cb(err)
    } else {
      cb(null, rows)
    }
  });
}