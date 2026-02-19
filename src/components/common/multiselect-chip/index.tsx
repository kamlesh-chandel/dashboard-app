import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import type { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import type { MultipleSelectChipProps } from '@/types/ui.types';
import CancelIcon from '@mui/icons-material/Cancel';
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 48 * 4.5 + 8,
      width: 260,
    },
  },
};

function getStyles(name: string, selected: string[], theme: Theme) {
  return {
    fontWeight: selected.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

const MultipleSelectChip = ({
  label,
  value = [],
  options = [],
  onChange,
}: MultipleSelectChipProps) => {
  const theme = useTheme();

  const handleChange = (event: SelectChangeEvent<string[]>) => {
    const {
      target: { value },
    } = event;

    const finalValue = typeof value === 'string' ? value.split(',') : value;

    onChange(finalValue);
  };
  const handleDelete = (chipToDelete: string) => {
    const updated = value.filter((item) => item !== chipToDelete);
    onChange(updated);
  };
  return (
    <FormControl fullWidth>
      <Select
        multiple
        displayEmpty
        value={value}
        onChange={handleChange}
        input={<OutlinedInput />}
        renderValue={(selected) => {
          if (!selected.length) {
            return <span>{label}</span>;
          }

          return (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((val) => {
                const item = options.find((o) => o.value === val);
                return (
                  <Chip
                    key={val}
                    label={item?.label || val}
                    onDelete={() => handleDelete(val)}
                    deleteIcon={
                      <CancelIcon
                        onMouseDown={(e) => e.stopPropagation()}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(val);
                        }}
                      />
                    }
                  />
                );
              })}
            </Box>
          );
        }}
        MenuProps={MenuProps}
      >
        {options.map((opt) => (
          <MenuItem
            key={opt.value}
            value={opt.value}
            style={getStyles(opt.value, value, theme)}
          >
            {opt.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MultipleSelectChip;
