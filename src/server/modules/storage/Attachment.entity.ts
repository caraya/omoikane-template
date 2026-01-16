import { Entity, Property } from '@mikro-orm/core';
import { ApplicationEntity } from '../../common/ApplicationEntity';

@Entity()
export class Attachment extends ApplicationEntity<Attachment> {
  @Property()
  filename!: string;

  @Property()
  mimeType!: string;

  @Property()
  size!: number;

  @Property()
  path!: string; // The S3 key or local file path

  @Property()
  url!: string; // Publicly accessible URL

  constructor(filename: string, mimeType: string, size: number, path: string) {
    super();
    this.filename = filename;
    this.mimeType = mimeType;
    this.size = size;
    this.path = path;
    // In a real app, URL generation depends on the driver (S3 signed URL vs static)
    this.url = `/uploads/${filename}`;
  }
}
