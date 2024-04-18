import {  Table, TableData } from '@mantine/core';
import React from 'react';
import { calculateClassStats } from '../../utils/StatisticalAnalysisHelper';
import {  InitialData  } from '../../constants/data';
import { getClassStats } from '../../utils/FlavnoidsStats';
import { getGamaStats } from '../../utils/GamaStats';

const Gama: React.FC = () => {

const groupedData = calculateClassStats(InitialData);

const classStats = getGamaStats(groupedData);
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
  caption: 'Gama statistics',
  head:  ['Measure', ...classHeaders],
  body: [['Gama mean' ,...means], ['Gama median', ...medians], ['Gama mode', ...modes]],
};


  return <Table data={tableData} />;
  
};

export default Gama;