import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { XlsxService } from './xlsx.service';
import { CreateXlsxDto } from './dto/create-xlsx.dto';
import { UpdateXlsxDto } from './dto/update-xlsx.dto';

@Controller('xlsx')
export class XlsxController {
  constructor(private readonly xlsxService: XlsxService) {}

  @Post()
  create(@Body() createXlsxDto: CreateXlsxDto) {
    return this.xlsxService.create(createXlsxDto);
  }

  @Get()
  findAll() {
    return this.xlsxService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.xlsxService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateXlsxDto: UpdateXlsxDto) {
    return this.xlsxService.update(+id, updateXlsxDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.xlsxService.remove(+id);
  }
}
