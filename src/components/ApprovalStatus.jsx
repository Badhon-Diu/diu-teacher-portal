import { useMemo } from 'react'

const ApprovalStatus = ({ students }) => {
  const gradeSummary = useMemo(() => {
    const counts = { 'A+':0, 'A':0, 'A-':0, 'B+':0, 'B':0, 'B-':0, 'C+':0, 'C':0, 'D':0, 'F':0, 'I':0, 'W':0 }
    students.forEach(student => {
      // Calculate grade for each student using the same logic (simplified)
      const total = (student.attm || 0) + 
        (Math.min((Number(student.q1)||0)+(Number(student.q2)||0)+(Number(student.q3)||0), 15)) +
        (Number(student.presn)||0) + (Number(student.assign)||0) +
        (Math.max(Number(student.mtIm)||0, Number(student.mt)||0) > 0 ? Math.min(Math.max(Number(student.mtIm)||0, Number(student.mt)||0), 25) : Math.min(Number(student.mt)||0, 25)) +
        (Number(student.final)||0)
      
      let grade = 'F'
      if (total >= 80) grade = 'A+'
      else if (total >= 75) grade = 'A'
      else if (total >= 70) grade = 'A-'
      else if (total >= 65) grade = 'B+'
      else if (total >= 60) grade = 'B'
      else if (total >= 55) grade = 'B-'
      else if (total >= 50) grade = 'C+'
      else if (total >= 45) grade = 'C'
      else if (total >= 40) grade = 'D'
      else grade = 'F'
      
      if (counts[grade] !== undefined) counts[grade]++
    })
    return counts
  }, [students])

  const summaryText = `A+ ${gradeSummary['A+']}; A ${gradeSummary['A']}; A- ${gradeSummary['A-']}; B+ ${gradeSummary['B+']}; B ${gradeSummary['B']}; B- ${gradeSummary['B-']}; C+ ${gradeSummary['C+']}; C ${gradeSummary['C']}; D ${gradeSummary['D']}; F ${gradeSummary['F']}; I 0; W 0`

  return (
    <div className="px-4 py-3 bg-white border-b border-gray-200">
      <h2 className="text-center text-gray-700 font-medium mb-3">Grade Sheet Approval Status</h2>
      <table className="w-full text-xs border-collapse">
        <tbody>
          <tr className="border-b border-gray-100">
            <td className="py-2 text-gray-600 w-1/4">Grade Sheet Submission Status:</td>
            <td className="py-2 text-red-500 font-medium w-1/4">Not Submitted</td>
            <td className="py-2 text-gray-600 w-1/4 pl-4">Result Published:</td>
            <td className="py-2 text-red-500 font-medium w-1/4">NO</td>
          </tr>
          <tr className="border-b border-gray-100">
            <td className="py-2 text-gray-600">Approved By Associate Head:</td>
            <td className="py-2"></td>
            <td className="py-2 text-gray-600 pl-4">Approved By Associate Head Time:</td>
            <td className="py-2"></td>
          </tr>
          <tr className="border-b border-gray-100">
            <td className="py-2 text-gray-600">Approved By Head:</td>
            <td className="py-2 text-red-500 font-medium">No</td>
            <td className="py-2 text-gray-600 pl-4">Approved By Head Time:</td>
            <td className="py-2"></td>
          </tr>
          <tr className="border-b border-gray-100">
            <td className="py-2 text-gray-600">Approved By Dean:</td>
            <td className="py-2 text-red-500 font-medium">No</td>
            <td className="py-2 text-gray-600 pl-4">Approved By Dean Time:</td>
            <td className="py-2"></td>
          </tr>
          <tr className="border-b border-gray-100">
            <td className="py-2 text-gray-600">Rejected By:</td>
            <td className="py-2"></td>
            <td className="py-2 text-gray-600 pl-4">Rejected Time:</td>
            <td className="py-2"></td>
          </tr>
          <tr className="border-b border-gray-100">
            <td className="py-2 text-gray-600">Causes of Rejection:</td>
            <td className="py-2" colSpan="3"></td>
          </tr>
          <tr>
            <td className="py-2 text-gray-600">Result Summary:</td>
            <td className="py-2 text-gray-600" colSpan="3">{summaryText}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ApprovalStatus