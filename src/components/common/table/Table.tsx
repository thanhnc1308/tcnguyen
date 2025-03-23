import Pagination from './Pagination';

export enum TableColumnDataType {
  String = 'string',
  Boolean = 'boolean',
  Number = 'number',
  Custom = 'custom',
}

export type TableColumn = {
  key: string;
  label: string;
  dataType: TableColumnDataType;
  getCustomCell?: (row: unknown, column: TableColumn) => React.ReactNode;
};

export default async function Table({
  columns,
  rows,
  total,
  rowsPerPage,
  hasActionsColumn,
  getActions,
}: {
  columns: TableColumn[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rows: any[];
  total: number;
  rowsPerPage: number;
  hasActionsColumn: boolean;
  getActions?: (row: unknown) => React.ReactNode;
}) {
  const totalPage = Math.ceil(total / rowsPerPage);

  return (
    <div className='mt-6 flow-root'>
      <div className='inline-block min-w-full align-middle'>
        <div className='rounded-lg bg-gray-50 p-2 md:pt-0'>
          <table className='hidden min-w-full text-gray-900 md:table'>
            <thead className='rounded-lg text-left text-sm font-normal'>
              <tr>
                {columns.map((column: TableColumn) => {
                  return (
                    <th
                      key={column.key}
                      scope='col'
                      className='px-3 py-5 font-medium'
                    >
                      {column.label}
                    </th>
                  );
                })}
                {hasActionsColumn && (
                  <th scope='col' className='px-3 py-3'>
                    <span className='sr-only'>Actons</span>
                  </th>
                )}
              </tr>
            </thead>
            <tbody className='bg-white'>
              {rows?.map((row) => (
                <tr
                  key={row._id}
                  className='w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg'
                >
                  {columns.map((column: TableColumn) => {
                    // type custom
                    if (column.dataType === TableColumnDataType.Custom) {
                      return (
                        <td
                          key={column.key}
                          className='whitespace-nowrap px-3 py-3'
                        >
                          {!!column.getCustomCell &&
                            column.getCustomCell(row, column)}
                        </td>
                      );
                    }

                    // type boolean
                    if (column.dataType === TableColumnDataType.Boolean) {
                      return (
                        <td
                          key={column.key}
                          className='whitespace-nowrap px-3 py-3'
                        >
                          <input
                            type='checkbox'
                            readOnly
                            checked={row[column.key]}
                            className='group block size-4 rounded border bg-white data-[checked]:bg-blue-500'
                          />
                        </td>
                      );
                    }

                    // type number
                    if (column.dataType === TableColumnDataType.Number) {
                      return (
                        <td
                          key={column.key}
                          className='whitespace-nowrap px-3 py-3'
                        >
                          {row[column.key]}
                        </td>
                      );
                    }

                    // type string
                    return (
                      <td
                        key={column.key}
                        className='whitespace-nowrap px-3 py-3'
                      >
                        {row[column.key]}
                      </td>
                    );
                  })}
                  {hasActionsColumn && (
                    <td className='whitespace-nowrap px-3 py-3'>
                      <div className='flex justify-end gap-3'>
                        {!!getActions && getActions(row)}
                      </div>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className='mt-5 flex w-full justify-end'>
        <Pagination totalPage={totalPage} />
      </div>
    </div>
  );
}
