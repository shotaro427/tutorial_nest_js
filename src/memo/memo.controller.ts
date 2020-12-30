import { Controller, Get, Post, Query } from '@nestjs/common';
import { Memo } from 'src/entities/memo.entity';
import { MemoService } from './memo.service';

@Controller('memo')
export class MemoController {
    constructor(private readonly memoService: MemoService) {}

    @Get()
    async getMemoList() {
        return await this.memoService.getMemoList();
    }

    @Post()
    addMemo(@Query() query: { name: string, description: string }) {
        return this.memoService.addMemo(query.name, query.description);
    }
}
