import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

const AddJob = () => {
  const naviget = useNavigate()
  const {user} = useAuth()
  // console.log(user)

  const handleAddJob = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    const { min, max, currency, ...newJob } = initialData;
    console.log(newJob);
    newJob.salaryRange = { min, max, currency };
    newJob.requirements = newJob.requirements.split("\n");
    newJob.responsibilities = newJob.responsibilities.split("\n");
    console.log(newJob);

    fetch('http://localhost:3000/jobs', {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
    .then(res=>res.json())
    .then(data=>{
       if (data.insertedId) {

                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Your Job has been saved",
                  showConfirmButton: false,
                  timer: 1500,
                });

                naviget('/myPostedJobs')
              }
    })
  };
  return (
    <div className="w-11/12 mx-auto">
      <h3>Hello from add job</h3>
      <form action="" onSubmit={handleAddJob}>
        <div className="card-body ">
          <fieldset className="fieldset ">
            {/* Row 1 */}
            <div className="row-1 grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              {/* Title */}
              <div className="title">
                <label className="fieldset-label">Job Title</label>
                <input
                  type="text"
                  name="title"
                  className="input w-full"
                  placeholder="Job Title"
                />
              </div>

              {/* Job Location */}

              <div className="title">
                <label className="fieldset-label">Company Name</label>
                <input
                  type="text"
                  name="company"
                  className="input w-full"
                  placeholder="Company name"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="row-2 grid grid-cols-1 md:grid-cols-2 gap-4 ">
              {/* Job Type */}
              <div className="title">
                <label className="fieldset-label">Job Type</label>
                <select
                  name="jobType"
                  defaultValue="Select a Job Type"
                  className="select border-1 border-gray-500 input w-full select-ghost"
                >
                  <option disabled={true}>Select a Job Type</option>
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Intern</option>
                </select>
              </div>

              {/* Job Field*/}
              <div className="job-field">
                <label className="fieldset-label">Job Field</label>
                <select
                  defaultValue="Select a Job Field"
                  name="category"
                  className="select border-1 border-gray-500 w-full select-ghost"
                >
                  <option disabled={true}>Select a Job Field</option>
                  <option>Engineering</option>
                  <option>Marketing</option>
                  <option>Finance</option>
                  <option>Teachnig</option>
                </select>
              </div>
            </div>

            {/* Row 3 */}
            <div className="row-2 my-4">
              {/* Salery Range */}
              <label className="fieldset-label my-4">Salary Range</label>
              <div className="salary-range-div grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="salary">
                  <label className="fieldset-label">Min</label>

                  <input
                    type="text"
                    name="min"
                    className="input w-full"
                    placeholder="Minmum Salary"
                  />
                </div>
                <div className="salary">
                  <label className="fieldset-label">Max</label>
                  <input
                    type="text"
                    name="max"
                    className="input w-full"
                    placeholder="Maximum Salary"
                  />
                </div>
                {/* Currency*/}
                <div className="job-field">
                  <label className="fieldset-label">Currency</label>
                  <select
                    defaultValue="Currency"
                    name="currency"
                    className="select border border-gray-500 w-full select-ghost"
                  >
                    <option disabled={true}>Currency</option>
                    <option>BDT</option>
                    <option>USD</option>
                    <option>INR</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Row 4 */}
            <div className="salary">
              <label className="fieldset-label">Job Description</label>

              <textarea
                type="text"
                name="description"
                className="textarea w-full"
                placeholder="Job Description"
              ></textarea>
            </div>

            {/** Row 5 */}
            <div className="row-1 grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              {/* Title */}
              <div className="location">
                <label className="fieldset-label">Job Requirements</label>
                <textarea
                  type="text"
                  className="textarea w-full"
                  placeholder="Write each requirement in new line"
                  name="requirements"
                />
              </div>
              {/* Job Requirements */}
              <div className="location">
                <label className="fieldset-label">Job Responsibilities</label>
                <textarea
                  type="text"
                  className="textarea w-full"
                  placeholder="Write each requirement in new line"
                  name="responsibilities"
                />
              </div>
            </div>

            {/** Row 6 */}
            <div className="row-1 grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              {/* Job Requirements */}
              <div className="location">
                <label className="fieldset-label">Job Location</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Job Location"
                  name="location"
                />
              </div>

              <div className="title">
                <label className="fieldset-label">Job Status</label>
                <input
                  type="text"
                  name="status"
                  className="input w-full"
                  placeholder="Job Status"
                />
              </div>
            </div>

            {/** Row 7 */}
            <div className="row-1 grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              {/* Job Requirements */}
              <div className="hr-info">
                <div className="hr-name">
                  <label className="fieldset-label">HR Name</label>
                  <input
                    type="text"
                    defaultValue={user?.displayName}
                    className="input w-full"
                    placeholder="HR Name"
                    name="hr_name"
                  />
                </div>

                <div className="title">
                  <label className="fieldset-label">HR e-mail</label>
                  <input
                    type="email"
                    name="hr_email"
                    defaultValue={user?.email}
                    className="input w-full"
                    placeholder="HR email"
                  />
                </div>
              </div>

              <div className="company-logo">
                <div className="title">
                  <label className="fieldset-label">Company Logo</label>
                  <input
                    type="text"
                    name="company_logo"
                    className="input w-full"
                    placeholder="Company logo url"
                  />
                </div>

                <div className="deadline">
                  <label className="fieldset-label">Deadline</label>
                  <input
                    type="date"
                    name="applicationDeadline"
                    className="input w-full"
                    placeholder="Application Deadline"
                  />
                </div>
              </div>
            </div>

            <button type="submit" className="btn btn-neutral mt-4">
              Submit Job
            </button>
          </fieldset>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
