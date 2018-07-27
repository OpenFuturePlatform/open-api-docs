---
title: API Reference

language_tabs: # must be one of https://git.io/vQNgJ
  - shell

toc_footers:
  - <a href='https://api.openfuture.io'>OPEN Platform</a>
  - <a href='https://github.com/OpenFuturePlatform'>OPEN Platform on GitHub</a>

includes:
  - user-api
  - openkey-api
  - transaction-api
  - scaffold-api
  - scaffold-templates-api
  - share-holder-api
  - errors
  - scaffold-versions

search: true
---

# Introduction

This API documentation is meant to give OPEN Developers an endpoint how to develop and interact with the OPEN Platform.

These documents specify how to get started with the OPEN Platform, how to create a Scaffold and pricing scheme, and how to integrating this pricing scheme into another application environment.

The point of the OPEN Platform is to make the transition as seamless as possible for the developer which means that many common pricing trends (product id, receipt) will persist.

This API documentation was created with [Slate](https://github.com/lord/slate).

# Getting Started

## Getting a Wallet

An important part of accepting cryptocurrency payments is to get a Wallet and address. If you already have this feel free to skip this section. While the OPEN Wallet is still in development, it is recommended that you use a hardware solution like Trezor or Ledger Nano. In the context of this, it is possible to simply go through [MetaMask](https://metamask.io/).

## Setting up a Account

Before interacting with the OPEN Platform, it is necessary to create an account on the OPEN Platform initially. Once you login in you can create `OpenKeys` through which it is possible to interact with the platform.

# Authentication

> To authorize, use this code:

```shell
curl "api_endpoint_here"
  -H "Authorization: OPEN_KEY"
```

> Make sure to replace `OPEN_KEY` with your API key.

OPEN Platform uses `OpenKeys` to allow access to the API. You can register a new `OpenKey` at your [Account](https://api.openfuture.io).

OPEN Platform expects for the `OpenKey` to be included in all API requests to the server in a header that looks like the following:

`Authorization: OPEN_KEY`

<aside class="notice">
You must replace <code>OPEN_KEY</code> with your personal API key.
</aside>

# Terminology

## Pageable

Target - URL

Indicate - URL marked by `pageble` supports request parameters described below:

Name | Description
---- | -----------
offset | describes the offset for the set of results (only positive integers, default value - `0`)
limit | describes the limit of entities in the result set (only positive integers, default value - `100`)

## Optionals

Target - dto's fields

Indicate - field marked by `optional` can be null

