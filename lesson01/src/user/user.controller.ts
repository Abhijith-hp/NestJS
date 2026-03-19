import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService){}

    @Get()
    findAll(@Query('role') role?: 'INTERN' | 'EMPLOYEE', @Query('age') age?: number){
        if(age){
            return this.userService.findAll(role,+age);
        }
      return this.userService.findAll(role);
    }

    @Get(':id')
    findOne(@Param('id',ParseIntPipe)id: number){
        return this.userService.findOne(id);
    }

    @Post()
    create(@Body() user:{name:string, email:string,age:number, role:'INTERN' | 'EMPLOYEE'}){
         return this.userService.create(user);   
    }

    @Patch(':id')
    update(@Param('id') id:string,@Body() updatedUser:{name:string, email:string,age:number, role:'INTERN' | 'EMPLOYEE'}){
        return this.userService.update(+id,updatedUser);
    }

    @Delete(':id')
    remove(@Param('id',ParseIntPipe) id:number){
        return this.userService.remove(id)
    }
}
