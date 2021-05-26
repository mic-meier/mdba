import { Scatter } from 'react-chartjs-2'

const options = {
  aspectRatio: 1,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      min: -30,
      max: 30,
      position: 'center',
      grid: {
        borderWidth: 2,
      },
    },
    y: {
      min: -30,
      max: 30,
      position: 'center',
      grid: {
        borderWidth: 2,
      },
    },
  },
}

interface Props {
  dataPoints: {
    x: number
    y: number
  }
}

export default function ScatterChart({ dataPoints }: Props) {
  const data = {
    datasets: [
      {
        data: [dataPoints],
        backgroundColor: 'rgb(255, 99, 132)',
      },
    ],
  }

  return (
    <div className="flex items-center max-w-md lg:max-w-4xl mx-auto">
      <div className="text-center align-middle pb-4 flex-grow origin-left-top transform -rotate-90">
        <span className="uppercase">Indirekt</span>
      </div>
      <div className="w-10/12">
        <div className="p-2 flex space-x-2">
          <div className="w-2/6 ">
            <span className="px-2 py-1 rounded-md bg-indigo-400 uppercase text-white font-semibold">
              Analytiker
            </span>
          </div>
          <div className="text-center w-10/12">
            <span className="px-2 py-1 uppercase">Reserviert</span>
          </div>
          <div className="text-right w-2/6">
            <span className="px-2 py-1 rounded-md bg-red-400 uppercase text-white font-semibold">
              Macher
            </span>
          </div>
        </div>
        <div className="p-2">
          <Scatter data={data} type="scatter" options={options} />
        </div>
        <div className="p-2 flex space-x-2">
          <div className="w-1/3">
            <span className="px-2 py-1 rounded-md bg-green-400 uppercase text-white font-semibold">
              Bez.mensch
            </span>
          </div>
          <div className="w-1/3 text-center">
            <span className="px-2 py-1 uppercase ">Offen</span>
          </div>
          <div className="w-1/3 text-right">
            <span className="px-2 py-1 rounded-md bg-yellow-400 uppercase text-white font-semibold">
              Dynamiker
            </span>
          </div>
        </div>
      </div>
      <div className="text-center align-middle pb-4 flex-grow origin-left-top transform rotate-90">
        <span className="uppercase">Direkt</span>
      </div>
    </div>
  )
}
