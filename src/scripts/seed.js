const { db } = require('@vercel/postgres');
const {
  paolo
} = require('../data/paoDBData.js');


async function seedPaolo(client) {
  try {
    // Create the "paolo" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS paolo (
        letter VARCHAR(1) NOT NULL UNIQUE,
        words TEXT ARRAY
      );
    `;

    console.log(`Created "paolo" table`);

    // Insert data into the "paolo" table
    const inserted = await Promise.all(
      paolo.map(async (letterWordsMap) => {
        const query = `
          INSERT INTO paolo (letter, words)
          SELECT letter, words FROM json_populate_record(NULL::paolo, $1);
        `;
        return client.query(query, [JSON.stringify(letterWordsMap)]);
      }),
    );

    console.log(`Seeded ${inserted.length}`);

    return {
      createTable,
      inserted: inserted,
    };
  } catch (error) {
    console.error('Error seeding paolo:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();
  await seedPaolo(client);
  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
