import { getMeanMedianMode } from "./StatisticalAnalysisHelper";

interface ClassStats {
    mean: number;
    median: number;
    mode: number;
}

interface Wine {
    Ash: number;
    Magnesium: number;
}

export const getGamaStats = (groupedData: Map<number, Wine[]>) => {

const classStats = new Map<number, ClassStats>();
    for(const [alcoholClass , wines] of groupedData.entries()) {
        const Gamma = wines.map((wine ) => wine.Ash * wine.Ash / wine.Magnesium);
        const { mean, median, mode } = getMeanMedianMode(Gamma);
        classStats.set(alcoholClass, { mean, median, mode } );
    }

    return classStats ;
   
}