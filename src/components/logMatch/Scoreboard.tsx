import { Table } from "@mantine/core";
import ScoreboardRow from "./ScoreboardRow";
import type { PlayerScore } from "../../types/models";

type ScoreboardProps = {
  scoreboard: PlayerScore[];
}

export default function Scoreboard({ scoreboard }: ScoreboardProps){


  return(
    <Table verticalSpacing="sm" withRowBorders={false}>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Player</Table.Th>
          <Table.Th>Score</Table.Th>
          <Table.Th>Plants</Table.Th>
          <Table.Th>Defuses</Table.Th>
          <Table.Th>Kills</Table.Th>
          <Table.Th>Deaths</Table.Th>
        </Table.Tr>
      </Table.Thead>

      <Table.Tbody>
        {scoreboard.map(player => (
          <ScoreboardRow key={player.name} player={player} />
        ))}
      </Table.Tbody>
    </Table>
  )

}