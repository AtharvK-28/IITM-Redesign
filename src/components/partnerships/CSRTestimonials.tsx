const CSRTestimonials = () => {
  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold text-[#800020] text-center mb-8">
        Hear from Our Beneficiaries
      </h3>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="aspect-video">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/S4B9-B33zGk"
            title="HSBC scholarship beneficiaries"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        
        <div className="aspect-video">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/fT04DuyMNK4"
            title="Other CSR beneficiaries"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default CSRTestimonials;