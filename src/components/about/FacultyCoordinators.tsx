const FacultyCoordinators = () => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-[#800020] mb-6">Faculty Co-ordinators</h2>
      <h3 className="text-xl font-semibold mb-4">BS Data Science and Applications</h3>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-[#FFF8E7] p-6 rounded-lg">
          <img 
            src="https://study.iitm.ac.in/ds/assets/img/aboutIITM/Andrew.jpg"
            alt="Dr. Andrew Thangaraj"
            className="w-48 h-48 object-cover rounded-lg mb-4"
          />
          <h4 className="text-lg font-semibold mb-2">Dr. Andrew Thangaraj</h4>
          <p className="text-gray-700 mb-4">
            Andrew Thangaraj, Professor in the Department of Electrical Engineering, Indian Institute of Technology Madras, has been with the institute since June 2004. His bachelors was from IIT Madras and PhD from Georgia Institute of Technology, Atlanta, USA. His research interests are in the areas of information theory and error-control coding. He has served on the editorial boards of the IEEE Transactions on Communications and IEEE Transactions on Information Theory.
          </p>
          <p className="text-gray-700 mb-4">
            From Nov 2011, he has been one of the Coordinators of the National Programme on Technology Enhanced Learning (NPTEL), a multi-institutional project funded by the Ministry of Education and managed by IIT Madras. At NPTEL, he played a key role in the starting of online courses and certification on a massive scale through the SWAYAM portal. He is currently the Principal Investigator for SWAYAM.
          </p>
          <p className="text-gray-700">
            At IIT Madras, he led a team of faculty that started the Bachelor of Science Degree in Data Science & Applications, launched in June 2020, with online course content delivery and in-person exams. He is currently a coordinator for the program.
          </p>
        </div>

        <div className="bg-[#FFF8E7] p-6 rounded-lg">
          <img 
            src="https://study.iitm.ac.in/ds/assets/img/aboutIITM/Vignesh.jpg"
            alt="Dr. Vignesh Muthuvijayan"
            className="w-48 h-48 object-cover rounded-lg mb-4"
          />
          <h4 className="text-lg font-semibold mb-2">Dr. Vignesh Muthuvijayan</h4>
          <p className="text-gray-700">
            Dr. Vignesh Muthuvijayan is a Professor in the Department of Biotechnology, Bhupat and Jyoti Mehta School of Biosciences, IIT Madras. He received his BTech in Chemical Engineering from A. C. Tech, Anna University, India. He went on to pursue his master's degree in Chemical and Biochemical Engineering at the University of Maryland, Baltimore County, and his PhD in Chemical Engineering at Oklahoma State University. He also worked as a post-doc at Johns Hopkins University. He joined the Department of Biotechnology at IIT Madras in 2010. His research interests are in the area of biomaterials and their applications. Prof. Vignesh Muthuvijayan is also serving as a Coordinator for the IIT Madras BS in Data Science and Applications program and National Programme on Technology Enhanced Learning (NPTEL).
          </p>
        </div>
      </div>
    </div>
  );
};

export default FacultyCoordinators;