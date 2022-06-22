import bcrypt from 'bcrypt';

export const passwordIsCorrect = async (
  plaintext: string,
  passwordHash: string,
) => {
  const isCorrect = await bcrypt.compare(plaintext, passwordHash);

  return isCorrect;
};
