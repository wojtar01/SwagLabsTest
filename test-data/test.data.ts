export const USER_CREDENTIALS = {
  standardUser: {
    username: 'standard_user',
    password: process.env.TEST_PASSWORD || 'secret_sauce',
  },
  lockedOutUser: {
    username: 'locked_out_user',
    password: process.env.TEST_PASSWORD || 'secret_sauce',
  },
  invalidUser: {
    username: 'invalid_user',
    password: 'wrong_password',
  },
};

export const CHECKOUT_DATA = {
  firstName: 'Krzysztof',
  lastName: 'Kowalski',
  postalCode: '00-000',
};

// Zachowanie kompatybilności wstecznej
export const login = USER_CREDENTIALS.standardUser.username;
export const password = USER_CREDENTIALS.standardUser.password;
export const firstName = CHECKOUT_DATA.firstName;
export const lastName = CHECKOUT_DATA.lastName;
export const postalCode = CHECKOUT_DATA.postalCode;