import { BadRequestException } from "@nestjs/common";
import { existsSync, mkdirSync } from "fs";
import { diskStorage } from "multer";

export const multerOptions = {
  fileFilter: (request, file, callback) => {
    if (file.mimetype === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
        console.log('파일확장자 올바름')
      // 이미지 형식은 jpg, jpeg, png만 허용합니다.
      callback(null, true);
    } else {
        console.log('지원되지 않는 형식 업로드')
      callback(new BadRequestException('지원되지 않는 파일 형식입니다.'), false);
    }
  },

}


