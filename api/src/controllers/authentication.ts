import bcrypt from 'bcryptjs';
import { catchErrors, InvalidCredentialsError } from 'errors';
import { signToken } from 'utils/authToken';
import createAccount from 'database/createGuestAccount';
import { User } from 'entities';

export const createGuestAccount = catchErrors(async (_req, res) => {
  const user = await createAccount();
  res.respond({
    authToken: signToken({ sub: user.id }),
  });
});

export const login = catchErrors(async (req, res) => {
  const { email, password, rememberMe } = req.body;

  if (!email || !password) {
    throw new InvalidCredentialsError('Email and password are required');
  }

  const user = await User.findOne({ where: { email } });

  if (!user || !user.passwordHash) {
    throw new InvalidCredentialsError('Invalid email or password');
  }

  const isPasswordValid = await bcrypt.compare(password, user.passwordHash);

  if (!isPasswordValid) {
    throw new InvalidCredentialsError('Invalid email or password');
  }

  const tokenExpiration = rememberMe ? '180 days' : '7 days';

  res.respond({
    authToken: signToken({ sub: user.id }, { expiresIn: tokenExpiration }),
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      avatarUrl: user.avatarUrl,
    },
  });
});
