import { createContext, useContext, useEffect, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";
import type { PlayerScore, Match } from "../types/models";

export interface MatchContextState {
    selectedPlayers: string[];
    setSelectedPlayers: Dispatch<SetStateAction<string[]>>
    scoreboard: PlayerScore[];
    updatePlayerScore: (playerName: string, field: keyof Omit<PlayerScore, "name">, value: number | undefined) => void;
}

const MatchContext = createContext<MatchContextState | undefined>(undefined);


export function MatchProvider({ children }: {children: ReactNode}) {
    const [selectedPlayers, setSelectedPlayers] = useState<string[]>([]);
    const [scoreboard, setScoreboard] = useState<PlayerScore[]>([]);

    //----- A new row in the scoreboard
    const emptyScore = (name: string): PlayerScore => ({
        name,
        score: undefined,
        plants: undefined,
        defuses: undefined,
        kills: undefined,
        deaths: undefined,
    });

    
    //----- Sync scoreboard when selected players change
    useEffect(() => {
        setScoreboard(prev =>
            selectedPlayers.map( name => prev.find(p => p.name === name) ?? emptyScore(name))
        );
    }, [selectedPlayers]);



    //----- Update a field from a player's scoreboard
    const updatePlayerScore = (playerName: string, field: keyof Omit<PlayerScore, "name">, value: number | undefined) => {
        setScoreboard(prev =>
            prev.map(p => p.name === playerName ? { ...p, [field]: value } : p)
        );
    };


    return (
        <MatchContext.Provider value={{
                selectedPlayers,
                setSelectedPlayers,
                scoreboard,
                updatePlayerScore,
            }}
        >
            {children}
        </MatchContext.Provider>
    );
};


export const useMatchContext = (): MatchContextState => {
    const context = useContext(MatchContext);

    if (!context) {
    throw new Error("useMatchContext must be used within a MatchProvider");
    }

    return context;
};

export default MatchContext;
