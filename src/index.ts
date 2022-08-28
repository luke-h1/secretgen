import chalk from 'chalk';
import clipboardy from 'clipboardy';
import { program } from 'commander';
import pkg from '../package.json';
import passwordService from './services/passwordService';
import logger from './utils/logger';

const main = async () => {
  program.version(pkg.version).description(pkg.description);

  program
    .option('-l, --length <number>', 'length of password', '50')
    .option('-nn, --no-numbers', 'generate password without numbers')
    .option('-ns, --no-symbols', 'generate password without symbols')
    .parse();

  const {
    length,
    numbers,
    symbols,
  }: { length: number; save: boolean; numbers: boolean; symbols: boolean } =
    program.opts();

  const password = passwordService.createPassword(length, numbers, symbols);

  clipboardy.writeSync(password);
  logger.info(
    `Generated Password: ${chalk.green(password)}. Copied to clipboard.`,
  );
};

main().catch(e => logger.error(e));
