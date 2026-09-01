// sessions.js — picks the session-store backend, same selection rule and
// same reasoning as storage.js: file/memory by default (installer-safe,
// zero npm deps), Firestore only when FIRESTORE_PROJECT_ID is set.
module.exports = function createSessionStore() {
  if (process.env.FIRESTORE_PROJECT_ID) {
    return require('./sessions-firestore')();
  }
  return require('./sessions-memory')();
};
