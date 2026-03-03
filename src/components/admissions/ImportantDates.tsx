interface BatchDates {
  may: string;
  september: string;
}

interface DateEvent {
  event: string;
  dates: BatchDates;
}

const dates: DateEvent[] = [
  {
    event: 'Application Form Opens',
    dates: { may: 'Monday, February 26, 2024', september: 'Monday, June 17, 2024' }
  },
  {
    event: 'Application Form Closes',
    dates: { may: 'Sunday, May 26, 2024', september: 'Sunday, September 15, 2024' }
  },
  {
    event: 'Qualifier Phase Week 1 Starts',
    dates: { may: 'Friday, May 31, 2024', september: 'Friday, September 20, 2024' }
  },
  {
    event: 'Qualifier Exam',
    dates: { may: 'Sunday, July 7, 2024', september: 'Sunday, October 27, 2024' }
  },
  {
    event: 'Qualifier Results',
    dates: { may: 'Thursday, July 11, 2024', september: 'Friday, November 1, 2024' }
  },
  {
    event: 'Registration Opens (only if cleared Qualifier Exam)',
    dates: { may: 'Thursday, July 11, 2024', september: 'Wednesday, November 6, 2024' }
  },
  {
    event: 'Registration Closes',
    dates: { may: 'Saturday, July 13, 2024', september: 'Thursday, November 7, 2024' }
  },
  {
    event: 'Re-attempt Qualifier Opens',
    dates: { may: 'Thursday, July 11, 2024', september: 'Wednesday, November 6, 2024' }
  },
  {
    event: 'Re-attempt Qualifier Closes',
    dates: { may: 'Saturday, July 13, 2024', september: 'Thursday, November 7, 2024' }
  },
  {
    event: 'Re-attempt Qualifier Exam (re-attempt fee applies)',
    dates: { may: 'Sunday, August 4, 2024', september: 'Sunday, December 1, 2024' }
  },
  {
    event: 'Re-attempt Qualifier Results',
    dates: { may: 'Wednesday, August 14, 2024', september: 'Wednesday, December 11, 2024' }
  },
  {
    event: 'Registration Opens (if cleared re-attempt)',
    dates: { may: 'Wednesday, September 4, 2024', september: 'Will be announced' }
  }
];

const ImportantDates = () => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-[#800020] mb-6">Important Dates</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-[#FFF8E7]">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-[#800020]">Event</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-[#800020]">May 2024 Batch</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-[#800020]">September 2024 Batch</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {dates.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-900">{item.event}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{item.dates.may}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{item.dates.september}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ImportantDates;