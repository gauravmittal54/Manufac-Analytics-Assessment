import {  getMeanMedianMode } from "./StatisticalAnalysisHelper";

interface Wine {
    Alcohol: number;
    Flavanoids: number;
}

interface ClassStats {
    mean: number;
    median: number;
    mode: number;
}



export const getClassStats = (groupedData: Map<number, Wine[]>) => {

     const classStats = new Map<number, ClassStats>();
    for(const [alcoholClass , wines] of groupedData.entries()) {
        const flavanoids = wines.map((wine ) => wine.Flavanoids);
        const { mean, median, mode } = getMeanMedianMode(flavanoids);
        classStats.set(alcoholClass, { mean, median, mode } );
    }

    return classStats ;
}


