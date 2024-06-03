import React from 'react';
import { Link } from 'react-router-dom';
import { MOCK_TABLE_DATA } from '../../enums';
import InstagramIcon from "../../assets/svgs/instagram.svg";
import MessengerBlurpleIcon from "../../assets/svgs/message-blurple.svg";

const PostEngagementsTable = () => {
  return (
    <div className="overflow-y-hidden overflow-x-scroll">
      <table className="table table-sm bg-base-100 px-6">
        <thead>
          <tr>
            <th colSpan={1} style={{ width: "20px" }}>
              <div className="px-1">
                <input type="checkbox" className="checkbox checkbox-sm" />
              </div>
            </th>
            <th colSpan={1} style={{ width: "20px" }}>
              <div className="px-1"></div>
            </th>
            <th colSpan={1} style={{ width: "150px" }}>
              <div className="cursor-pointer select-none">Name</div>
            </th>
            <th colSpan={1} style={{ width: "150px" }}>
              <div className="px-1">Engaged / Unique</div>
            </th>
            <th colSpan={1} style={{ width: "150px" }}>
              <div className="px-1">Acquired</div>
            </th>
            <th colSpan={1} style={{ width: "150px" }}>
              <div className="px-1">Conversion</div>
            </th>
            <th colSpan={1} style={{ width: "20px" }}>
              <div className="px-1">Action</div>
            </th>
          </tr>
        </thead>

        <tbody>
          {
            MOCK_TABLE_DATA.map((el, idx) => {
              return (
                <tr key={el.name + "-" + idx}>
                  <td style={{ width: "20px" }}>
                    <div className="px-1">
                      <input type="checkbox" className="checkbox checkbox-sm" />
                    </div>
                  </td>
                  <td style={{ width: "20px" }}>
                    <img
                      className="h-3.5 w-3.5"
                      alt={el.platform === "messenger" ? "messenger-blurple" : "insta-og"}
                      src={el.platform === "messenger" ? InstagramIcon : MessengerBlurpleIcon}
                    />
                  </td>
                  <td style={{ width: "150px" }}>{el.name}</td>
                  <td style={{ width: "150px" }}>{el.engaged}</td>
                  <td style={{ width: "150px" }}>{el.acquired}</td>
                  <td style={{ width: "150px" }}>{el.conversion}</td>
                  <td style={{ width: "150px" }}>
                    <div role="listbox" className="dropdown dropdown-bottom dropdown-end">
                      <label tabIndex={1}>
                        <button className="btn btn-xs btn-outline">Actions</button>
                      </label>
                      <ul
                        tabIndex={1}
                        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box menu-xs z-[1]"
                        role="menu"
                      >
                        <li role="menuitem">
                          <Link to={el.name + "-" + idx + "/edit"}>
                            Edit
                          </Link>
                        </li>
                        <li role="menuitem">
                          <Link to="/">
                            Rename
                          </Link>
                        </li>
                        <li role="menuitem">
                          <Link to="/">
                            Delete
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default PostEngagementsTable;