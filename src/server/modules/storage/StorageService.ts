import fs from 'fs';
import path from 'path';
import { pipeline } from 'stream/promises';
import { MultipartFile } from '@fastify/multipart';
import { Attachment } from './Attachment.entity';

export class StorageService {
  private uploadDir = path.join(process.cwd(), 'public/uploads');

  constructor() {
    // Ensure upload directory exists
    if (!fs.existsSync(this.uploadDir)) {
      fs.mkdirSync(this.uploadDir, { recursive: true });
    }
  }

  async upload(file: MultipartFile): Promise<Attachment> {
    const filename = `${Date.now()}-${file.filename}`;
    const filePath = path.join(this.uploadDir, filename);

    // Stream the file to disk (or S3 in production)
    await pipeline(file.file, fs.createWriteStream(filePath));

    // Get file size
    const stat = fs.statSync(filePath);

    // Return the agnostic Entity
    // Note: In a real app, you'd persist this using the EntityManager
    const attachment = new Attachment(
      filename,
      file.mimetype,
      stat.size,
      filePath
    );

    return attachment;
  }
}
