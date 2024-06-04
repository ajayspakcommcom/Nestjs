import { Module, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { SampleController } from './sample.controller';
import { SampleService } from './sample.service';

@Module({
    imports: [],
    controllers: [SampleController],
    providers: [SampleService]
})
export class SampleModule implements OnModuleInit, OnModuleDestroy {

    onModuleInit() {
        console.clear();
        console.log('onModuleInit');
    }

    onModuleDestroy() {
        console.clear();
        console.log('onModuleDestroy');
    }
}
