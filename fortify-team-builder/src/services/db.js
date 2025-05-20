import { openDB } from 'idb';

const DB_NAME = 'fortify_team_builder';
const DB_VERSION = 1;
const STORE_NAME = 'teams';

const dbPromise = openDB(DB_NAME, DB_VERSION, {
  upgrade(db) {
    db.createObjectStore(STORE_NAME, { keyPath: 'id' });
  },
});

export const addTeam = async (team) => {
  const db = await dbPromise;
  await db.put(STORE_NAME, team);
};

export const getTeam = async (id) => {
  const db = await dbPromise;
  return await db.get(STORE_NAME, id);
};

export const getAllTeams = async () => {
  const db = await dbPromise;
  return await db.getAll(STORE_NAME);
};

export const deleteTeam = async (id) => {
  const db = await dbPromise;
  await db.delete(STORE_NAME, id);
};