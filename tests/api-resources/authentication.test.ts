// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../smoke-support';

describe.concurrent('resource authentication', () => {
  smokeCase(
    'authentication.createUser:single',
    { operation: 'createUser', path: '/user/signup' },
    'createUser',
    async () => {
      const user = await client.authentication.createUser({
        name: 'Marc',
        email: 'marc@scalar.com',
        password: 'i-love-scalar',
      });
    },
  );
  smokeCase(
    'authentication.createToken:single',
    { operation: 'createToken', path: '/auth/token' },
    'createToken',
    async () => {
      const authentication = await client.authentication.createToken({
        email: 'marc@scalar.com',
        password: 'i-love-scalar',
      });
    },
  );
  smokeCase('authentication.listMe:single', { operation: 'listMe', path: '/me' }, 'listMe', async () => {
    const user = await client.authentication.listMe();
  });
});
