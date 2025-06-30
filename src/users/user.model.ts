export type Departement = "IT" | "HR" | "Marketing" | "Sourcing";
export type Level = "J" | "S" | "M";
export interface User {
    id: string,
    name: string,
    departement: Departement,
    level: Level,
} 