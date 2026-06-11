import { useMemo } from 'react'

const GRADING_SCALE = [
  { grade: 'A+', min: 80, max: 100, gp: 4.00 },
  { grade: 'A', min: 75, max: 79, gp: 3.75 },
  { grade: 'A-', min: 70, max: 74, gp: 3.50 },
  { grade: 'B+', min: 65, max: 69, gp: 3.25 },
  { grade: 'B', min: 60, max: 64, gp: 3.00 },
  { grade: 'B-', min: 55, max: 59, gp: 2.75 },
  { grade: 'C+', min: 50, max: 54, gp: 2.50 },
  { grade: 'C', min: 45, max: 49, gp: 2.25 },
  { grade: 'D', min: 40, max: 44, gp: 2.00 },
  { grade: 'F', min: 0, max: 39, gp: 0.00 },
]

export const useMarksCalculator = (student) => {
  const {
    q1 = 0, q2 = 0, q3 = 0,
    presn = 0, assign = 0,
    mt = 0, mtIm = 0,
    final = 0,
    attm = 0,
    abs = false,
    wh = false
  } = student

  // Calculate quiz average (3 quizzes, each max 5, total 15)
  const quizAvg = useMemo(() => {
    const total = (Number(q1) || 0) + (Number(q2) || 0) + (Number(q3) || 0)
    return (q1 + q2 + q3) / 3
  }, [q1, q2, q3])

  // Midterm with improvement
  const finalMt = useMemo(() => {
    const mtVal = Number(mt) || 0
    const impVal = Number(mtIm) || 0
    if (impVal > 0 && impVal > mtVal) return Math.min(impVal, 25)
    return Math.min(mtVal, 25)
  }, [mt, mtIm])

  const utm = finalMt // UTM = final midterm value

  // Total marks: ATTM + quizAvg + presn + assign + finalMt + final
  const total = useMemo(() => {
    return (Number(attm) || 0) + quizAvg + (Number(presn) || 0) + (Number(assign) || 0) + finalMt + (Number(final) || 0)
  }, [attm, quizAvg, presn, assign, finalMt, final])

  // Grade and GP
  const { grade, gp } = useMemo(() => {
    for (const scale of GRADING_SCALE) {
      if (total >= scale.min && total <= scale.max) {
        return { grade: scale.grade, gp: scale.gp.toFixed(2) }
      }
    }
    return { grade: 'F', gp: '0.00' }
  }, [total])

  return {
    q1, q2, q3, presn, assign, mt, mtIm, final, abs, wh,
    quizAvg,
    finalMt,
    utm,
    total,
    grade,
    gp
  }
}