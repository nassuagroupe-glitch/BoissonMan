// sessions-memory.js — the app's original in-memory session store (token ->
// {tenantId, employeeId, role, createdAt}), moved out of server.js verbatim.
// Used on the file-storage path (local dev, the standalone Windows
// installer): a single Node process is guaranteed there, so an in-memory
// Map needs no persistence — a restart just forces everyone to log back in,
// which the client already tolerates (see app.js: authToken lives in a JS
// variable, never localStorage).
const crypto = require('crypto');

const SESSION_TTL_MS = 12 * 60 * 60 * 1000; // 12h

module.exports = function createMemorySessions() {
  const sessions = new Map();

  async function createSession(tenantId, employee) {
    const token = crypto.randomBytes(32).toString('hex');
    sessions.set(token, {
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
    const session = sessions.get(token);
    if (!session) return null;
    if (Date.now() - session.createdAt > SESSION_TTL_MS) { sessions.delete(token); return null; }
    return { token, tenantId: session.tenantId, employeeId: session.employeeId, role: session.role };
  }
  async function deleteSession(token) {
    sessions.delete(token);
  }

  return { createSession, getSession, deleteSession };
};
