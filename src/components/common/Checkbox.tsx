'use client';

export default function Checkbox({
  checked,
  readOnly,
  disabled,
  onChange,
}: {
  checked: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}) {
  return (
    <input
      type='checkbox'
      checked={checked}
      readOnly={readOnly}
      disabled={disabled}
      onChange={(e) => {
        if (onChange) {
          onChange(e.target.checked);
        }
      }}
      className='rounded-md border-gray-300 text-green-500 focus:ring-green-500'
    />
  );
}
