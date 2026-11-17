// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../smoke-support';

describe.concurrent('resource planets', () => {
  smokeCase('planets.list:single', { operation: 'list', path: '/planets' }, 'list', async () => {
    const planet = await client.planets.list({
      limit: 10,
      offset: 0,
    });
  });
  smokeCase(
    'planets.create:required',
    { operation: 'create', path: '/planets' },
    'create: only required params',
    async () => {
      const planet = await client.planets.create({
        name: 'Mars',
      });
    },
  );
  smokeCase(
    'planets.create:all',
    { operation: 'create', path: '/planets' },
    'create: required and optional params',
    async () => {
      const planet = await client.planets.create({
        name: 'Mars',
        description: 'The red planet',
        type: 'terrestrial',
        habitabilityIndex: 0.68,
        physicalProperties: {},
        atmosphere: [{}],
        discoveredAt: '1610-01-07T00:00:00Z',
        image: 'https://cdn.scalar.com/photos/mars.jpg',
        satellites: [
          {
            name: 'Phobos',
          },
        ],
        creator: {},
        tags: ['solar-system', 'rocky', 'explored'],
        successCallbackUrl: 'https://example.com/webhook',
        failureCallbackUrl: 'https://example.com/webhook',
      });
    },
  );
  smokeCase(
    'planets.retrieve:single',
    { operation: 'retrieve', path: '/planets/{planetId}' },
    'retrieve',
    async () => {
      const planet = await client.planets.retrieve(1);
    },
  );
  smokeCase(
    'planets.update:required',
    { operation: 'update', path: '/planets/{planetId}' },
    'update: only required params',
    async () => {
      const planet = await client.planets.update(1, {
        name: 'Mars',
      });
    },
  );
  smokeCase(
    'planets.update:all',
    { operation: 'update', path: '/planets/{planetId}' },
    'update: required and optional params',
    async () => {
      const planet = await client.planets.update(1, {
        name: 'Mars',
        description: 'The red planet',
        type: 'terrestrial',
        habitabilityIndex: 0.68,
        physicalProperties: {},
        atmosphere: [{}],
        discoveredAt: '1610-01-07T00:00:00Z',
        image: 'https://cdn.scalar.com/photos/mars.jpg',
        satellites: [
          {
            name: 'Phobos',
          },
        ],
        creator: {},
        tags: ['solar-system', 'rocky', 'explored'],
        successCallbackUrl: 'https://example.com/webhook',
        failureCallbackUrl: 'https://example.com/webhook',
      });
    },
  );
  smokeCase(
    'planets.delete:single',
    { operation: 'delete', path: '/planets/{planetId}' },
    'delete',
    async () => {
      await client.planets.delete(1);
    },
  );
  smokeCase(
    'planets.uploadImage:required',
    { operation: 'uploadImage', path: '/planets/{planetId}/image' },
    'uploadImage: only required params',
    async () => {
      const planet = await client.planets.uploadImage(1);
    },
  );
  smokeCase(
    'planets.uploadImage:all',
    { operation: 'uploadImage', path: '/planets/{planetId}/image' },
    'uploadImage: required and optional params',
    async () => {
      const planet = await client.planets.uploadImage(1, {
        image: new File(['@mars.jpg'], '@mars.jpg'),
      });
    },
  );
});
