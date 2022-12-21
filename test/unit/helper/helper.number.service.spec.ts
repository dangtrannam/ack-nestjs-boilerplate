import { ConfigModule } from '@nestjs/config';
import { Test } from '@nestjs/testing';
import { HelperModule } from 'src/common/helper/helper.module';
import { HelperNumberService } from 'src/common/helper/services/helper.number.service';
import configs from 'src/configs';

describe('HelperNumberService', () => {
    let helperNumberService: HelperNumberService;

    beforeAll(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [
                ConfigModule.forRoot({
                    load: configs,
                    isGlobal: true,
                    cache: true,
                    envFilePath: ['.env'],
                    expandVariables: true,
                }),
                HelperModule,
            ],
        }).compile();

        helperNumberService =
            moduleRef.get<HelperNumberService>(HelperNumberService);
    });

    it('should be defined', () => {
        expect(helperNumberService).toBeDefined();
    });

    describe('check', () => {
        it('should be called', async () => {
            const test = jest.spyOn(helperNumberService, 'check');

            helperNumberService.check('111');
            expect(test).toHaveBeenCalledWith('111');
        });

        it('should be success', async () => {
            const result = helperNumberService.check('111');
            jest.spyOn(helperNumberService, 'check').mockImplementation(
                () => result
            );

            expect(helperNumberService.check('111')).toBe(result);
        });
    });

    describe('create', () => {
        it('should be called', async () => {
            const test = jest.spyOn(helperNumberService, 'create');

            helperNumberService.create('111');
            expect(test).toHaveBeenCalledWith('111');
        });

        it('should be success', async () => {
            const result = helperNumberService.create('111');
            jest.spyOn(helperNumberService, 'create').mockImplementation(
                () => result
            );

            expect(helperNumberService.create('111')).toBe(result);
        });
    });

    describe('random', () => {
        it('should be called', async () => {
            const test = jest.spyOn(helperNumberService, 'random');

            helperNumberService.random(10);
            expect(test).toHaveBeenCalledWith(10);
        });

        it('should be success', async () => {
            const result = helperNumberService.random(10);
            jest.spyOn(helperNumberService, 'random').mockImplementation(
                () => result
            );

            expect(helperNumberService.random(10)).toBe(result);
        });
    });

    describe('randomInRange', () => {
        it('should be called', async () => {
            const test = jest.spyOn(helperNumberService, 'randomInRange');

            helperNumberService.randomInRange(5, 8);
            expect(test).toHaveBeenCalledWith(5, 8);
        });

        it('should be success', async () => {
            const result = helperNumberService.randomInRange(5, 8);
            jest.spyOn(helperNumberService, 'randomInRange').mockImplementation(
                () => result
            );

            expect(helperNumberService.randomInRange(5, 8)).toBe(result);
        });
    });
});
