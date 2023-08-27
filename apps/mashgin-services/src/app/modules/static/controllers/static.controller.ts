import { Controller, Get, Header, Param, Response } from '@nestjs/common';
import { StaticService } from '../services/static.service';

@Controller('statics')
export class StaticController {
  constructor(private staticService: StaticService) {}

  @Get('/images/:id')
  @Header('Content-Type', 'image/jpeg')
  async getImageById(@Param('id') id: string, @Response() res) {
    const image = await this.staticService.getImageById(id);

    res.send(image);
  }
}
