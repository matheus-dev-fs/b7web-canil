import { petData } from "../data/pets.data.js"
import type { PetData } from "../interfaces/petData.interface.js";
import type { PetType } from "../types/petData/petType.type.js";

export const Pet = {
    getAll: (): PetData[] => {
        return petData;
    },
    getByType: (type: PetType): PetData[] => {
        const validTypes: PetType[] = ['dog', 'cat', 'fish'];
        const isInvalidType: boolean = typeof type !== 'string' || !validTypes.includes(type);

        if (isInvalidType) {
            return [];
        }

        return petData.filter((item: PetData): boolean => item.type === type);
    },
    getByName: (name: string): PetData[] => {
        const isInvalidType: boolean = typeof name !== 'string' || name === '';;

        if (isInvalidType) {
            return [];
        }

        return petData.filter((item: PetData): boolean =>
            item.name
                .toLocaleLowerCase()
                .includes(name.toLocaleLowerCase())
        );
    }
}