const test = require('node:test');
const assert = require('node:assert');
const add = (a, b) => a - b;
test('add', () => { assert.strictEqual(add(2, 3), 5); });
// night14 v33 terms-note check
