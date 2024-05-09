import { Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Query, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller()
export class HelloController {

    @Get('/hello')
    index(@Req() request: Request, @Res() response: Response) {
        
        console.log(request.url);
        response.status(200).json({
            message: 'Hey chicos',
        });
    }

    @Get('algonuevo')
    @HttpCode(201)
    algoNuevo() {
        return 'Smth NEW !'
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

    @Get('ticket/:num')
    // ParseIntPipe - function para que me sume el parámetro más el valor indicado.
    obtenerNumero(@Param('num', ParseIntPipe) num: number) {

        console.log(typeof num);
        return num + 11;
    }

    @Get('active/:status')
    @UseGuards(AuthGuard)
    estaElUsuarioActivo(@Param('status', ParseBoolPipe) status: boolean) {

        console.log(typeof status);
        return status;
    }

    @Get('greet')
    @UseGuards(AuthGuard)
    greet(@Query(ValidateuserPipe) query: { name: string, age: number }) {

        console.log(query.name);
        console.log(query.age);
        return `Hey ${query.name}, you are ${query.age + 2} years old`;
    }

}    
