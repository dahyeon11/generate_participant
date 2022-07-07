import { PartialType } from '@nestjs/mapped-types';
import { CreateXlsxDto } from './create-xlsx.dto';

export class UpdateXlsxDto extends PartialType(CreateXlsxDto) {}
