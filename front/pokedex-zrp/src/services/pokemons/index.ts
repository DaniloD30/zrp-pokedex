import { PokemonResponse } from "./types";
import { ApiResponse } from "../../libs/axios/types";
import { useQuery } from "@tanstack/react-query";
import { createUsePokemon } from "./keys";
import { baseApi } from "../../libs/axios";

export const usePokemon = (name: string) => {
  return useQuery({
    queryKey: createUsePokemon(name),
    queryFn: async () => {
      const url = `pokemon/${name}/abilities`;

      const dataApi = await baseApi.get<ApiResponse<PokemonResponse>>(url);

      return dataApi.data.data;
    },
    retry: false,
    enabled: name !== undefined && name !== "",
  });
};
