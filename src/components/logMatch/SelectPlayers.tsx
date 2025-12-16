import { type Dispatch, type SetStateAction } from "react";
import { MultiSelect } from '@mantine/core';
import { squad } from "../../data/squad";

type SelectPlayersProps = {
  players: string[] | [];
  setPlayers: Dispatch<SetStateAction<string[] | []>>;
}

export default function SelectPlayers({ players, setPlayers }: SelectPlayersProps){

  return (
    <MultiSelect
      w={"50%"}
      label="SQUAD"
      placeholder=""
      maxValues={6}
      data={squad}
      value={players}
      onChange={setPlayers}
    />
  );
}