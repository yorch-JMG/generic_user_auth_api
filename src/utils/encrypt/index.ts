import bcrypt from 'bcrypt';

export const encryptionResult = async (plaintext: string) => {
  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(plaintext, salt);

  return passwordHash;
};
