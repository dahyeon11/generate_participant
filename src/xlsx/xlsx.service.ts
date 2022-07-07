import { Injectable } from '@nestjs/common';
import { CreateXlsxDto } from './dto/create-xlsx.dto';
import { UpdateXlsxDto } from './dto/update-xlsx.dto';

@Injectable()
export class XlsxService {
  create(createXlsxDto: CreateXlsxDto) {
    return 'This action adds a new xlsx';
  }

  findAll() {
    return `This action returns all xlsx`;
  }

  findOne(id: number) {
    return `This action returns a #${id} xlsx`;
  }

  update(id: number, updateXlsxDto: UpdateXlsxDto) {
    return `This action updates a #${id} xlsx`;
  }

  remove(id: number) {
    return `This action removes a #${id} xlsx`;
  }
}
