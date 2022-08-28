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
    .option('-s, --save', 'save password to `passwords.txt` file')
    .option('-nn, --no-numbers', 'generate password without numbers')
    .option('-ns, --no-symbols', 'generate password without symbols')
    .parse();

  const {
    length,
    save,
    numbers,
    symbols,
  }: { length: number; save: boolean; numbers: boolean; symbols: boolean } =
    program.opts();

  const password = passwordService.createPassword(
    length,
    numbers,
    symbols,
  );

  if (save) {
    passwordService.savePassword(password);
    clipboardy.writeSync(password);
    logger.info(chalk.green('Password copied to clipboard'));
  }

  logger.info(`Generated Password: ${chalk.green(password)}`);
};

main().catch(e => logger.error(e));
