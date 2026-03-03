const FeeStructure = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-[#800020] mb-6">Fee Structure</h2>
      
      <div className="space-y-6">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-[#FFF8E7]">
                <th className="px-4 py-2 text-left">Goal</th>
                <th className="px-4 py-2 text-left">Total Credits</th>
                <th className="px-4 py-2 text-left">Total Fees (INR)</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="px-4 py-2">Foundation Only</td>
                <td className="px-4 py-2">32</td>
                <td className="px-4 py-2">₹32,000</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Foundation + One Diploma</td>
                <td className="px-4 py-2">59</td>
                <td className="px-4 py-2">₹94,500</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Foundation + Two Diplomas</td>
                <td className="px-4 py-2">86</td>
                <td className="px-4 py-2">₹1,57,000</td>
              </tr>
              <tr>
                <td className="px-4 py-2">BSc Degree</td>
                <td className="px-4 py-2">114</td>
                <td className="px-4 py-2">₹2,21,000 - ₹2,27,000</td>
              </tr>
              <tr>
                <td className="px-4 py-2">BS Degree</td>
                <td className="px-4 py-2">142</td>
                <td className="px-4 py-2">₹3,15,000 - ₹3,51,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-[#FFF8E7] p-4 rounded-lg">
          <h3 className="font-semibold mb-4">Fee Support Available</h3>
          <ul className="space-y-2">
            <li>Up to 75% fee waiver for family income ≤ 1 LPA</li>
            <li>Up to 50% fee waiver for family income ≤ 5 LPA</li>
            <li>Special support for SC/ST/PwD candidates</li>
          </ul>
          <p className="text-sm mt-4">*IITM contribution does not apply to International students.</p>
        </div>

        <div className="text-sm text-gray-600">
          <p>Required documents for fee support:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Family Income Certificate</li>
            <li>OBC-NCL Certificate (if applicable)</li>
            <li>EWS Certificate (if applicable)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FeeStructure;