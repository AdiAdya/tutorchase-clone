const Testimonials: React.FC = () => (
    <section className="py-16 bg-blue-100 text-gray-600">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-semibold mb-8">What Our Students Say</h3>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-1/3">
            <p className="text-lg mb-4">&quot;The tutors are amazing, and the classes have helped me improve my grades significantly!&quot;</p>
            <p className="font-semibold">- Sarah L.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-1/3">
            <p className="text-lg mb-4">&quot;I love the flexibility of the online sessions. I can learn at my own pace.&quot;</p>
            <p className="font-semibold">- John D.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-1/3">
            <p className="text-lg mb-4">&quot;Affordable prices for high-quality tutoring. Highly recommend!&quot;</p>
            <p className="font-semibold">- Emma P.</p>
          </div>
        </div>
      </div>
    </section>
  );
  
  export default Testimonials;
  