import React from 'react'
import { useQuery, gql } from '@apollo/client';
import Launchitem from './Launchitem';
import MissionKey from './MissionKey';


const Launches_Query = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

const Launches = () => {
  const { loading, error, data } = useQuery(Launches_Query);
  if (loading) return <h4>Loading...</h4>;
  if (error) {
    console.log(error);
    return null; // Or display an error message
  }
  console.log(data);
  return (
    <div>
      <MissionKey />
      {data.launches.map((item) => (
        <Launchitem key={item.flight_number} launch={item} />
      ))}
    </div>
  );
};

export default Launches;
