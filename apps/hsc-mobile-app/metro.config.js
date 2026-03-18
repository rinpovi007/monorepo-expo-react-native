const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const projectRoot = __dirname;
/** Repo root (parent of `apps/`) */
const monorepoRoot = path.resolve(projectRoot, '../..');

const config = getDefaultConfig(projectRoot);

// Watch the whole monorepo so changes in root `node_modules` (and packages/*) are picked up
config.watchFolders = [monorepoRoot];

// Resolve `import 'pkg'` from app first, then from root (where `yarn add` at repo root installs)
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(monorepoRoot, 'node_modules'),
];

module.exports = config;
