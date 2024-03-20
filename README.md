# Tools

## Setup auth .npmrc

**Environment variable:**

- `GITHUB_TOKEN` - _required_

```
curl -L https://raw.githubusercontent.com/nviethuan/tools/master/npm/setup.js | node
```
```
wget -qO- https://raw.githubusercontent.com/nviethuan/tools/master/npm/setup.js | node
```

**Or:**

- Dependency: [dotenv-cli](https://www.npmjs.com/package/dotenv-cli)

```
curl -L https://raw.githubusercontent.com/nviethuan/tools/master/npm/setup.js | dotenv node
```
```
wget -qO- https://raw.githubusercontent.com/nviethuan/tools/master/npm/setup.js | dotenv node
```
