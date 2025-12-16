import { Select } from "@mantine/core";
import { useMatchContext } from "../../context/MatchContext";
import { mw3Maps } from "../../data/mw3Maps";

export default function SelectMap() {
  const { selectedMap, setSelectedMap } = useMatchContext();

  return (
    <Select
      label="MAP"
      placeholder="Choose a map"
      data={mw3Maps} 
      value={selectedMap}
      onChange={setSelectedMap}
      searchable
      clearable
    />
  );
}
