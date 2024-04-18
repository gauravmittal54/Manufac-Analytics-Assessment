// import { data } from "../constants/data";

interface Wine {
    Alcohol: number;
    Flavanoids: number;
    Ash: number;
    Magnesium: number;
}

interface ClassStats {
    mean: number;
    median: number;
    mode: number;
}


export const getMeanMedianMode = (data: number[]) : ClassStats => {

    const mean = Math.floor((data.reduce((acc, val) => acc + val, 0) / data.length)*1000)/1000;
    const sortedData = data.slice().sort((a, b) => a - b);
    const median = sortedData.length % 2 === 0 ? Math.floor((((sortedData[sortedData.length / 2 - 1]) + sortedData[sortedData.length / 2]) / 2)*1000)/1000 : Math.floor(( sortedData[Math.floor(sortedData.length / 2)])*1000)/1000;

    const modeMap = new Map<number, number>();
    for (const val of data) {
        modeMap.set(val, (modeMap.get(val) || 0) + 1);
    }
    const mode = Math.floor(([...modeMap.entries()].reduce((a, b) => a[1] > b[1] ? a : b)[0])*1000)/1000;

    return { mean, median, mode };
}

export const calculateClassStats = (data: Wine[]) : Map<number, Wine[]>  =>{
    // Group data by class
    const groupedData = data.reduce((acc, wine) => {
        const alcoholClass = wine.Alcohol;
        if (!acc.has(alcoholClass)) {
            acc.set(alcoholClass, []);
        }
        acc.get(alcoholClass)?.push(wine);
        return acc;
    }, new Map<number, Wine[]>());

    return groupedData;
}
