import React, { Component } from 'react'
import { useQuery,gql } from '@apollo/client'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import { useParams } from 'react-router-dom'
const launch_query = gql `
    query LaunchQuery($flight_number: Int!){
        launch(flight_number:$flight_number){
            flight_number,
            launch_year,
            launch_success,
            launch_date_local,
            rocket {
                rocket_id,
                rocket_name,
                rocket_type
            }

        }
    }
`
export function Launch() {
      let {flight_number} = useParams();
      flight_number = parseInt(flight_number);
    const {loading,data,error} = useQuery(launch_query,{
        variables: { flight_number },
      })
      console.log("flight_number"+flight_number);
      console.log("data "+data);
    //   const {mission_name , launch_year , launch_success, rocket: {rocket_id,rocket_name,rocket_type} } = data
    return (
      <h1 className="display-4 my-3">Mission Name</h1>
    )
  
}

export default Launch
