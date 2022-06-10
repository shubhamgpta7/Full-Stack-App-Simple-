import React, { Component } from 'react';
import {Variables} from './Variables.js';

export class Department extends Component{

    constructor(props){
        super(props);
        this.state = {
            departments:[]
        }
    }

    refreshList(){
        fetch(Variables.API_URL+'department')
        .then(resposne=>resposne.json())
        .then(data=>{
            this.setState({departments:data});
        })
    }

    componentDidMount(){
        this.refreshList();
    }


    render(){

        const {
            departments
        }=this.state;


        return(
            <div>
                <table className='table table-stripped'>
                    <thead>
                        <tr>
                            <th>Department Id</th>
                            <th>Department Name</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {departments.map(dep=>
                            <tr key={dep.departmentId}>
                                <td>{dep.departmentId}</td>
                                <td>{dep.departmentName}</td>
                                <td>
                                    <button className='btn btn-primary m-2'>Edit</button>
                                    <button className='btn btn-danger m-2'>Delete</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}
