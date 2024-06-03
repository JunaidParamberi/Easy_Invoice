import * as React from 'react';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import DateRangePicker from './DateRangePicker';
import { LineChart, PieArc } from '@mui/x-charts';
import { padding } from '@mui/system';




// Sample dataset for monthly profits in dirhams
const dataset = [
  { month: 'Feb', profit: 50000 },
  { month: 'Mar', profit: 15000 },
  { month: 'Apr', profit: 17000 },
  { month: 'May', profit: 70000 },
  { month: 'Jun', profit: 10000 },
  { month: 'Jul', profit: 25000 },
  { month: 'Aug', profit: 23000 },
  { month: 'Sep', profit: 24000 },
  { month: 'Oct', profit: 10000},
  { month: 'Nov', profit: 500 },
  { month: 'Dec', profit: 2100 },
];

// Value formatter for dirhams
const valueFormatter = (value) => `AED ${value}`;

// Chart settings
const chartSetting = {
  yAxis: [
    {
      min: 0,
    },
  ],
  series: [{ dataKey:  'profit', label: 'Profit', valueFormatter, color: '#17694F', fontSize : "15px" }],
  height: 500, 

  sx: {
    padding : "2%",
    [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
      transform: 'translateX(-10px)',
    },
  },
};

export default function TickPlacementBars() {
//   const [tickPlacement, setTickPlacement] = React.useState('middle');
//   const [tickLabelPlacement, setTickLabelPlacement] = React.useState('middle');

  return (
    <div
      className='bg-[#ffffff] rounded-lg max-h-[66vh] border-[#17694F] border-[0.5px] bg-opacity-80 p-[20px]'
      style={{ width: "90%" }}
    >
        <h1 className=' text-[20px] font-[600]'>Income Chart</h1>
        {/* <DateRangePicker/> */}
        <BarChart
    

        dataset={dataset}
        xAxis={[
          { scaleType: 'band', dataKey: 'month', },
        ]}
        {...chartSetting}
      />
    </div>
  );
}
