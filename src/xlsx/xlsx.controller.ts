import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFiles, UseInterceptors, Bind, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerOptions } from 'src/util/multer.options';
import { XlsxService } from './xlsx.service';
import { CreateXlsxDto } from './dto/create-xlsx.dto';
import { UpdateXlsxDto } from './dto/update-xlsx.dto';

@Controller('xlsx')
export class XlsxController {
  constructor(private readonly xlsxService: XlsxService) {}


  @Post()
  @UseInterceptors(FileInterceptor('file', multerOptions))
  @Bind(UploadedFile())
  create(@UploadedFiles() files: File[]) {
    console.log(files)
    const uploadedFiles: Promise<string[]> = this.xlsxService.uploadExcelSheet(files);

    return {
      status: 200,
      message: '파일 업로드를 성공하였습니다.',
      data: {
        files: uploadedFiles,
      },
    };
  }

}
