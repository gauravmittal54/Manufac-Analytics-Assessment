import { MantineProvider, Table, TableData } from '@mantine/core';
import React from 'react';
import { calculateClassStats } from '../../utils/StatisticalAnalysisHelper';
import {  InitialData  } from '../../constants/data';
import { getClassStats } from '../../utils/FlavnoidsStats';

const Flavanoids: React.FC = () => {

const groupedData = calculateClassStats(InitialData);
const classStats = getClassStats(groupedData);
const classHeaders = Array.from(classStats.keys()).map(key => `Class ${key}`);
const means: number[] = [];
const medians: number[] = [];
const modes: number[] = [];

for (const [, { mean, median, mode }] of classStats) {
    means.push( mean);
    medians.push(median);
    modes.push(mode);
}

const tableData: TableData = {
  caption: 'Flavanoids statistics',
  head:  ['Measure', ...classHeaders],
  body: [['Flavonoids mean' ,...means], ['Flavonoids median', ...medians], ['Flavonoids mode', ...modes]],
};


  return <Table data={tableData} />;
  
};

export default Flavanoids;