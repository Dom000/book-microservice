import { PrismaClient } from '@prisma/client'
import { Service } from 'typedi';

@Service()
export class BookPrismaService extends PrismaClient {}






