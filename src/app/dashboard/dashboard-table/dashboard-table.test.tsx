import { mockData } from '../../../../mocks/mock-spacecraft';
import { act, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { DashboardTable } from './dashboard-table';
import { vi } from 'vitest';
//import { Spacecraft } from 'spacecraft';


// Mock the DataTable component
vi.mock('@metrostar/comet-extras', async (importOriginal) => {
  const actual = (await importOriginal()) || {};
  return {
    ...actual,
    DataTable: ({ columns, data }) => (
      <table className="data-table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.accessorKey}>{col.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {columns.map((col) => (
                <td key={col.accessorKey}>{row[col.accessorKey]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    ),
  };
});

describe('DashboardTable', () => {
  test('should render successfully', () => {
    const { baseElement } = render(
      <RecoilRoot>
        <BrowserRouter>
          <DashboardTable items={[]} />
        </BrowserRouter>
      </RecoilRoot>,
    );
    expect(baseElement).toBeTruthy();
  });

  test('should render with mock data', async () => {
    const { baseElement } = render(
      <RecoilRoot>
        <BrowserRouter>
          <DashboardTable items={mockData.items as Spacecraft[]} />
        </BrowserRouter>
      </RecoilRoot>,
    );
    await act(async () => {
      expect(baseElement).toBeTruthy();
    });
    expect(baseElement.querySelector('.data-table')).toBeDefined();
    expect(
      baseElement.querySelectorAll('.data-table > tbody > tr'),
    ).toHaveLength(10);
  });
});
