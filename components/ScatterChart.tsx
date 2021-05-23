import { Scatter } from 'react-chartjs-2'

const data = {
  datasets: [
    {
      data: [
        {
          x: -10,
          y: 0,
        },
        {
          x: 0,
          y: 10,
        },
        {
          x: 10,
          y: 5,
        },
        {
          x: 0.5,
          y: -5.5,
        },
      ],
      backgroundColor: 'rgb(255, 99, 132)',
    },
  ],
}

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      min: -27,
      max: 27,
    },
    y: {
      min: -27,
      max: 27,
    },
  },
}

export default function ScatterChart() {
  return (
    <div className="flex items-center max-w-6xl mx-auto">
      <div className="text-right flex-grow align-middle pb-4">
        <span className="uppercase">Indirekt</span>
      </div>
      <div>
        <div className="p-2 flex space-x-2">
          <div className="flex-grow ">
            <span className="px-2 py-1 rounded-md bg-indigo-400 uppercase text-white font-semibold">
              Analytiker
            </span>
          </div>
          <div className="flex-grow text-center">
            <span className="px-2 py-1 uppercase ">Reserviert</span>
          </div>
          <div className="flex-grow text-right">
            <span className="px-2 py-1 rounded-md bg-red-400 uppercase text-white font-semibold">
              Macher
            </span>
          </div>
        </div>
        <div className="p-2">
          <Scatter data={data} type="scatter" options={options} />
        </div>
        <div className="p-2 flex space-x-2">
          <div className="flex-grow ">
            <span className="px-2 py-1 rounded-md bg-green-400 uppercase text-white font-semibold">
              Bez.mensch
            </span>
          </div>
          <div className="flex-grow text-center">
            <span className="px-2 py-1 uppercase ">Offen</span>
          </div>
          <div className="flex-grow  text-right">
            <span className="px-2 py-1 rounded-md bg-yellow-400 uppercase text-white font-semibold">
              Dynamiker
            </span>
          </div>
        </div>
      </div>
      <div className="flex-grow align-middle pb-4">
        <span className="uppercase">Direkt</span>
      </div>
    </div>
  )
}
