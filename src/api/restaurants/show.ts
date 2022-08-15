import { fetcher } from "../../services/api";

export const showRestaurant = async (id: number) => {
  const response = await fetcher(`/restaurants/${id}`, {
    method: "GET",
  });

  return response;
};
