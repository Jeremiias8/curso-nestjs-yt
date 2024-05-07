import {
    IsString,
    MinLength
} from 'class-validator'

export class CreateTaskDto {

    @IsString()
    @MinLength(1)
    titulo: string

    @IsString()
    @MinLength(1)
    descripcion: string
}
