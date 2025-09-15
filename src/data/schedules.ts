// Schedule data source for Preta Fit class times

export interface DaySchedule {
  dayLetter: string;
  dayName: string;
  morningTimes: string[];
  afternoonTimes: string[];
}

export interface ScheduleData {
  crossfit: DaySchedule[];
  jiujitsu?: DaySchedule[]; // Will add later
}

// CrossFit schedule based on the image provided
export const schedules: ScheduleData = {
  crossfit: [
    {
      dayLetter: 'L',
      dayName: 'Lunes',
      morningTimes: ['6:00 A.M.', '7:00 A.M.', '8:00 A.M.'],
      afternoonTimes: ['4:00 P.M.', '5:00 P.M.', '6:00 P.M.'],
    },
    {
      dayLetter: 'M',
      dayName: 'Martes',
      morningTimes: ['6:00 A.M.', '7:00 A.M.', '8:00 A.M.'],
      afternoonTimes: ['5:00 P.M.', '6:00 P.M.'],
    },
    {
      dayLetter: 'M',
      dayName: 'Miércoles',
      morningTimes: ['6:00 A.M.', '7:00 A.M.', '8:00 A.M.'],
      afternoonTimes: ['4:00 P.M.', '5:00 P.M.', '6:00 P.M.'],
    },
    {
      dayLetter: 'J',
      dayName: 'Jueves',
      morningTimes: ['6:00 A.M.', '7:00 A.M.', '8:00 A.M.'],
      afternoonTimes: ['5:00 P.M.', '6:00 P.M.'],
    },
    {
      dayLetter: 'V',
      dayName: 'Viernes',
      morningTimes: ['6:00 A.M.', '7:00 A.M.', '8:00 A.M.'],
      afternoonTimes: ['4:00 P.M.', '5:00 P.M.', '6:00 P.M.'],
    },
  ],
};
