import { LangDataInterface } from 'src/app/shared/interfaces/lang-data.interface';

export interface TestsGroupRestInterface {
    clientId: string;
    date: string;
    description: LangDataInterface;
    doctorId: string;
    id: string;
    name: LangDataInterface;
    tests: { typeId: string }[];
    typeId: string;
}
