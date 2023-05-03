import { Controller, Get, Post, Body, Patch, Param, Delete , UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { CanchasService } from './canchas.service';
import { CreateCanchaDto } from './dto/create-cancha.dto';
import { UpdateCanchaDto } from './dto/update-cancha.dto';

@Controller('canchas')
export class CanchasController {
  constructor(private readonly canchasService: CanchasService) {}

  @Post()
  @UseInterceptors(FileInterceptor('foto', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, cb) => {
        const fileName = `${Date.now()}-${file.originalname}`;
        cb(null, fileName);
      }
    })
  }))
  async create(@Body() createCanchaDto: CreateCanchaDto, @UploadedFile() file?: Express.Multer.File) {
    if (file) {
      createCanchaDto.fotos = file.filename;
    }
    return this.canchasService.create(createCanchaDto);
  }

  @Patch('fotos/:id')
  @UseInterceptors(FileInterceptor('fotos', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, cb) => {
        const fileName = `${Date.now()}-${file.originalname}`;
        cb(null, fileName);
      }
    })
  }))
  async addFoto(@Param('id') id: string, @UploadedFile() file: Express.Multer.File) {
    return this.canchasService.addFoto(+id, file.filename);
  }



  @Get()
  findAll() {
    return this.canchasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.canchasService.findOne_cancha(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCanchaDto: UpdateCanchaDto) {
    return this.canchasService.update(+id, updateCanchaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.canchasService.remove(+id);
  }
}
