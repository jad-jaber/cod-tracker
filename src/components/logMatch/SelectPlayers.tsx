import { type Dispatch, type SetStateAction } from "react";
import { MultiSelect } from '@mantine/core';


type SelectPlayersProps = {
  activePlayers: string[] | [];
  setActivePlayer: Dispatch<SetStateAction<string[] | []>>;
}

export default function SelectPlayers({ activePlayers, setActivePlayer }: SelectPlayersProps){
  const squad = ["Jad", "Faisal", "Chris", "Rami", "Sina", "Angelo", "Mike", "Jacob"]; 

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