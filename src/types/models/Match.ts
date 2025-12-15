import type { Player } from "./Player";


export type Match = {
    id: string;
    date: Date;
    screenshotId: string;
    map: string;
    victory: boolean;
    players: Player[];
}