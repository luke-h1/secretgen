import passwordService from '../passwordService';

describe('passwordService', () => {
  test('it creates a password', () => {
    const password = passwordService.createPassword(1);
    expect(password).toBeDefined();
    expect(password.length).toBe(1);
  });

  test('it creates a password with no numbers', () => {
    const password = passwordService.createPassword(1, false);
    expect(password).toBeDefined();
    expect(password.length).toBe(1);
    expect(password.match(/[0-9]/)).toBeNull();
  });

  test('it creates a password with no symbols', () => {
    const password = passwordService.createPassword(10);
    expect(password).toBeDefined();
    expect(password.length).toBe(10);
    expect(password.match(/[!@#$%^&*()_+=-[]{}|;':,.<>?`~]/)).toBeNull();
  });

  test('it hashes a password', () => {
    const password = passwordService.hash(20, 'abcdefghijklmnopqrstuvwxyz');
    expect(password).toBeDefined();
    expect(password.length).toBe(20);
  });
});
