'use client';
import { Spinner } from '@metrostar/comet-extras';
import { Card } from '@metrostar/comet-uswds';
import { Spacecraft } from '../../../types/spacecraft';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'next/navigation';
import ErrorNotification from '../../../components/error-notification/error-notification';
import useAuth from '../../../hooks/use-auth';
import axios from '@utils/axios';

const Details = (): React.ReactElement => {
  const { id } = useParams() as Record<string, string>;
  const { isSignedIn } = useAuth();
  const { isLoading, error, data } = useQuery<Spacecraft, { message: string }>({
    queryKey: ['details', id],
    queryFn: () =>
      axios.get(`/spacecraft/${id}`).then((response) => {
        return response.data;
      }),

    enabled: isSignedIn && !!id,
  });

  return (
    <div className="grid-container">
      <div className="grid-row">
        <div className="grid-col">
          <h1>Details</h1>
        </div>
      </div>
      {error && (
        <div className="grid-row padding-bottom-2">
          <div className="grid-col">
            <ErrorNotification error={error.message} />
          </div>
        </div>
      )}
      <div className="grid-row">
        <div className="grid-col">
          {isLoading ? (
            <Spinner id="spinner" type="small" loadingText="Loading..." className="padding-top-2" />
          ) : data ? (
            <Card id="details-card">
              <ul>
                <li>
                  <b>Name:</b> {data.name}
                </li>
                <li>
                  <b>Description:</b> {data.description}
                </li>
                <li>
                  <b>Affiliation:</b> {data.affiliation}
                </li>
                <li>
                  <b>Dimensions:</b> {data.dimensions}
                </li>
                <li>
                  <b>Appearances:</b> {data.appearances}
                </li>
              </ul>
            </Card>
          ) : (
            <>No items found</>
          )}
        </div>
      </div>
    </div>
  );
};

export default Details;
