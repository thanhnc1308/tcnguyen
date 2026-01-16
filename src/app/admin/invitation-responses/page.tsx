import {
  paginateInvitationResponses,
  InvitationResponseData,
} from '@/actions/invitation-response.action';
import Search from '@/components/common/table/Search';
import Table, {
  TableColumn,
  TableColumnDataType,
} from '@/components/common/table/Table';
import TableSkeletons from '@/components/common/table/TableSkeletons';
import { DeleteAction } from '@/features/invitation-responses/components/Table';
import { Suspense } from 'react';

export default async function InvitationResponsesPage(props: {
  searchParams?: Promise<{
    query?: string;
    sort?: string;
    page?: string;
    rowsPerPage?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const sort = searchParams?.sort || '';
  const currentPage = Number(searchParams?.page) || 1;
  const rowsPerPage = Number(searchParams?.rowsPerPage) || 10;

  const columns: TableColumn[] = [
    {
      key: 'name',
      label: 'Name',
      dataType: TableColumnDataType.String,
      sortable: true,
    },
    {
      key: 'numberOfGuests',
      label: 'Guests',
      dataType: TableColumnDataType.Number,
    },
    {
      key: 'message',
      label: 'Message',
      dataType: TableColumnDataType.String,
    },
    {
      key: 'createdAt',
      label: 'Submitted At',
      dataType: TableColumnDataType.Custom,
      getCustomCell: (row: unknown) => {
        const response = row as InvitationResponseData;
        const date = new Date(response.createdAt);
        return (
          <span>
            {date.toLocaleDateString('vi-VN')} {date.toLocaleTimeString('vi-VN')}
          </span>
        );
      },
    },
  ];

  const { data: rows, total } = await paginateInvitationResponses({
    queryString: query,
    sortString: sort,
    currentPage,
    rowsPerPage,
  });

  return (
    <div className='w-full px-5'>
      <div className='mt-4 flex items-center justify-between gap-2 md:mt-8'>
        <h1 className='text-2xl font-semibold'>Invitation Responses</h1>
        <div className='w-100'>
          <Suspense key='search'>
            <Search placeholder='Search responses...' />
          </Suspense>
        </div>
      </div>
      <Suspense key={query + currentPage} fallback={<TableSkeletons />}>
        <Table
          columns={columns}
          rows={rows}
          total={total}
          rowsPerPage={rowsPerPage}
          hasActionsColumn
          getActions={(row: unknown) => {
            const response = row as InvitationResponseData;
            return <DeleteAction id={response._id} />;
          }}
        />
      </Suspense>
    </div>
  );
}
