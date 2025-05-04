import { Html } from '@react-three/drei';

const ObjectPopup = ({
  name,
  position,
  family,
  scientificName,
  collector,
  country,
  uses,
  imageUrl,
  onClose,
}) => {
  return (
    <Html position={position}>
      <div
        className="bg-white bg-opacity-90 p-6 rounded-lg shadow-xl max-w-lg w-[50vw] text-center max-h-[80vh] overflow-y-auto"
        style={{
          backdropFilter: 'blur(10px)',
          fontSize: '14px',
        }}
      >
        {/* Title */}
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">{name}</h3>

        {/* Image */}
        {imageUrl && (
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-auto rounded-lg mb-4 shadow-md"
          />
        )}

        {/* Information */}
        <p className="text-sm text-gray-600 mb-2">
          <strong>Family:</strong> {family}
        </p>
        <p className="text-sm text-gray-600 mb-2">
          <strong>Scientific Name:</strong> <em>{scientificName}</em>
        </p>
        <p className="text-sm text-gray-600 mb-2">
          <strong>Collector:</strong> {collector}
        </p>
        <p className="text-sm text-gray-600 mb-2">
          <strong>Country:</strong> {country}
        </p>
        <p className="text-sm text-gray-600 mb-4">
          <strong>Uses:</strong> {uses}
        </p>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
        >
          Close
        </button>
      </div>
    </Html>
  );
};

export default ObjectPopup;
