import type { QueryKey } from "@tanstack/react-query";

export const createUsePokemon = (name: string): QueryKey => [name];
