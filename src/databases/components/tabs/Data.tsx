import Dropdown from '@/shared/components/Dropdown';
import { getEnumValues } from '@/shared/domain/helpers';
import { DataStructures, SupportedDataTypes } from '@/databases/domain/types';
import { SelectChangeEvent } from '@mui/material/Select';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useActions } from '@/hooks/useActions';

export default function Data() {
  const { addDataStructure } = useActions();

  const {
    dataStructure: selectedDataStructure,
    supportedDataTypes: selectedSupportedDataTypes,
  } = useTypedSelector((state) => ({
    dataStructure: state.dataStructure.dataStructure,
    supportedDataTypes: state.dataStructure.supportedDataTypes,
  }));

  const handleChange =
    (type: 'dataStructure' | 'supportedDataTypes') =>
    (event: SelectChangeEvent) => {
      const newValue = event.target.value;

      addDataStructure({
        ...{
          dataStructure: selectedDataStructure,
          supportedDataTypes: selectedSupportedDataTypes,
        },
        [type]: newValue,
      });
    };

  return (
    <>
      <Dropdown
        multiple={false}
        options={getEnumValues(DataStructures)}
        label='Data Structure'
        handleChange={handleChange('dataStructure')}
        value={selectedDataStructure}
      />

      <Dropdown
        multiple={false}
        options={getEnumValues(SupportedDataTypes)}
        label='Supported Data Types'
        handleChange={handleChange('supportedDataTypes')}
        value={selectedSupportedDataTypes}
      />
    </>
  );
}
