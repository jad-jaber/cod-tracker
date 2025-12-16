import type { PlayerScore } from "./PlayerScore";


export type Match = {
    id: string;
    date: Date;
    screenshotId: string | null;
    map: string;
    victory: boolean;
    rounds: number;
    players: PlayerScore[];
}