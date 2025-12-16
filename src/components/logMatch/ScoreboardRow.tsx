import { Table, TextInput } from "@mantine/core";
import type { PlayerScore } from "../../types/models";
import { useMatchContext } from "../../context/MatchContext";

type ScoreboardRowProps = {
  player: PlayerScore;
}

export default function ScoreboardRow({ player }: ScoreboardRowProps){
  const { updatePlayerScore } = useMatchContext();
  const fields: (keyof Omit<PlayerScore, "name">)[] = ["score", "plants", "defuses", "kills", "deaths"];

  const handleScoreFieldUpdate = (field: keyof Omit<PlayerScore, "name">, inputValue: string ) => {
    const value = inputValue === "" ? undefined : Math.max(0, Number(inputValue));
    updatePlayerScore(player.name, field, value);
  }

  return(
    <Table.Tr>
      <Table.Td>{player.name}</Table.Td>
        {fields.map(field => (
          <Table.Td key={field}>
            <TextInput
              variant="filled"
              type="number"
              value={player[field] ?? ""}
              onChange={(e) => handleScoreFieldUpdate(field, e.target.value)}
            />
          </Table.Td>
        ))}
    </Table.Tr>
  )

}