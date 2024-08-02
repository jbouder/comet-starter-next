'use client';

import DataTable from '../../../components/comet/data-table.tsx';
import { Spacecraft } from '../../../types/spacecraft';
import { ColumnDef } from '@tanstack/react-table';
import React, { useState } from 'react';
import Link from 'next/link';
import { TableData } from '../../../types/data';

interface DashboardTableProps {
  items: Spacecraft[] | undefined;
}

export const DashboardTable = ({ items }: DashboardTableProps): React.ReactElement => {
  const [data, setData] = useState<TableData[]>();

  React.useEffect(() => {
    if (typeof window !== 'undefined' && items) {
      const newData: TableData[] = [];
      items.forEach((item: Spacecraft) => {
        newData.push({
          name: (
            <Link id={`details-link-${item.id}`} href={`/details/${item.id}`}>
              {item.name}
            </Link>
          ),
          affiliation: item.affiliation,
          dimensions: item.dimensions,
          appearances: item.appearances,
        });
      });
      setData(newData);
    }
  }, [items]);

  const cols = React.useMemo<ColumnDef<TableData>[]>(
    () => [
      {
        accessorKey: 'name',
        header: 'Name',
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: 'affiliation',
        header: 'Affiliation',
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: 'dimensions',
        header: 'Dimensions',
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: 'appearances',
        header: 'Appearances',
        cell: (info) => info.getValue(),
      },
    ],
    [],
  );

  return data ? (
    <DataTable
      id="launch-table"
      className="width-full"
      columns={cols}
      data={data}
      sortable
      sortCol="appearances"
      sortDir="desc"
    />
  ) : (
    <></>
  );
};
