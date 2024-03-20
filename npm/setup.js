const { writeFileSync } = require('fs');
const pkg = require('./package.json');

const [orgName] = pkg.name.split('/');

if (!orgName.includes('@')) {
  console.error('Invalid Org name');
  return;
}

const token = process.env.GITHUB_TOKEN || process.env.GOOGLE_GITHUB_TOKEN;

if (!token) {
  console.info('Token is not provided');
  return;
}

const npmrcPath = '.npmrc';

const template = `${orgName}:registry=https://npm.pkg.github.com

//npm.pkg.github.com/:_authToken=${
  process.env.GITHUB_TOKEN || process.env.GOOGLE_GITHUB_TOKEN || ''
}
always-auth=true
`;

writeFileSync(npmrcPath, template, 'utf-8');
