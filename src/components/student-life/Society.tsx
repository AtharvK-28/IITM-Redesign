interface SocietyProps {
  name: string;
  email: string;
  socialLink?: string;
}

const Society = ({ name, email, socialLink }: SocietyProps) => {
  return (
    <div className="bg-[#FFF8E7] p-4 rounded-lg">
      <h3 className="font-medium text-[#800020]">{name}</h3>
      <div className="mt-2 space-x-4">
        <a href={`mailto:${email}`} className="text-sm text-[#800020] hover:text-[#B8860B]">
          {email}
        </a>
        {socialLink && (
          <a href={socialLink} className="text-sm text-[#800020] hover:text-[#B8860B]">
            Social Media
          </a>
        )}
      </div>
    </div>
  );
};

export default Society;