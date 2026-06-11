const ActionButtons = () => {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
      <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-4 py-2 rounded flex items-center gap-1">
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Marks Entry Instruction
      </button>
      <div className="text-red-500 text-sm font-medium">
        Please read Marks Entry Instruction first.
      </div>
      <div className="flex gap-2">
        <button className="bg-cyan-500 hover:bg-cyan-600 text-white text-xs px-4 py-2 rounded flex items-center gap-1">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Update Attendance Marks
        </button>
        <button className="bg-red-500 hover:bg-red-600 text-white text-xs px-4 py-2 rounded flex items-center gap-1">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Grade Sheet Submit
        </button>
      </div>
    </div>
  )
}

export default ActionButtons