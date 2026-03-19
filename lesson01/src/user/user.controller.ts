import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('user')
export class UserController {

    @Get()
    findAll(@Query('role') role?: 'INTERN' | 'EMPLOYEE', @Query('age') age?: number){
        if (role || age) {
            return `This action returns all users with role ${role} and age ${age}`;
        }
        return "This action returns all users";
    }

    @Get(':id')
    findOne(@Param('id')id: string){
        return `This action returns a user with id ${id}`;
    }

    @Post()
    create(@Body() user:{}){
        return `This action creates a user with the following details ${JSON.stringify(user)}`;
    }

    @Patch(':id')
    update(@Param('id') id:string,@Body() updatedUser:{}){
        return `This action updates a user with id ${id} with the following details ${JSON.stringify(updatedUser)}`;
    }

    @Delete(':id')
    remove(@Param('id') id:string){
        return `This action removes a user with id ${id}`;
    }
}
