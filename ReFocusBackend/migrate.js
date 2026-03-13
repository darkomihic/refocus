require('dotenv').config();
const { randomUUID } = require('crypto');
const mysql = require('mysql2/promise');
const { sequelize, Keychain } = require('./models');

async function migrate() {
  // 1. Create the database if it doesn't exist
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
  });

  await connection.query(
    `CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`
  );
  console.log(`Database "${process.env.DB_NAME}" ready.`);
  await connection.end();

  // 2. Sync all models (creates tables if they don't exist, alters if needed)
  await sequelize.sync({ alter: true });
  console.log('Tables synced.');

  // 3. Insert 20 unclaimed QR codes (userid = null)
  const existing = await Keychain.count();
  if (existing >= 20) {
    console.log(`Skipping seed — ${existing} keychains already in DB.`);
  } else {
    const toInsert = 20 - existing;
    const keychains = Array.from({ length: toInsert }, () => ({
      keychainqr: randomUUID(),
      userid: null,
    }));
    await Keychain.bulkCreate(keychains);
    console.log(`Inserted ${toInsert} QR codes.`);
  }

  await sequelize.close();
  console.log('Migration complete.');
}

migrate().catch((err) => {
  console.error('Migration failed:', err.message);
  process.exit(1);
});
