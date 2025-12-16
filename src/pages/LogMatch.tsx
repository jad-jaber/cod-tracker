import { Link } from "react-router";
import { Container } from "@mantine/core";
import SelectPlayers from "../components/logMatch/SelectPlayers";
import Scoreboard from "../components/logMatch/Scoreboard";
import { useMatchContext } from "../context/MatchContext";


export default function LogMatch() {
    const { selectedPlayers, setSelectedPlayers, scoreboard } = useMatchContext();

    return (
        <>
            <Link to="/">Back to Home</Link>

            <Container>
                <SelectPlayers players={selectedPlayers} setPlayers={setSelectedPlayers} />

                <Scoreboard scoreboard={scoreboard} />
            </Container>
        </>
    );
}