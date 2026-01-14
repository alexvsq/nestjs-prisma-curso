import { Module } from '@nestjs/common';
import { TaskModule } from './tasks/task.module';
import { ProjectsModule } from './projects/projects.module';
import { UsersModule } from './users/users.module';
import { HelloController } from './hello/hello.controller';
import { AuthService } from './auth/auth.service';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [TaskModule, ProjectsModule, UsersModule, PaymentsModule],
  controllers: [HelloController],
  providers: [AuthService],
})
export class AppModule {}
