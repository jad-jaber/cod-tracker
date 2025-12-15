import { useState } from "react";
import type { Player } from "../../types/models/Player";
import { Table } from "@mantine/core";

type ScoreboardRowProps = {
  player: Player;
}

export default function ScoreboardRow({player}: ScoreboardRowProps){

  return(
    <Table.Tr key={player.name}>
      <Table.Td>{player.name}</Table.Td>
      <Table.Td>{player.score}</Table.Td>
      <Table.Td>{player.plants}</Table.Td>
      <Table.Td>{player.defuses}</Table.Td>
      <Table.Td>{player.kills}</Table.Td>
      <Table.Td>{player.deaths}</Table.Td>
    </Table.Tr>
  )

}