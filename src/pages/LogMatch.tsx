import { Link } from "react-router";
import { Container, Group } from "@mantine/core";
import SelectPlayers from "../components/logMatch/SelectPlayers";
import Scoreboard from "../components/logMatch/Scoreboard";
import { useMatchContext } from "../context/MatchContext";
import SelectMap from "../components/logMatch/SelectMap";
import SelectDate from "../components/shared/SelectDate";


export default function LogMatch() {
    const { selectedPlayers, setSelectedPlayers, scoreboard } = useMatchContext();

    //TODO: Make a MatchDetails component that holds SelectMap, SelectDate, RoundsPlayed, MatchResult (win vs loss)

    return (
        <>
            <Link to="/">Back to Home</Link>

            <Container>
                <SelectPlayers players={selectedPlayers} setPlayers={setSelectedPlayers} />
                <Group>
                    <SelectMap />
                    <SelectDate />
                </Group>

                <Scoreboard scoreboard={scoreboard} />
            </Container>
        </>
    );
}