import { BaseEntity, PrimaryKey, Property } from '@mikro-orm/core';

export abstract class ApplicationEntity<T extends object> extends BaseEntity<T, 'id'> {
  @PrimaryKey()
  id!: number;

  @Property()
  createdAt: Date = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date();
}
