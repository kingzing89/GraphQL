import React from 'react'
import classnames from "classnames"
import moment from 'moment'
import { Link } from 'react-router-dom'
export default function Launchitem({launch:{flight_number,mission_name,launch_date_local,launch_success}}) {
 
  return (
    <div className='card card-body mb-3'>
      <div className='row'>
        <div className="col-md-9">
          <h4>Misson:<span className={classnames({
            "text-success":launch_success,
            "text-danger":!launch_success
          })}>{mission_name}</span></h4>
          <p>
          Date:{moment(launch_date_local).format("YYYY-MM-DD")} 
          </p>
        </div>
        <div className="col-md-3">
          <Link to={`/launch/${flight_number}`} className='btn btn-secondary'>Launch Details</Link>
        </div>
      </div>
    </div>
  )
}
