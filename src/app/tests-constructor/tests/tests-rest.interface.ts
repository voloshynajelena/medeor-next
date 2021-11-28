import { LangDataInterface } from 'src/app/shared/interfaces/lang-data.interface';

export interface TestsRestInterface {
    code: string;
    description: LangDataInterface;
    id: string;
    refValue: { min: string; max: string };
    title: LangDataInterface;
    typeId: string;
    unit: LangDataInterface;
    value: string;
}

export interface TestsPostInterface {
    code: string;
    description: LangDataInterface;
    refValue: { min: string; max: string };
    title: LangDataInterface;
    unit: LangDataInterface;
}
