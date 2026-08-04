// File generated from our OpenAPI spec by Scalar. See README.md for details.

import type { ScalarGalaxy } from './client';

export abstract class APIResource {
  protected _client: ScalarGalaxy;

  constructor(client: ScalarGalaxy) {
    this._client = client;
  }
}
