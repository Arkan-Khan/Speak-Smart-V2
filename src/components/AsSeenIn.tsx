
const AsSeenIn = () => {
  return (
    <section className="px-6 py-16 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-0">
          <div className="bg-orange-500 inline-block px-8 py-4 rounded-t-3xl">
            <h3 className="text-2xl md:text-3xl font-bold text-center">
              <span className="text-white">As </span>
              <span className="text-white">seen in</span>
            </h3>
          </div>
        </div>
        
        {/* Stacked Images Layout */}
        <div className="flex flex-col">
          <div className="w-full">
            <img 
              src="/lovable-uploads/17c24d01-6799-4d1e-8998-e46014d7b1d2.png" 
              alt="As seen in media 1"
              className="w-full h-auto"
            />
          </div>
          <div className="w-full">
            <img 
              src="/lovable-uploads/ca8f1909-8dcd-4ba0-bc1b-7a3f474ae8fc.png" 
              alt="As seen in media 2"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AsSeenIn;
