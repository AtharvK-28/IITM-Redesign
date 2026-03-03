interface ApplyButtonProps {
  className?: string;
  variant?: 'primary' | 'secondary';
}

const ApplyButton = ({ className = '', variant = 'primary' }: ApplyButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-md transition-colors duration-200";
  const variants = {
    primary: "bg-[#800020] text-white hover:bg-[#4A0012] px-6 py-2.5",
    secondary: "bg-[#FFD700] text-[#800020] hover:bg-white px-6 py-2"
  };

  return (
    <a
      href="https://ds.study.iitm.ac.in/auth/login?apply_qualifier=true&_gl=1*4ozzur*_gcl_aw*R0NMLjE3MzUzMDQ2MTUuQ2owS0NRaUF2Ym03QmhDNUFSSXNBRmp3Tkh0Um90WUtBdE9hUFZmZjhlMlEwWUdxRUZ1NzJYeFRMVzJtSWxUWmNLTHVKRktFYW5INnpQQWFBdnE2RUFMd193Y0I.*_gcl_au*NTcxMDM3NTYuMTczMTUxMTA4Ng.."
      className={`${baseStyles} ${variants[variant]} ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      Apply Now
    </a>
  );
};

export default ApplyButton;