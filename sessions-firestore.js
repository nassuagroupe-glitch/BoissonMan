// sessions-firestore.js — Firestore-backed sessions for the hosted Firebase
// deployment. Cloud Functions can scale to zero between requests
// (minInstances: 0, kept specifically for real cost savings — see the
// migration plan); an in-memory session Map would silently log every
// employee out on every cold start, which would defeat that. One document
// per token in a `sessions` collection instead, same TTL/shape as
// sessions-memory.js.
//
// NOT YET EXERCISED AGAINST A REAL FIREBASE PROJECT — see the note at the
// top of storage-firestore.js; same status applies here.
const crypto = require('crypto');
const { admin } = require('./firebase-admin-client');

const SESSION_TTL_MS = 12 * 60 * 60 * 1000; // 12h — same policy as sessions-memory.js

module.exports = function createFirestoreSessions() {
  const { firestore } = admin();
  const col = firestore.collection('sessions');

  async function createSession(tenantId, employee) {
    const token = crypto.randomBytes(32).toString('hex');
    await col.doc(token).set({
      tenantId,
      employeeId: employee.id,
      role: employee.role === 'Gérant' ? 'manager' : 'cashier',
      createdAt: Date.now(),
    });
    return token;
  }
  async function getSession(req) {
    const header = req.headers['authorization'] || '';
    const match = header.match(/^Bearer (.+)$/);
    if (!match) return null;
    const token = match[1];
    const snap = await col.doc(token).get();
    if (!snap.exists) return null;
    const session = snap.data();
    if (Date.now() - session.createdAt > SESSION_TTL_MS) { await col.doc(token).delete(); return null; }
    return { token, tenantId: session.tenantId, employeeId: session.employeeId, role: session.role };
  }
  async function deleteSession(token) {
    await col.doc(token).delete();
  }

  return { createSession, getSession, deleteSession };
};
