import { Link } from "react-router";
import { useEffect, useState } from "react";
import type { Match, Player } from "../types/models/index";
import { Center, Container } from "@mantine/core";
import SelectPlayers from "../components/logMatch/SelectPlayers";
import ScoreboardRow from "../components/logMatch/ScoreboardRow";
import Scoreboard from "../components/logMatch/Scoreboard";


export default function LogMatch() {
    const [ activePlayers, setActivePlayers ] = useState<string[] | []>([]);

    useEffect(() =>{
        console.log("active players changed", activePlayers);
    },[activePlayers]);



    return (
        <>
            <div style={{ padding: 24 }}>
                <Link to="/">Back to Home</Link>
            </div>
            <Container>
                <SelectPlayers activePlayers={activePlayers} setActivePlayer={setActivePlayers} />
                <Scoreboard activePlayers={activePlayers} />
            </Container>
        </>
    );
}