const Features: React.FC = () => (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-semibold mb-8">Our Features</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-2xl font-semibold mb-4">Expert Tutors</h4>
            <p>Learn from highly qualified and experienced tutors in various subjects.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-2xl font-semibold mb-4">Online Classes</h4>
            <p>Learn from the comfort of your home with our interactive online classes.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-2xl font-semibold mb-4">Affordable Pricing</h4>
            <p>We offer competitive pricing without compromising on quality.</p>
          </div>
        </div>
      </div>
    </section>
  );
  
  export default Features;
  