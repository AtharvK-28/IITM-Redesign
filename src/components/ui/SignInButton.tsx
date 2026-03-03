import { LogIn } from 'lucide-react';

const SignInButton = () => {
  return (
    <a
      href="https://ds.study.iitm.ac.in/auth/login?_gl=1*1cyd2zp*_gcl_aw*R0NMLjE3MzUzMDQ2MTUuQ2owS0NRaUF2Ym03QmhDNUFSSXNBRmp3Tkh0Um90WUtBdE9hUFZmZjhlMlEwWUdxRUZ1NzJYeFRMVzJtSWxUWmNLTHVKRktFYW5INnpQQWFBdnE2RUFMd193Y0I.*_gcl_au*NTcxMDM3NTYuMTczMTUxMTA4Ng.."
      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#800020] rounded-md hover:bg-[#4A0012] transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      <LogIn className="w-4 h-4" />
      Sign In
    </a>
  );
};

export default SignInButton;