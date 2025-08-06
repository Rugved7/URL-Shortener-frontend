import { useQuery } from '@tanstack/react-query';
import api from '../api/api';

export const useFetchTotalClicks = (token, onError) => {
  return useQuery({
    queryKey: ['url-totalclick'],
    queryFn: async () => {
      try {
        const response = await api.get("/api/urls/totalClicks", {
          params: { 
            startDate: "2025-01-01",
            endDate: "2025-12-31"
          },
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
          }
        });
        return response.data;
      } catch (error) {
        throw new Error(error.response?.data?.message || "Failed to fetch click data");
      }
    },
    select: (data) => {
      return Object.entries(data).map(([clickDate, count]) => ({
        clickDate,
        count
      }));
    },
    onError,
    staleTime: 5 * 60 * 1000, 
    retry: 2, 
    enabled: !!token 
  });
};