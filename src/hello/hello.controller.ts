import {
  Controller,
  Get,
  HttpCode,
  Req,
  Res,
  Param,
  ParseIntPipe,
  ParseBoolPipe,
  Query,
  UseGuards,
} from '@nestjs/common';
import type { Request, Response } from 'express';
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller('hello')
export class HelloController {
  @Get('/')
  index(@Req() request: Request, @Res() response: Response) {
    console.log(request.url);
    response.status(200).json({ message: 'Hello, World!' });
  }

  @Get('/notfound')
  @HttpCode(404)
  notFoundPage() {
    return 'Error route';
  }

  @Get('ticket/:number')
  getNumber(@Param('number', ParseIntPipe) number: number) {
    return `Your ticket number is ${number}`;
  }

  @Get('active/:status')
  @UseGuards(AuthGuard)
  getStatus(@Param('status', ParseBoolPipe) status: boolean) {
    return `Status is ${status}`;
  }

  @Get('greet')
  @UseGuards(AuthGuard)
  greet(@Query(ValidateuserPipe) query: { name: string; age: string }) {
    return `Hello ${query.name}, you are ${query.age} years old!`;
  }
}
