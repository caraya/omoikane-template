import { Entity, Property, Unique } from '@mikro-orm/core';
import { ApplicationEntity } from '../../common/ApplicationEntity';

@Entity()
export class User extends ApplicationEntity<User> {
  @Property()
  @Unique()
  email!: string;

  @Property({ hidden: true })
  passwordHash!: string;

  @Property({ nullable: true })
  githubId?: string;

  @Property({ nullable: true })
  googleId?: string;
}
