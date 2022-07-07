import { Injectable } from '@nestjs/common';
import { CreateXlsxDto } from './dto/create-xlsx.dto';
import { UpdateXlsxDto } from './dto/update-xlsx.dto';
import { multerOptions } from 'src/util/multer.options';
import * as XLSX from 'xlsx'

@Injectable()
export class XlsxService {

  async uploadExcelSheet(file: any): Promise<string[]> {
    const generatedFiles: string[] = [];

    console.log(file.buffer, '123')
    generatedFiles.push(file.name);

    const workbook = await XLSX.read(file.buffer)

    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const rows = await XLSX.utils.sheet_to_json(sheet, {
    defval: null,
    range: 'B8:K65535',
    header: ['id', 'rand', 'name', 'gender', 'phone', 'dob', 'mobileID', 'watchSN', 'show', 'isControl']
    });

    console.log(rows)

    return file.originalname;
  }
}
