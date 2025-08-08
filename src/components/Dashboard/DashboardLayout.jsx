import Graph from "./Graph";
import { useStoreContext } from "../../contextAPI/ContextAPI";
import { useFetchMyShortUrls, useFetchTotalClicks } from "../../hooks/useQuery";
import { useState, useEffect } from "react";
import ShortenPopUp from "./ShortenPopUp";
import ShortenUrlList from "./ShortenUrlList";
import { FaLink } from "react-icons/fa";

const DashboardLayout = () => {
  const { token } = useStoreContext();
  const [shortenPopup, setShortenPopup] = useState(false);

  const { 
    isLoading: loader, 
    data: totalClicks,
    refetch: refetchClicks 
  } = useFetchTotalClicks(token, onError);

  const {
    isLoading,
    data: myShortenUrls,
    refetch: refetchUrls,
  } = useFetchMyShortUrls(token, onError);

  function onError() {
    console.log("Error");
  }

  // Refetch data when token changes
  useEffect(() => {
    if (token) {
      refetchClicks();
      refetchUrls();
    }
  }, [token]);

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-blue-50 to-indigo-50 py-8 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {loader ? (
          <div className="flex justify-center items-center h-96">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-600"></div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="h-96 relative">
              {totalClicks.length == 0 && (
                <div className="absolute inset-0 flex flex-col justify-center items-center">
                  <h1 className="text-xl font-bold text-gray-800 mb-2">
                    No Data For This Time Period
                  </h1>
                  <p className="text-gray-600 max-w-md text-center">
                    Share your short link to view where your engagements are
                    coming from
                  </p>
                </div>
              )}
              <Graph graphData={totalClicks} />
            </div>

            <div className="py-5 text-end">
              <button
                className="bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-lg text-white font-medium transition-colors"
                onClick={() => setShortenPopup(true)}
              >
                Create a New Short Link
              </button>
            </div>

            {/* Display all Url of User */}
            <div>
              {isLoading ? (
                <div className="flex justify-center items-center h-32">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-600"></div>
                </div>
              ) : !myShortenUrls || myShortenUrls.length === 0 ? (
                <div className="flex justify-center pt-8">
                  <div className="flex gap-3 items-center bg-indigo-50 p-6 rounded-lg w-full max-w-md">
                    <FaLink className="text-indigo-600 text-xl" />
                    <h1 className="text-gray-800 font-medium">
                      You haven't created any short links yet
                    </h1>
                  </div>
                </div>
              ) : (
                <ShortenUrlList data={myShortenUrls} />
              )}
            </div>
          </div>
        )}

        <ShortenPopUp
          refetch={refetchUrls}
          open={shortenPopup}
          setOpen={setShortenPopup}
        />
      </div>
    </div>
  );
};

export default DashboardLayout;
