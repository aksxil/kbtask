const UnsupportedScreen = () => {
  return (
    <div className="w-full h-screen bg-slate-800 text-white flex flex-col items-center justify-center text-center p-4">
      <h2 className="text-2xl pb-6">🖥️ Not Supported on Mobile</h2>
        <p>Please use a desktop or larger screen to access this</p>
    </div>
  );
};

export default UnsupportedScreen;
