import React from 'react';

const data = [
  { name: "Communications", engaged: "50 / 25", acquired: 66, conversion: "10%" },
  { name: "Tactics", engaged: "50 / 25", acquired: 66, conversion: "10%" },
  { name: "Accountability", engaged: "50 / 25", acquired: 66, conversion: "10%" },
  { name: "Applications", engaged: "50 / 25", acquired: 66, conversion: "10%" },
  { name: "Quality", engaged: "50 / 25", acquired: 66, conversion: "10%" },
  { name: "Functionality", engaged: "50 / 25", acquired: 66, conversion: "10%" },
  { name: "Implementation", engaged: "50 / 25", acquired: 66, conversion: "10%" },
  { name: "Infrastructure", engaged: "50 / 25", acquired: 66, conversion: "10%" },
  { name: "Markets", engaged: "50 / 25", acquired: 66, conversion: "10%" },
];

const PostEngagementsTable = () => {
  return (
    <table className="table table-sm bg-base-100 px-6">
      <thead>
        <tr>
          <th>
            <input type="checkbox" className="checkbox" />
          </th>
          <th>Name</th>
          <th>Engaged / Unique</th>
          <th>Acquired</th>
          <th>Conversion</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <th>
              <input type="checkbox" className="checkbox" />
            </th>
            <td>{row.name}</td>
            <td>{row.engaged}</td>
            <td>{row.acquired}</td>
            <td>{row.conversion}</td>
            <td>
              <div role="listbox" className="dropdown dropdown-bottom dropdown-end">
                <label tabIndex={0}>
                  <button className="btn btn-xs btn-outline">
                    Actions
                  </button>
                </label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box menu-xs z-[1]" role="menu">
                  <li role="menuitem">
                    <a href="/">Edit</a>
                  </li>
                  <li role="menuitem">
                    <a href="/">Rename</a>
                  </li>
                  <li role="menuitem">
                    <a href="/">Delete</a>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PostEngagementsTable;