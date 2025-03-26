const Error = ({ message = "Something went wrong!", onRetry }) => {
    return (
      <div className="flex flex-col items-center justify-center p-4 bg-red-100 text-red-700 rounded-lg shadow-md max-w-md mx-auto">
        <svg className="w-8 h-8 mb-2 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M12 5a7 7 0 1 1-7 7 7 7 0 0 1 7-7z"></path>
        </svg>
        <p className="text-lg font-semibold">{message}</p>
        {onRetry && (
          <button className="mt-3 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition" onClick={onRetry}>
            Retry
          </button>
        )}
      </div>
    );
  };
  
  export default Error;