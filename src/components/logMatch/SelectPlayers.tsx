import { type Dispatch, type SetStateAction } from "react";
import { MultiSelect } from '@mantine/core';
import { squad } from "../../data/squad";

type SelectPlayersProps = {
  activePlayers: string[] | [];
  setActivePlayer: Dispatch<SetStateAction<string[] | []>>;
}

export default function SelectPlayers({ activePlayers, setActivePlayer }: SelectPlayersProps){

  return (
    <MultiSelect
      label="Squad"
      placeholder="Pick the squad members you're playing with"
      maxValues={6}
      data={squad}
      value={activePlayers}
      onChange={setActivePlayer}
    />
  );
}