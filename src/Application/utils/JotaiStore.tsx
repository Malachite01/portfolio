import { atomWithDefault } from "jotai/utils";

export const carouselGoToNumber = atomWithDefault<string>(() => "1");