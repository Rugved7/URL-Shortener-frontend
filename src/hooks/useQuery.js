import { useQuery } from "@tanstack/react-query";
import api from "../api/api";

export const useFetchMyShortUrls = (token, onError) => {
  return useQuery({
    queryKey: ["my-shortenurls", token], // Include token in query key
    queryFn: async () => {
      try {
        if (!token) return []; // Return empty if no token
        const response = await api.get("/api/urls/myurls", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        return response.data;
      } catch (error) {
        throw new Error(
          error.response?.data?.message || "Failed to fetch short URLs"
        );
      }
    },
    select: (data) => {
      return [...data].sort(
        (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
      );
    },
    onError,
    staleTime: 0, // Always refetch when data is needed
    refetchOnMount: true,
    retry: 1,
  });
};


export const useFetchTotalClicks = (token, onError) => {
  return useQuery({
    queryKey: ["url-totalclick", token], // Include token in query key
    queryFn: async () => {
      try {
        if (!token) return {}; // Return empty if no token
        const response = await api.get("/api/urls/totalClicks", {
          params: {
            startDate: "2025-01-01",
            endDate: "2025-12-31",
          },
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        return response.data;
      } catch (error) {
        throw new Error(
          error.response?.data?.message || "Failed to fetch click data"
        );
      }
    },
    select: (data) => {
      return Object.entries(data).map(([clickDate, count]) => ({
        clickDate,
        count,
      }));
    },
    onError,
    staleTime: 0, // Always refetch when data is needed
    refetchOnMount: true,
    retry: 1,
  });
};