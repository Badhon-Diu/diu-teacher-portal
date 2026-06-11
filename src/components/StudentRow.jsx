import { useMarksCalculator } from '../hooks/useMarksCalculator'

const StudentRow = ({ student, onUpdate, onDelete }) => {
  const {
    q1, q2, q3, presn, assign, mt, mtIm, final, abs, wh,
    quizAvg, finalMt, utm, total, grade, gp
  } = useMarksCalculator(student)

  const handleInputChange = (field, value) => {
    let parsedValue = value === '' ? '' : Number(value)
    if (field === 'abs') parsedValue = value // boolean
    if (field === 'wh') parsedValue = value
    onUpdate(student.id, { [field]: parsedValue })
  }

  // Max value mapping
  const maxMap = { q1: 5, q2: 5, q3: 5, presn: 8, assign: 6, mt: 25, mtIm: 25, final: 40 }

  const onNumberChange = (field, val) => {
    let num = val === '' ? '' : Number(val)
    // if (typeof num === 'number' && !isNaN(num) && maxMap[field] && num > maxMap[field]) {
    //   num = maxMap[field]
    // }
    handleInputChange(field, num)
  }

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete ${student.name}?`)) {
      onDelete(student.id)
    }
  }

  return (
    <tr className={`hover:bg-gray-50 transition-colors ${abs ? 'bg-red-100' : ''}`}>
      <td className="px-2 py-2 text-xs text-gray-700">{student.studentId}</td>
      <td className="px-2 py-2 text-xs text-gray-700">{student.name}</td>
      <td className="px-1 py-2 text-center text-xs text-gray-700 font-medium">{student.attm}</td>
      <td className="px-1 py-2 text-center">
        <input type="number" value={q1} onChange={e => onNumberChange('q1', e.target.value)} className="w-14 px-1 py-1 text-xs border border-gray-300 rounded text-center" />
      </td>
      <td className="px-1 py-2 text-center">
        <input type="number" value={q2} onChange={e => onNumberChange('q2', e.target.value)} className="w-14 px-1 py-1 text-xs border border-gray-300 rounded text-center" />
      </td>
      <td className="px-1 py-2 text-center">
        <input type="number" value={q3} onChange={e => onNumberChange('q3', e.target.value)} className="w-14 px-1 py-1 text-xs border border-gray-300 rounded text-center" />
      </td>
      <td className="px-1 py-2 text-center text-xs text-gray-600">{quizAvg.toFixed(2)}</td>
      <td className="px-1 py-2 text-center">
        <input type="number" value={presn} onChange={e => onNumberChange('presn', e.target.value)} className="w-14 px-1 py-1 text-xs border border-gray-300 rounded text-center" />
      </td>
      <td className="px-1 py-2 text-center">
        <input type="number" value={assign} onChange={e => onNumberChange('assign', e.target.value)} className="w-14 px-1 py-1 text-xs border border-gray-300 rounded text-center" />
      </td>
      <td className="px-1 py-2 text-center">
        <input type="number" value={mt} onChange={e => onNumberChange('mt', e.target.value)} className="w-14 px-1 py-1 text-xs border border-gray-300 rounded text-center" />
      </td>
      <td className="px-1 py-2 text-center">
        <input type="number" value={mtIm} onChange={e => onNumberChange('mtIm', e.target.value)} className="w-14 px-1 py-1 text-xs border border-gray-300 rounded text-center" />
      </td>
      <td className="px-1 py-2 text-center text-xs text-gray-600">{utm.toFixed(2)}</td>
      <td className="px-1 py-2 text-center">
        <input type="checkbox" checked={abs} onChange={e => handleInputChange('abs', e.target.checked)} className="w-4 h-4" />
      </td>
      <td className="px-1 py-2 text-center">
        <input type="checkbox" checked={wh} onChange={e => handleInputChange('wh', e.target.checked)} className="w-4 h-4" />
      </td>
      <td className="px-1 py-2 text-center">
        <input type="number" value={final} onChange={e => onNumberChange('final', e.target.value)} className="w-14 px-1 py-1 text-xs border border-gray-300 rounded text-center" />
      </td>
      <td className="px-1 py-2 text-center text-xs text-gray-600">{Math.round(total)}</td>
      <td className={`px-1 py-2 text-center text-xs font-medium ${grade === 'F' ? 'text-red-600' : 'text-green-600'}`}>{grade}</td>
      <td className="px-1 py-2 text-center text-xs text-gray-600">{gp}</td>
      <td className="px-2 py-2 text-center">
        <div className="flex gap-2 justify-center">
          <button
            onClick={() => alert(`Marks saved successfully!\nTotal: ${Math.round(total)}\nGrade: ${grade}\nGP: ${gp}`)}
            className="bg-green-500 hover:bg-green-600 text-white text-xs px-3 py-1 rounded flex items-center gap-1"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
            </svg>
            Save
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-600 text-white text-xs p-1 rounded flex items-center gap-1"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            
          </button>
        </div>
      </td>
    </tr>
  )
}

export default StudentRow