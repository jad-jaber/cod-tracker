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
      label="Squad"
      placeholder="Pick the squad members you're playing with"
      maxValues={6}
      data={squad}
      value={players}
      onChange={setPlayers}
    />
  );
}