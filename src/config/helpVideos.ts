export interface HelpVideo {
  id: number;
  youtubeId: string;
  title: string;
  category: 'overview' | 'structure' | 'admission';
}

export const helpVideos: HelpVideo[] = [
  {
    id: 1,
    youtubeId: 'svDWMFl0AAU',
    title: 'Why an Online Degree Initiative from IIT Madras?',
    category: 'overview'
  },
  {
    id: 2,
    youtubeId: '_2jhKc8Im1k',
    title: 'Why Learn Programming and Data Science?',
    category: 'overview'
  },
  {
    id: 3,
    youtubeId: 'l33Pjtgw4WE',
    title: 'Who is this Program Designed for? What is the Eligibility to apply?',
    category: 'overview'
  },
  {
    id: 4,
    youtubeId: 'jOr6_J-grV4',
    title: 'Overall Structure of the Program',
    category: 'structure'
  },
  {
    id: 5,
    youtubeId: 'p4231UDVDYg',
    title: 'The Three Levels of the Program',
    category: 'structure'
  },
  {
    id: 6,
    youtubeId: 'EtxXK14c368',
    title: 'Foundational Level of the Program',
    category: 'structure'
  },
  {
    id: 7,
    youtubeId: 'rpNDAuZoE8c',
    title: 'Diploma Level of the Program',
    category: 'structure'
  },
  {
    id: 8,
    youtubeId: '8zrIiD9g81w',
    title: 'Degree Level of the Program',
    category: 'structure'
  },
  {
    id: 9,
    youtubeId: 'MRwvBDSMvqk',
    title: 'Fee Structure of the Program',
    category: 'structure'
  },
  {
    id: 10,
    youtubeId: 'K_PNVKEIBFg',
    title: 'Admission Process without a Typical Entrance Exam',
    category: 'admission'
  },
  {
    id: 11,
    youtubeId: 'jK25mkaadqY',
    title: 'What is the Qualifier Process?',
    category: 'admission'
  },
  {
    id: 12,
    youtubeId: 'DuJHj5a0g04',
    title: 'Qualifier Exam and Qualifying Criteria',
    category: 'admission'
  }
];