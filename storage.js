// storage.js — picks the tenant-storage backend.
//
// Defaults to the original file-based adapter (local dev, and the
// standalone Windows installer, which sets no env vars at all and ships
// with zero npm dependencies); switches to Firestore only when
// FIRESTORE_PROJECT_ID is set, so firebase-admin (a real npm dependency) is
// never require()'d — and therefore never needs to be installed — on the
// file-storage path.
module.exports = function createStorage(deps) {
  if (process.env.FIRESTORE_PROJECT_ID) {
    return require('./storage-firestore')(deps);
  }
  return require('./storage-file')(deps);
};
