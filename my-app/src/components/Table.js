import React, { Component } from 'react';
import './Table.css';
import ListTab from './ListTab';
class  Table extends Component {
    constructor() {
        super();
            this.listTable = [
                {
                  stt : 1,
                  first : "Mark",
                  last : "Otto",
                  handle : "@mdo"
                },
                {
                  stt : 2,
                  first : "Mark",
                  last : "Otto",
                  handle : "@mdo"
                },
                {
                  stt : 3,
                  first : "Mark",
                  last : "Otto",
                  handle : "@mdo"
                },
                {
                  stt : 4,
                  first : "Mark",
                  last : "Otto",
                  handle : "@mdo"
                }
              ];
            }
        
    render() {
        let items = (
                    <div className="Table">
                        <table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Handle</th>
                                </tr>
                            </thead>
                            {
                                this.listTable.map((item, index) => 
                                    (<ListTab listTab={item} key={index}/>)
                                )
                            }
                        </table>
                    </div>
                );
        return items;
    };
  };

export default Table;