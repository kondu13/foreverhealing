// components/ApproachAndBenefits.tsx

const ApproachAndBenefits: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 mb-12">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-green-700 mb-4">Our Approach</h3>
        <p className="text-lg text-gray-700">
          We combine emotional healing techniques with holistic health practices to address the root cause of Type 2 Diabetes. By releasing trapped emotions, we help your body heal naturally.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-green-700 mb-4">Why Choose Us</h3>
        <ul className="list-disc list-inside text-lg text-gray-700">
          <li>Personalized healing plans</li>
          <li>Experienced practitioners in emotional and energy healing</li>
          <li>Holistic approach addressing body, mind, and spirit</li>
          <li>Proven success in reversing Type 2 Diabetes</li>
        </ul>
      </div>
    </div>
  );
};

export default ApproachAndBenefits;
