# Tools

## Setup .npmrc

**Environment variable:**

- `GITHUB_TOKEN` - _required_

```
curl -L https://raw.githubusercontent.com/nviethuan/tools/master/npm/setup.js | node

# OR

wget -qO- https://raw.githubusercontent.com/nviethuan/tools/master/npm/setup.js | node
```

or

```
# dependency: dotenv-cli (npm i -g dotenv-cli)
curl -L https://raw.githubusercontent.com/nviethuan/tools/master/npm/setup.js | dotenv node

# OR

wget -qO- https://raw.githubusercontent.com/nviethuan/tools/master/npm/setup.js | dotenv node
```
