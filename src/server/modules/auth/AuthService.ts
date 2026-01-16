import argon2 from 'argon2';
import { EntityManager } from '@mikro-orm/postgresql';
import { User } from '../user/User.entity';

export class AuthService {
  constructor(private em: EntityManager) {}

  async register(email: string, password: string): Promise<User> {
    const passwordHash = await argon2.hash(password);
    const user = this.em.create(User, {
      email,
      passwordHash,
    });
    await this.em.flush();
    return user;
  }

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.em.findOne(User, { email });
    if (!user) {
      return null;
    }

    const valid = await argon2.verify(user.passwordHash, password);
    if (!valid) {
      return null;
    }

    return user;
  }
}
