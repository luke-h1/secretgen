const passwordService = {
  hash: (length: number, chars: string): string => {
    let password = '';

    for (let i = 0; i < length; i += 1) {
      password += chars[Math.floor(Math.random() * chars.length)];
    }

    return password;
  },
  createPassword: (length = 40, numbers = true, symbols = true): string => {
    const alpha =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
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
};

export default passwordService;
