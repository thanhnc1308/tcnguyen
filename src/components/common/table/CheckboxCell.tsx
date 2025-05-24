export default async function CheckboxCell({ checked }: { checked: boolean }) {
  return (
    <input
      type='checkbox'
      checked={checked}
      readOnly
      className='rounded-md border-gray-300 text-green-500 focus:ring-green-500'
    />
  );
}
