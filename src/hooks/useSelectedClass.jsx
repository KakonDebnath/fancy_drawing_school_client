import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useSelectedClass = () => {
    const { user, loading } = useAuth()
    const { refetch, isLoading, data: selectedClasses = [] } = useQuery({
        queryKey: ['selectedClasses', user.email],
        enabled: !loading,
        queryFn: async() => {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/selectedClass?email=${user?.email}`);
            const data = await response.json();
            return data;
        }
    })
    return [selectedClasses, refetch, isLoading]

}

export default useSelectedClass;