import type { Player } from "./Player";


export type Match = {
    id: string;
    date: Date;
    screenshotId: string | null;
    map: string;
    victory: boolean;
    rounds: number;
    players: Player[];
}