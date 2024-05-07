import { Controller, Get, HttpCode, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller()
export class HelloController {

    @Get('/hello')
    index(@Req() request: Request, @Res() response: Response) {
        
        console.log(request.url);
        response.status(200).json({
            message: 'Hey chicos',
        });
    }

    @Get('noencontrado')
    @HttpCode(404)
    paginaNoEncontrada() {
        return '404 - No se encontró nada'
    }

    @Get('error')
    @HttpCode(500)
    errorPage() {
        return 'Error...'
    }
}
