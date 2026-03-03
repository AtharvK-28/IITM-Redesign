import Society from './Society';

const societies = [
  { name: 'Aayam : IITM BS Drama Society', email: 'drama.society@study.iitm.ac.in', socialLink: '#' },
  { name: 'Adhyay - The Civil Services Society IIT Madras BS', email: 'civilservices.society@study.iitm.ac.in', socialLink: '#' },
  { name: 'AKORD Music Society', email: 'music.society@study.iitm.ac.in', socialLink: '#' },
  { name: 'AWS Cloud Club, IIT Madras', email: 'cloudcoders@study.iitm.ac.in', socialLink: '#' },
  { name: 'Veritas Oratory Society', email: 'oratory.society@study.iitm.ac.in', socialLink: '#' },
  { name: 'Deva-Bhasha: The Sanskrit Society', email: 'sanskrit.society@study.iitm.ac.in', socialLink: '#' },
  { name: 'Amartya - The Finance Society', email: 'finance.society@study.iitm.ac.in', socialLink: '#' },
  { name: 'Heighers eSports Society', email: 'esports.club@study.iitm.ac.in', socialLink: '#' },
  { name: 'IIT Madras BS chess community - "Shah-Maat"', email: 'chess.club@study.iitm.ac.in', socialLink: '#' },
  { name: 'Pravāha: The Dance Society', email: 'dance.society@study.iitm.ac.in', socialLink: '#' },
  { name: 'RAAHAT : the Mental Health & Wellness Society', email: 'wellness.society@study.iitm.ac.in', socialLink: '#' },
  { name: 'RaSoR : Ramanujan Society of Research', email: 'research.society@study.iitm.ac.in', socialLink: '#' },
  { name: 'SAHARA - The Social Welfare Society', email: 'connectwithsahara@study.iitm.ac.in', socialLink: '#' },
  { name: 'Sahityika: Literary Society', email: 'literary.society@study.iitm.ac.in', socialLink: '#' },
  { name: 'SYNAPSE : The Social Studies Society', email: 'culturalstudy.society@study.iitm.ac.in', socialLink: '#' },
  { name: 'WYZ Kids : The IITM BS Quiz Club', email: 'quiz.club@study.iitm.ac.in', socialLink: '#' },
  { name: 'Boundless - IITM BS Travel Club', email: 'boundless.club@study.iitm.ac.in', socialLink: '#' },
  { name: 'Elan - Fashion Society', email: 'fashion.society@study.iitm.ac.in', socialLink: '#' },
  { name: 'IIT Madras BS Film Society', email: 'film.society@study.iitm.ac.in', socialLink: '#' },
  { name: 'Diplomacy', email: 'diplomacia@study.iiym.ac.in', socialLink: '#' },
  { name: 'JITSIE IIT Madras', email: 'jitsie@study.iitm.ac.in', socialLink: '#' },
  { name: 'General Management Club', email: 'gm.club@study.iitm.ac.in', socialLink: '#' },
  { name: 'CodeCrafters Coding Society', email: 'codecrafters.society@study.iitm.ac.in', socialLink: '#' }
];

const Societies = () => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-[#800020] mb-6">Our Societies</h2>
      <p className="text-gray-700 mb-6">
        There are a variety of student-run clubs and societies for the students to explore and join. 
        These societies cover a wide range of interests from arts and culture to technology and research.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {societies.map((society) => (
          <Society key={society.name} {...society} />
        ))}
      </div>
    </div>
  );
};

export default Societies;