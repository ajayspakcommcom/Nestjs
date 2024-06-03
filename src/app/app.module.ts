import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SampleModule } from 'src/modules/sample/sample.module';
import { UserModule } from 'src/modules/user/user.module';
import { ProductModule } from 'src/modules/product/product.module';
import { EmployeeModule } from 'src/modules/employee/employee.module';
import { TaskModule } from 'src/modules/task/task.module';
import { MongooseModule } from '@nestjs/mongoose';
import { WorkModule } from 'src/modules/work/work.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DB_URI),
    SampleModule,
    UserModule,
    ProductModule,
    EmployeeModule,
    TaskModule,
    WorkModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
