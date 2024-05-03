import { Controller, Get } from '@nestjs/common';

@Controller('hello')
export class HelloController {

    @Get('/hello')
    index() {
        return 'Hello controller'
    }
}
