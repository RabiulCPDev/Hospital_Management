import { useNavigate } from "react-router-dom";

export const ServiceCard = ({ services }) => {
  const navigate = useNavigate();

  const ReadMore = () => {
    navigate(`/services/${services._id}`, { state: { services: services } });
  };

  return (
    <div className="flex flex-col h-auto bg-white p-4 mt-4 w-full sm:w-72 md:w-96 shadow-lg rounded-lg transition-transform duration-200 hover:shadow-xl hover:scale-105">
      <div>
        <img
          className="w-full h-48 sm:h-48 md:h-64 mx-auto rounded-lg mb-2 shadow-lg object-cover"
          src={services.url}
          alt="Department Picture"
        />
      </div>

      <div className="flex flex-col items-center justify-center">
        <p className="mb-1 text-center font-semibold text-lg sm:text-xl md:text-2xl">{services.name}</p>

        {/* <p className="text-center line-clamp-2">{services.description}</p> */}

        <button
          onClick={ReadMore}
          className="mt-2 border bg-blue-400 text-white rounded-lg p-2 sm:p-3 transition duration-200 hover:bg-blue-500"
        >
          Read More
        </button>
      </div>
    </div>
  );
};
