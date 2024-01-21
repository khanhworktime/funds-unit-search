import { createContext } from "react";
import { Data } from "@/models";

export const DataContext = createContext<Data[]>([]);
