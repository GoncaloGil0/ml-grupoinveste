import { empresaDataInterface } from "../pages/Empresa/empresa";
import { bbData } from "./empresasData/bbData";
import { esportzyData } from "./empresasData/esportzy";
import { investData } from "./empresasData/investData";
import { rootkeyData } from "./empresasData/rootkeyData";
import { safeData } from "./empresasData/safeData";

export const dataEmpresas: empresaDataInterface[] = [
    investData, 
    rootkeyData, 
    bbData, 
    safeData,
    esportzyData 
]