import Dropdown from '@/shared/components/Dropdown';
import { SelectChangeEvent } from '@mui/material/Select';
import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';

export default function QualityAttributes() {
  const { addQualityAttributes } = useActions();

  const {
    latency: selectedLatency,
    throughput: selectedThroughput,
    scalability: selectedScalability,
    availability: selectedAvailability,
    security: selectedSecurity,
    maintainability: selectedMaintainability,
  } = useTypedSelector((state) => state.qualityAttributes);

  const handleChange =
    (
      type:
        | 'latency'
        | 'throughput'
        | 'scalability'
        | 'availability'
        | 'security'
        | 'maintainability'
    ) =>
    (event: SelectChangeEvent) => {
      const newValue = event.target.value;

      addQualityAttributes({
        ...{
          latency: selectedLatency,
          throughput: selectedThroughput,
          scalability: selectedScalability,
          availability: selectedAvailability,
          security: selectedSecurity,
          maintainability: selectedMaintainability,
        },
        [type]: newValue,
      });
    };

  return (
    <>
      <Dropdown
        multiple={false}
        options={['SomeLatency1', 'SomeLatency2', 'SomeLatency3']}
        label='Latency'
        handleChange={handleChange('latency')}
        value={selectedLatency}
      />
      <Dropdown
        multiple={false}
        options={['SomeThroughput1', 'SomeThroughput2', 'SomeThroughput3']}
        label='Throughput'
        handleChange={handleChange('throughput')}
        value={selectedThroughput}
      />
      <Dropdown
        multiple={false}
        options={['SomeScalability1', 'SomeScalability2', 'SomeScalability3']}
        label='Scalability'
        handleChange={handleChange('scalability')}
        value={selectedScalability}
      />

      <Dropdown
        multiple={false}
        options={[
          'SomeAvailability1',
          'SomeAvailability2',
          'SomeAvailability3',
        ]}
        label='Availability'
        handleChange={handleChange('availability')}
        value={selectedAvailability}
      />

      <Dropdown
        multiple={false}
        options={['SomeSecurity1', 'SomeSecurity2', 'SomeSecurity3']}
        label='Security'
        handleChange={handleChange('security')}
        value={selectedSecurity}
      />

      <Dropdown
        multiple={false}
        options={[
          'SomeMaintainability1',
          'SomeMaintainability2',
          'SomeMaintainability3',
        ]}
        label='Maintainability'
        handleChange={handleChange('maintainability')}
        value={selectedMaintainability}
      />
    </>
  );
}
