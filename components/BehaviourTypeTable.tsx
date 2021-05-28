export default function BehaviourTypeTable() {
  return (
    <div className="bg-white shadow-md rounded my-6">
      <table className="min-w-max w-full table-auto">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th></th>
            <th className="py-3 px-6 text-center">Macher</th>
            <th className="py-3 px-6 text-center">Dynamiker</th>
            <th className="py-3 px-6 text-center">Beziehungsmensch</th>
            <th className="py-3 px-6 text-center">Analytiker</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          <tr className="border-b border-gray-200">
            <td className="py-3 px-6 text-left whitespace-nowrap">
              Verhalten unter Druck..
            </td>
            <td className="py-3 px-6 text-center">autokratisch</td>
            <td className="py-3 px-6 text-center">angreifend</td>
            <td className="py-3 px-6 text-center">nachgebend</td>
            <td className="py-3 px-6 text-center">ausweichend</td>
          </tr>
          <tr className="border-b border-gray-200 bg-gray-50">
            <td className="py-3 px-6 text-left whitespace-nowrap">Ist...</td>
            <td className="py-3 px-6 text-center">wirksam</td>
            <td className="py-3 px-6 text-center">anregend</td>
            <td className="py-3 px-6 text-center">angenehm</td>
            <td className="py-3 px-6 text-center">präzise</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-6 text-left whitespace-nowrap">
              Strebt nach...
            </td>
            <td className="py-3 px-6 text-center">Macht</td>
            <td className="py-3 px-6 text-center">Anerkennung</td>
            <td className="py-3 px-6 text-center">Zustimmung</td>
            <td className="py-3 px-6 text-center">Respekt</td>
          </tr>
          <tr className="border-b border-gray-200 bg-gray-50">
            <td className="py-3 px-6 text-left whitespace-nowrap">
              Ist glücklich über...
            </td>
            <td className="py-3 px-6 text-center">Unabhängigkeit</td>
            <td className="py-3 px-6 text-center">Applaus</td>
            <td className="py-3 px-6 text-center">Konsens</td>
            <td className="py-3 px-6 text-center">Logik</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-6 text-left whitespace-nowrap">
              Will gelobt werden für...
            </td>
            <td className="py-3 px-6 text-center">Zielerreichung</td>
            <td className="py-3 px-6 text-center">Bewunderung andrer</td>
            <td className="py-3 px-6 text-center">Atmosphäre</td>
            <td className="py-3 px-6 text-center">Detailtreue</td>
          </tr>
          <tr className="border-b border-gray-200 bg-gray-50">
            <td className="py-3 px-6 text-left whitespace-nowrap">Stärke...</td>
            <td className="py-3 px-6 text-center">Durchsetzung</td>
            <td className="py-3 px-6 text-center">Begeisterung</td>
            <td className="py-3 px-6 text-center">Unterstützung</td>
            <td className="py-3 px-6 text-center">Systematik</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-6 text-left whitespace-nowrap">Hasst...</td>
            <td className="py-3 px-6 text-center">Unklarheit</td>
            <td className="py-3 px-6 text-center">Gleichförmigkeit</td>
            <td className="py-3 px-6 text-center">Konflikt</td>
            <td className="py-3 px-6 text-center">Unordnung</td>
          </tr>
          <tr className="border-b border-gray-200 bg-gray-50">
            <td className="py-3 px-6 text-left whitespace-nowrap">
              Benötigt...
            </td>
            <td className="py-3 px-6 text-center">Freiheit</td>
            <td className="py-3 px-6 text-center">Anreiz</td>
            <td className="py-3 px-6 text-center">Wärme</td>
            <td className="py-3 px-6 text-center">Klarheit</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-6 text-left whitespace-nowrap">
              Spart gerne an...
            </td>
            <td className="py-3 px-6 text-center">Zeit</td>
            <td className="py-3 px-6 text-center">Analyse/Details</td>
            <td className="py-3 px-6 text-center">Kritik</td>
            <td className="py-3 px-6 text-center">Worte</td>
          </tr>
          <tr className="border-b border-gray-200 bg-gray-50">
            <td className="py-3 px-6 text-left whitespace-nowrap">
              Braucht zur Entscheidung...
            </td>
            <td className="py-3 px-6 text-center">Optionen</td>
            <td className="py-3 px-6 text-center">Vorbilder</td>
            <td className="py-3 px-6 text-center">Garantien</td>
            <td className="py-3 px-6 text-center">Beweise</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-6 text-left whitespace-nowrap">
              Muss noch lernen...
            </td>
            <td className="py-3 px-6 text-center">zuhören</td>
            <td className="py-3 px-6 text-center">abwägen</td>
            <td className="py-3 px-6 text-center">initieren</td>
            <td className="py-3 px-6 text-center">entscheiden</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
