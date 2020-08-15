import React from 'react';
import {Table} from 'react-bootstrap';

export const StandingsPage = () => {

  return (
    <>
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <h2 className="mb-4">Mini League Standings</h2>
          <Table striped bordered hover style={{backgroundColor: "white"}}>
          <thead>
            <tr>
              <th>#</th>
              <th>Team</th>
              <th>Played</th>
              <th>Won</th>
              <th>Drawn</th>
              <th>Lost</th>
              <th>GF</th>
              <th>GA</th>
              <th>GD</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td className="text-left">
                <span className="scoreboard-team-icon" style={{backgroundColor: 'darkslateblue'}}/>
                <span className='scoreboard-team-name'> Team A</span>
                <span className='scoreboard-up'> ▲</span>
              </td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td><b>0</b></td>
            </tr>
            <tr>
              <td>2</td>
              <td className="text-left">
                <span className="scoreboard-team-icon" style={{backgroundColor: 'cadetblue'}}/>
                <span className='scoreboard-team-name'> Team B</span>
                <span className='scoreboard-down'> ▼</span>
              </td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td><b>0</b></td>
            </tr>
            <tr>
              <td>3</td>
              <td className="text-left">
                <span className="scoreboard-team-icon" style={{backgroundColor: 'darkorange'}}/>
                <span className='scoreboard-team-name'> Team C</span>
                <span className='scoreboard-up'> ▲</span>
              </td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td><b>0</b></td>
            </tr>
            <tr>
              <td>4</td>
              <td className="text-left">
                <span className="scoreboard-team-icon" style={{backgroundColor: 'lightblue'}}/>
                <span className='scoreboard-team-name'> Team D</span>
                <span className='scoreboard-same'> -</span>
              </td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td><b>0</b></td>
            </tr>
            <tr>
              <td>5</td>
              <td className="text-left">
                <span className="scoreboard-team-icon" style={{backgroundColor: 'yellow'}}/>
                <span className='scoreboard-team-name'> Team E</span>
                <span className='scoreboard-down'> ▼</span>
              </td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td><b>0</b></td>
            </tr>
          </tbody>
        </Table>
        </div>
    </>);
};
