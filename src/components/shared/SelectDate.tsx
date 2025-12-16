import { DatePickerInput } from '@mantine/dates';
import { useMatchContext } from "../../context/MatchContext";

export default function SelectDate() {
  const { selectedDate, setSelectedDate } = useMatchContext();

  return (
    <DatePickerInput
      label="DATE"
      placeholder="Pick a date"
      value={selectedDate}
      onChange={setSelectedDate}
      valueFormat="YYYY-MM-DD"
      maxDate={new Date()}
      clearable={false}
    />
  );
}
