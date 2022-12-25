import { Controller, Get, Post, Put, Delete, Request, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { ListData, ModifiedBody } from './types/ListTypes';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('getAll')
  getList(): ListData[] {
    return this.appService.getList();
  }

  @Post('addOne')
  addPersonToList(@Request() req: Request): ListData[] {
    const body: ModifiedBody = req.body;
    return this.appService.addPersonToList(body)
  }

  @Put('edit/:id')
  updatePersonById(@Param() params: { id: string }, @Request() req: Request): string {
    const body: ModifiedBody = req.body;
    return this.appService.editPerson(params.id, body.name)
  }

  @Delete('delete/:id')
  deletePersonById(@Param() params: { id: string }) : string {
    return this.appService.deletePersonById(params.id)
  }
}
