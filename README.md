# Github Batch

#### Because sometimes, you just need to create a whole bunch of issues.

Current version: 0.0.1 ([Changelog](CHANGELOG.md))

Github Batch provides a batch interface for creating issues for Github repos. Currently, it can create issues singly; in the future, it will be able to create them by parsing textfiles, and from uploaded images.

## Requirements

- Node
- NPM

## Installation

For the backend:
- `cd gatekeeper && npm install`

For the frontend:
- `cd gatekeeper && npm install && bower install`

## Development

For the backend: 

- Add your Github API ID and secret to the environment variables `OAUTH_CLIENT_ID` and `OAUTH_CLIENT_SECRET`
- Run `node server.js` in the `gatekeeper` directory.

For the frontend: 
- Run `grunt serve` in the `web` directory.

## Credits

Thanks to the [Prose team](https://github.com/prose) for creating [Gatekeeper](https://github.com/prose/gatekeeper), which made learning the OAuth steps less painful.

## Licence

[GNU GPL v3.0](LICENSE.txt)