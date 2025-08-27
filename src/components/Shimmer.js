const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      {Array(20).fill("").map((_, index) => (
        <div
          key={index}
          className="w-60 h-100 bg-gray-300 mt-40 m-4 rounded-lg animate-pulse "
        ></div>
      ))}
    </div>
  );
};

export default Shimmer;
