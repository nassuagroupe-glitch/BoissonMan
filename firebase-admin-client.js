// firebase-admin-client.js — lazily initializes the Firebase Admin SDK and
// hands back shared Firestore/Cloud Storage clients.
//
// Only ever required by storage-firestore.js/sessions-firestore.js, which
// are themselves only require()'d when FIRESTORE_PROJECT_ID is set (see
// storage.js/sessions.js) — so firebase-admin (a real npm dependency) is
// never touched on the file-storage/installer path, and never needs to be
// installed there.
let cached = null;

function admin() {
  if (!cached) {
    const firebaseAdmin = require('firebase-admin');
    if (!firebaseAdmin.apps.length) {
      firebaseAdmin.initializeApp({ projectId: process.env.FIRESTORE_PROJECT_ID });
    }
    cached = { firestore: firebaseAdmin.firestore(), bucket: firebaseAdmin.storage().bucket() };
  }
  return cached;
}

module.exports = { admin };
