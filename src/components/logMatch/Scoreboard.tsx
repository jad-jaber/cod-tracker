import { act, useState } from "react";
import type { Player } from "../../types/models/Player";
import { Table } from "@mantine/core";
import ScoreboardRow from "./ScoreboardRow";

type ScoreboardProps = {
  activePlayers: string[];
}

export default function Scoreboard({activePlayers}: ScoreboardProps){

  function renderScoreboardRows(){
    return activePlayers.map(p => {
      const playerRow: Player = {
        name: p,
        score: 0,
        plants: 0,
        defuses: 0,
        kills: 0,
        deaths: 0
      }

      return(
        <ScoreboardRow player={playerRow} />
      )
    });
  }

  return(
    <Table>
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
      <Table.Tbody>{renderScoreboardRows()}</Table.Tbody>
    </Table>
  )

}