const Loading = () => {
  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="text-white">
          <span className="loading loading-ring loading-xs"></span>
          <span className="loading loading-ring loading-sm"></span>
          <span className="loading loading-ring loading-md"></span>
          <span className="loading loading-ring loading-lg"></span>
          <span className="loading loading-ring loading-xl"></span>
        </div>
      </div>
    </>
  );
};

export default Loading;
