// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../smoke-support';

describe.concurrent('resource celestialBodies', () => {
  smokeCase(
    'celestialBodies.create:required',
    { operation: 'create', path: '/celestial-bodies' },
    'create: only required params',
    async () => {
      const celestialBody = await client.celestialBodies.create({
        name: 'Mars',
      });
    },
  );
  smokeCase(
    'celestialBodies.create:all',
    { operation: 'create', path: '/celestial-bodies' },
    'create: required and optional params',
    async () => {
      const celestialBody = await client.celestialBodies.create({
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
});
