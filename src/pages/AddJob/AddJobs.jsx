import React from "react";

const AddJob = () => {
  return (
    <div>
      <h3>Hello from add job</h3>
      <form action="">
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
              <div className="location">
                <label className="fieldset-label">Job Location</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Job Location"
                  name="location"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="row-2 grid grid-cols-1 md:grid-cols-2 gap-4 ">
              {/* Job Type */}
              <div className="title">
                <label className="fieldset-label">Job Type</label>
                <select
                  defaultValue="Pick a font"
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
                  defaultValue="Pick a font"
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
                    defaultValue="Pick a font"
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
