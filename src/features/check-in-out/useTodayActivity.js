import { useQuery } from "@tanstack/react-query";
import { getStaysTodayActivity } from "../../services/apiBookings";

const useTodayActivity = () => {
  const { data: activities, isLoading } = useQuery({
    queryFn: getStaysTodayActivity,
    queryKey: ["today-activity"],
    staleTime: Infinity,
    refetchInterval: 1000 * 60 * 60,
  });

  return {
    activities,
    isLoading,
  };
};

export default useTodayActivity;
