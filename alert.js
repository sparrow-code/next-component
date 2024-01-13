const AlertBody = ({ alert, setAlert, callBackFunction }) => {
  return (
    <>
      <div className="absolute top-0 left-0 z-[10] w-full h-[100vh] flex justify-center items-center bg-[#0000008c]">
        <div className="bg-[#000000da] p-5 rounded-3xl">
          <h1 className="text-xl text-red-500 ">{alert.heading}</h1>
          <p className="text-white">{alert.body}</p>
          <div className="flex justify-around gap-4 my-8">
            <button
              className="border-2 border-[#DD0031] hover:bg-[#DD0031] px-4 py-2 rounded-md"
              onClick={() => callBackFunction(true, alert.id)}
            >
              Yes
            </button>
            <button
              className="border-2 border-[#00dd42] hover:bg-[#00dd42] px-4 py-2 rounded-md"
              onClick={() => callBackFunction(false, alert.id)}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlertBody;
