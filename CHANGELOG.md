# Changelog

## [0.3.2](https://github.com/scalar/galaxy-node/compare/v0.3.1...v0.3.2) (2026-09-15)


### ⚠ BREAKING CHANGES

* **api:** 3 breaking changes to the SDK surface.
    - Property `planet.habitabilityIndex` type changed from `number<float>` to `number<float>`.
    - Property `planet.physicalProperties` type changed from `object` to `object`.
    - Property `planet.atmosphere` type changed from `Array<object>` to `Array<object>`.

### Features

* **api:** update property planet.habitabilityIndex (+3 more changes) ([8d0ff7e](https://github.com/scalar/galaxy-node/commit/8d0ff7e2aa84607726ac72c6e05e27419a47ce09))


### Chores

* **api:** regenerate SDK ([d50b8ba](https://github.com/scalar/galaxy-node/commit/d50b8ba84a657eee4bd3b5c7fe70850ddd9af2f0))
* **api:** regenerate SDK ([bd18a0c](https://github.com/scalar/galaxy-node/commit/bd18a0c1eb75a759ada7bbab974213e6f72ef31b))
* **api:** update generated SDK content ([9d6483a](https://github.com/scalar/galaxy-node/commit/9d6483a04e40d1c4bccf8ef8265b3b58adf41dd1))
* release 0.3.2 ([8a2c784](https://github.com/scalar/galaxy-node/commit/8a2c78415c023eb0b8730eebc5809fcac9016def))
* release 0.3.2 ([93b41c4](https://github.com/scalar/galaxy-node/commit/93b41c48a9779d32d249322604bfa6a99d37c2b0))

## [0.3.1](https://github.com/scalar/galaxy-node/compare/v0.3.0...v0.3.1) (2026-08-28)


### Chores

* **api:** update generated SDK content ([5af8282](https://github.com/scalar/galaxy-node/commit/5af8282e55b971313b4a3688b66ec3ec499c0659))

## [0.3.0](https://github.com/scalar/galaxy-node/compare/v0.2.2...v0.3.0) (2026-08-28)


### ⚠ BREAKING CHANGES

* **api:** Removed environment `responds_with_your_request_data`.
* **api:** 3 breaking changes to the SDK surface.
    - Removed operation `planets.uploadImage` (`POST /planets/{planetId}/image`).
    - Removed schema `UploadImageResponseHeaders`.
    - Removed schema `UploadImageStatus400ResponseHeaders`.

### Features

* **api:** remove operation planets.uploadImage (+6 more changes) ([ecceda0](https://github.com/scalar/galaxy-node/commit/ecceda0f90fbcb7ae6326853f987a1587f9c2519))
* **api:** update SDK surface (2 changes) ([cf5bbda](https://github.com/scalar/galaxy-node/commit/cf5bbdabb2ed1743e82e76bb21245754bb16bfe2))

## [0.2.2](https://github.com/scalar/galaxy-node/compare/v0.2.1...v0.2.2) (2026-08-20)


### Chores

* **api:** regenerate SDK ([488a4b6](https://github.com/scalar/galaxy-node/commit/488a4b622a02c1dc1536aae4c5cb0660c794ee38))
* **api:** regenerate SDK ([c12ca4d](https://github.com/scalar/galaxy-node/commit/c12ca4da7664da500e997e5b93e01dca90ee09f6))
* **api:** regenerate SDK ([37e09c8](https://github.com/scalar/galaxy-node/commit/37e09c8bae0ab5f8b76a24790b341fa7f6289291))
* **api:** update generated SDK content ([1176697](https://github.com/scalar/galaxy-node/commit/117669772cb9fb98061ec628b5e057c04f620d5e))

## [0.2.1](https://github.com/scalar/galaxy-node/compare/v0.2.0...v0.2.1) (2026-08-07)


### Chores

* **api:** regenerate SDK ([b315220](https://github.com/scalar/galaxy-node/commit/b315220deae5b9640af843cff489b54f157695ad))
* **api:** regenerate SDK ([0709333](https://github.com/scalar/galaxy-node/commit/070933362597ed8696ac11aa9f683f5641e50ff0))

## [0.2.0](https://github.com/scalar/galaxy-node/compare/v0.1.0...v0.2.0) (2026-08-04)


### Features

* **api:** initial SDK generation ([6ccf0f2](https://github.com/scalar/galaxy-node/commit/6ccf0f2c34f44197aaf231aeee01dcd552f7a225))


### Chores

* **api:** update generated SDK content ([f47e9c9](https://github.com/scalar/galaxy-node/commit/f47e9c95de56c418406af93eedcbba289a216d2c))
