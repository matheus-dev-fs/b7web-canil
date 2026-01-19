import type { PetSex } from "../types/petData/petSex.type.js";
import type { PetType } from "../types/petData/petType.type.js";

export interface PetData {
    type: PetType;
    image: string;
    name: string;
    color: string;
    sex: PetSex;
}