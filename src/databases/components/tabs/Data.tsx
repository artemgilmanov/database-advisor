import { useState } from 'react';
import Dropdown from '@/shared/components/Dropdown';
import { getEnumValues } from '@/shared/domain/helpers';
import { DataStructures } from '@/databases/domain/types';
import { useDispatch } from 'react-redux';
import { addDataStructure } from '@/redux/DataStructure/actionCreators';
import { SelectChangeEvent } from '@mui/material/Select';

export default function Data() {
  const dispatch = useDispatch();

  const [selectedValue, setSelectedValue] = useState<string>(
    getEnumValues(DataStructures)[0]
  );

  const handleChange = (event: SelectChangeEvent) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);

    dispatch(
      addDataStructure({ dataStructure: newValue, supportedDataTypes: '' })
    );
  };

  return (
    <>
      <Dropdown
        multiple={false}
        options={getEnumValues(DataStructures)}
        label='Data Structure'
        handleChange={handleChange}
        value={selectedValue}
      />

      <Dropdown
        multiple
        options={['Financial', 'JSON', 'XML', 'IP', 'Spatial', 'Time Series']}
        label='Supported Data Types'
      />
    </>
  );
}
