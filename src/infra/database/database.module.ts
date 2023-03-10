import { Module } from '@nestjs/common';
import { NotificationsRepository } from '@application/repositories/notifications-repositoriy';
import { PrismaService } from './prisma/prisma.service';
import { PrismaNotificationsRepository } from './prisma/repositories/prisma-notifications-reposity';

@Module({
    providers: [
        PrismaService,
        {
            provide: NotificationsRepository,
            useClass: PrismaNotificationsRepository,
        },
    ],
    exports: [NotificationsRepository],
})
export class DatabaseModule {}
