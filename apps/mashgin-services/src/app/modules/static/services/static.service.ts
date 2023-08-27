import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import * as fs from 'fs/promises';

@Injectable()
export class StaticService {
  private readonly logger = new Logger(StaticService.name);

  async getImageById(imageId: string) {
    try {
      const image = await fs.readFile(
        `${__dirname}/assets/images/${imageId}.jpg`
      );

      return image;
    } catch {
      const e = new NotFoundException('Image not found');
      this.logger.error(e.message);
      throw e;
    }
  }
}
