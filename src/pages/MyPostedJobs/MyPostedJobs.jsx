import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const MyPostedJobs = () => {
    const [jobs, setJobs]=useState();
    const {user}=useAuth();
    const axiosSecure = useAxiosSecure()
    console.log(user.email)

    useEffect(()=>{
        // fetch(`http://localhost:3000/jobs?email=${user?.email}`)
        // .then(res=>res.json())
        // .then(data=>setJobs(data))
        axiosSecure.get(`jobs?email=${user?.email}`)
        .then(res=> {
            console.log(res.data)
            setJobs(res.data)
        })


    },[user?.email])
    return (
        <div>
            <h3 className='text-5xl'>My Posted Jobs: {jobs?.length}</h3>
            
            {/* // Table section start from 🙉  */}
            <div className="overflow-x-auto">
        <table className="table">
            {/* head */}
            <thead>
            <tr>
                <th>Sl No</th>
                <th>Job Title</th>
                <th>Dateline</th>
                <th>Application Count</th>
                <th>View Applications</th>
            </tr>
            </thead>
            <tbody>
            {
                jobs?.map((job,index)=>( <tr key={index}>
                    <th>{index+1}</th>
                    <td>{job?.title}</td>
                    <td>{job?.applicationDeadline}</td>
                    <td>{job?.applicationCount}</td>
                    <td>
                        <Link to={`/viewApplications/${job?._id}`}><button className='btn'>View Aplications</button></Link>
                    </td>
                </tr>))

            }

            
            </tbody>
        </table>
</div>
        </div>
    );
};

export default MyPostedJobs;