const ApplicationBanner = () => {
  return (
    <div className="bg-gradient-to-r from-[#800020] to-[#4A0012] text-white py-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex-1">
          <p className="text-lg font-medium">Applications Open for January 2025 Batch</p>
          <p className="text-sm opacity-90">Last Date: January 02, 2025 | Exam: February 23, 2025</p>
        </div>
        <a 
          href="https://ds.study.iitm.ac.in/auth/login?apply_qualifier=true&_gl=1*4ozzur*_gcl_aw*R0NMLjE3MzUzMDQ2MTUuQ2owS0NRaUF2Ym03QmhDNUFSSXNBRmp3Tkh0Um90WUtBdE9hUFZmZjhlMlEwWUdxRUZ1NzJYeFRMVzJtSWxUWmNLTHVKRktFYW5INnpQQWFBdnE2RUFMd193Y0I.*_gcl_au*NTcxMDM3NTYuMTczMTUxMTA4Ng.."
          className="bg-[#FFD700] text-[#800020] px-6 py-2 rounded-md font-semibold hover:bg-white transition-colors duration-300 shadow-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apply Now
        </a>
      </div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
    </div>
  );
};

export default ApplicationBanner;