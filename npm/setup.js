const { writeFileSync } = require('fs');
const pkg = require('./package.json');

const [orgName] = pkg.name.split('/');

if (!orgName.includes('@')) {
  console.error('Invalid Org name');
  process.exit(0);
}

const token = process.env.GITHUB_TOKEN;

if (!token) {
  console.info('Token is not provided');
  process.exit(0);
}

const npmrcPath = '.npmrc';

const template = `${orgName}:registry=https://npm.pkg.github.com

//npm.pkg.github.com/:_authToken=${token || ''}
always-auth=true
`;

writeFileSync(npmrcPath, template, 'utf-8');
