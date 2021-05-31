import { BehaviourType } from '../types'

type Props = {
  behaviourTypes: BehaviourType[]
}

export default function BehaviourTypeTable({ behaviourTypes }: Props) {
  return (
    <div className="bg-white shadow-md rounded my-6 overflow-auto">
      <table className="min-w-max w-full table-auto">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th></th>
            {behaviourTypes.map((type) => (
              <th className="py-3 px-6 text-center" key={type.name}>
                {type.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          <tr className="border-b border-gray-200">
            <td className="py-3 px-6 text-left whitespace-nowrap">
              Verhalten unter Druck...
            </td>
            {behaviourTypes.map((type) => (
              <td className="py-3 px-6 text-center" key={type.name}>
                {type.underPressure}
              </td>
            ))}
          </tr>
          <tr className="border-b border-gray-200 bg-gray-50">
            <td className="py-3 px-6 text-left whitespace-nowrap">Ist...</td>
            {behaviourTypes.map((type) => (
              <td className="py-3 px-6 text-center" key={type.name}>
                {type.is}
              </td>
            ))}
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-6 text-left whitespace-nowrap">
              Strebt nach...
            </td>
            {behaviourTypes.map((type) => (
              <td className="py-3 px-6 text-center" key={type.name}>
                {type.strivesFor}
              </td>
            ))}
          </tr>
          <tr className="border-b border-gray-200 bg-gray-50">
            <td className="py-3 px-6 text-left whitespace-nowrap">
              Ist glücklich über...
            </td>
            {behaviourTypes.map((type) => (
              <td className="py-3 px-6 text-center" key={type.name}>
                {type.habbyAbout}
              </td>
            ))}
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-6 text-left whitespace-nowrap">
              Will gelobt werden für...
            </td>
            {behaviourTypes.map((type) => (
              <td className="py-3 px-6 text-center" key={type.name}>
                {type.wantsPraiseFor}
              </td>
            ))}
          </tr>
          <tr className="border-b border-gray-200 bg-gray-50">
            <td className="py-3 px-6 text-left whitespace-nowrap">Stärke...</td>
            {behaviourTypes.map((type) => (
              <td className="py-3 px-6 text-center" key={type.name}>
                {type.strength}
              </td>
            ))}
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-6 text-left whitespace-nowrap">Hasst...</td>
            {behaviourTypes.map((type) => (
              <td className="py-3 px-6 text-center" key={type.name}>
                {type.hates}
              </td>
            ))}
          </tr>
          <tr className="border-b border-gray-200 bg-gray-50">
            <td className="py-3 px-6 text-left whitespace-nowrap">
              Benötigt...
            </td>
            {behaviourTypes.map((type) => (
              <td className="py-3 px-6 text-center" key={type.name}>
                {type.needs}
              </td>
            ))}
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-6 text-left whitespace-nowrap">
              Spart gerne an...
            </td>
            {behaviourTypes.map((type) => (
              <td className="py-3 px-6 text-center" key={type.name}>
                {type.conserves}
              </td>
            ))}
          </tr>
          <tr className="border-b border-gray-200 bg-gray-50">
            <td className="py-3 px-6 text-left whitespace-nowrap">
              Braucht zur Entscheidung...
            </td>
            {behaviourTypes.map((type) => (
              <td className="py-3 px-6 text-center" key={type.name}>
                {type.needsForDecision}
              </td>
            ))}
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-6 text-left whitespace-nowrap">
              Muss noch lernen...
            </td>
            {behaviourTypes.map((type) => (
              <td className="py-3 px-6 text-center" key={type.name}>
                {type.needsToLearn}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}
