import { getCVE } from '../../api';

export const lastcve = async (args: string[]): Promise<string> => {
    const cve:string = await getCVE();
    return cve;
};