import fs from 'fs';
import os from 'os';
import path from 'path';

const passwordService = {
  hash: (length: number, chars: string): string => {
    let password = '';

    for (let i = 0; i < length; i += 1) {
      password += chars[Math.floor(Math.random() * chars.length)];
    }

    return password;
  },
  createPassword: (
    length = 40,
    numbers = true,
    symbols = true,
  ): string => {
    const alpha =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const numberRange = '0123456789';
    const symbolRange = "!@#$%^&*()_+=-[]{}|;':,./<>?`~";

    let chars = alpha;

    if (numbers) {
      chars += numberRange;
    }

    if (symbols) {
      chars += symbolRange;
    }

    return passwordService.hash(length, chars);
  },
  savePassword: async (password: string): Promise<void> => {
    fs.open(
      path.join(__dirname, '../../../', 'passwords.txt'),
      'a',
      770,
      (_, id) => {
        fs.write(id, password + os.EOL, null, 'utf-8', () => {
          fs.close(id, () => {
            return null;
          });
        });
      },
    );
  },
};

export default passwordService;
