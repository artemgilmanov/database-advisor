import Typography from '@mui/material/Typography';
import { SelectChangeEvent } from '@mui/material/Select';
import Field from '@/shared/components/Field';
import Dropdown from '@/shared/components/Dropdown';
import { getEnumValues } from '@/shared/domain/helpers';
import { DataStructures } from '@/databases/domain/types';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useActions } from '@/hooks/useActions';

export default function Data() {
  const { addDataStructure } = useActions();

  const {
    dataStructure: selectedDataStructure,
    supportedDataTypes: selectedSupportedDataTypes,
  } = useTypedSelector((state) => state.dataStructure);

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
      <Typography variant='h5'>Unit (Row/Document) Size</Typography>
      <Field label='Mean Unit Size (KB)' value='5' />
      <Field label='Max Unit Size (KB)' value='8' />

      <Typography variant='h5'>DB Size</Typography>
      <Field label='DB Size (GB)' value='100' />
      <Field label='DB Size Growth per Month (GB)' value='5' />

      {/* <Dropdown
        multiple={false}
        options={getEnumValues(SupportedDataTypes)}
        label='Supported Data Types'
        handleChange={handleChange('supportedDataTypes')}
        value={selectedSupportedDataTypes}
      /> */}
    </>
  );
}
