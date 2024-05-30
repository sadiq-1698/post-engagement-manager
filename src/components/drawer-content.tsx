const DrawerContent = () => {
  // return (
  //     <div className="drawer-content"><div className="pt-24"><div className="grid grid-cols-1 gap-0 lg:grid-cols-9"><div className="col-span-2 hidden px-6 lg:block"><ul role="menu" className="menu rounded-box bg-base-100 menu-vertical"><li role="menuitem" className="menu-title"><span>Capture Tools</span></li><li role="menuitem" className=""><a className="" href="/929/capture-tools/links-library"><svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg> Links Library</a></li><li role="menuitem" className=""><a className="" href="/929/capture-tools/json-library"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14 4.5V11h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM4.151 15.29a1.2 1.2 0 0 1-.111-.449h.764a.58.58 0 0 0 .255.384q.105.073.25.114.142.041.319.041.245 0 .413-.07a.56.56 0 0 0 .255-.193.5.5 0 0 0 .084-.29.39.39 0 0 0-.152-.326q-.152-.12-.463-.193l-.618-.143a1.7 1.7 0 0 1-.539-.214 1 1 0 0 1-.352-.367 1.1 1.1 0 0 1-.123-.524q0-.366.19-.639.192-.272.528-.422.337-.15.777-.149.456 0 .779.152.326.153.5.41.18.255.2.566h-.75a.56.56 0 0 0-.12-.258.6.6 0 0 0-.246-.181.9.9 0 0 0-.37-.068q-.324 0-.512.152a.47.47 0 0 0-.185.384q0 .18.144.3a1 1 0 0 0 .404.175l.621.143q.326.075.566.211a1 1 0 0 1 .375.358q.135.222.135.56 0 .37-.188.656a1.2 1.2 0 0 1-.539.439q-.351.158-.858.158-.381 0-.665-.09a1.4 1.4 0 0 1-.478-.252 1.1 1.1 0 0 1-.29-.375m-3.104-.033a1.3 1.3 0 0 1-.082-.466h.764a.6.6 0 0 0 .074.27.5.5 0 0 0 .454.246q.285 0 .422-.164.137-.165.137-.466v-2.745h.791v2.725q0 .66-.357 1.005-.355.345-.985.345a1.6 1.6 0 0 1-.568-.094 1.15 1.15 0 0 1-.407-.266 1.1 1.1 0 0 1-.243-.39m9.091-1.585v.522q0 .384-.117.641a.86.86 0 0 1-.322.387.9.9 0 0 1-.47.126.9.9 0 0 1-.47-.126.87.87 0 0 1-.32-.387 1.55 1.55 0 0 1-.117-.641v-.522q0-.386.117-.641a.87.87 0 0 1 .32-.387.87.87 0 0 1 .47-.129q.265 0 .47.129a.86.86 0 0 1 .322.387q.117.255.117.641m.803.519v-.513q0-.565-.205-.973a1.46 1.46 0 0 0-.59-.63q-.38-.22-.916-.22-.534 0-.92.22a1.44 1.44 0 0 0-.589.628q-.205.407-.205.975v.513q0 .562.205.973.205.407.589.626.386.217.92.217.536 0 .917-.217.384-.22.589-.626.204-.41.205-.973m1.29-.935v2.675h-.746v-3.999h.662l1.752 2.66h.032v-2.66h.75v4h-.656l-1.761-2.676z"></path></svg> JSON Generator</a></li><li role="menuitem" className=""><a className="" href="/929/capture-tools/checkbox-plugin"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M1 8a7 7 0 1 1 2.898 5.673c-.167-.121-.216-.406-.002-.62l1.8-1.8a3.5 3.5 0 0 0 4.572-.328l1.414-1.415a.5.5 0 0 0 0-.707l-.707-.707 1.559-1.563a.5.5 0 1 0-.708-.706l-1.559 1.562-1.414-1.414 1.56-1.562a.5.5 0 1 0-.707-.706l-1.56 1.56-.707-.706a.5.5 0 0 0-.707 0L5.318 5.975a3.5 3.5 0 0 0-.328 4.571l-1.8 1.8c-.58.58-.62 1.6.121 2.137A8 8 0 1 0 0 8a.5.5 0 0 0 1 0"></path></svg> Checkbox Plugin</a></li><li role="menuitem" className=""><a className="" href="/929/capture-tools/messenger-code"><svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path><path d="M7 17l0 .01"></path><path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path><path d="M7 7l0 .01"></path><path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path><path d="M17 7l0 .01"></path><path d="M14 14l3 0"></path><path d="M20 14l0 .01"></path><path d="M14 14l0 3"></path><path d="M14 20l3 0"></path><path d="M17 17l3 0"></path><path d="M20 17l0 3"></path></svg> Messenger Code</a></li><li role="menuitem" className=""><a aria-current="page" className="active" href="/929/capture-tools/post-engagements"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M17 19.22H5V7h7V5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-7h-2v7.22z"></path><path d="M19 2h-2v3h-3c.01.01 0 2 0 2h3v2.99c.01.01 2 0 2 0V7h3V5h-3V2zM7 9h8v2H7zM7 12v2h8v-2h-3zM7 15h8v2H7z"></path></svg> Post Engagement</a></li><li role="menuitem" className=""><a className="" href="/929/capture-tools/send-to-messenger"><svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1"></path><path d="M8 13l3 -2l2 2l3 -2"></path></svg> Send To Messenger</a></li></ul></div><div className="lg:col-span-7"><div className="px-6"><div className="mb-2 flex flex-row items-end gap-2"><div className="grow truncate"><h4 className="truncate text-xl">Post Engagements</h4></div><div className="form-control hidden md:flex"><div className="join items-center border border-neutral bg-base-100"><input placeholder="Search…" type="text" className="input input-sm h-[30px] focus:outline-none join-item border-0" value="" /><span className="join-item px-1"><svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></span></div></div><div role="listbox" className="dropdown dropdown-end"><label tabIndex={0}><button className="btn btn-sm btn-outline">Bulk Actions <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m11.998 17 7-8h-14z"></path></svg></button></label><ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box menu-sm z-[1] mt-1 w-48" role="menu"><li role="menuitem"><a>Delete</a></li></ul></div></div><div className="overflow-y-hidden overflow-x-scroll">
  //     </div><div className="flex items-center justify-center gap-4 py-3.5"><button className="btn btn-circle btn-primary btn-sm" disabled={false}><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M485.6 249.9L198.2 498c-8.3 7.1-8.3 20.8 0 27.9l287.4 248.2c10.7 9.2 26.4.9 26.4-14V263.8c0-14.8-15.7-23.2-26.4-13.9zm320 0L518.2 498a18.6 18.6 0 0 0-6.2 14c0 5.2 2.1 10.4 6.2 14l287.4 248.2c10.7 9.2 26.4.9 26.4-14V263.8c0-14.8-15.7-23.2-26.4-13.9z"></path></svg></button><button className="btn btn-circle btn-primary btn-sm" disabled={false}><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M15.61 7.41 14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z"></path></svg></button><button className="btn btn-circle btn-primary btn-sm"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M10.02 6 8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z"></path></svg></button><button className="btn btn-circle btn-primary btn-sm"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M825.8 498L538.4 249.9c-10.7-9.2-26.4-.9-26.4 14v496.3c0 14.9 15.7 23.2 26.4 14L825.8 526c8.3-7.2 8.3-20.8 0-28zm-320 0L218.4 249.9c-10.7-9.2-26.4-.9-26.4 14v496.3c0 14.9 15.7 23.2 26.4 14L505.8 526c4.1-3.6 6.2-8.8 6.2-14 0-5.2-2.1-10.4-6.2-14z"></path></svg></button><span className="flex items-center gap-1"><div>Page</div><strong>1 of 2</strong></span><span className="hidden items-center gap-1 md:flex">· Go to page:<input type="number" className="input w-16 p-1 input-sm input-bordered focus:outline-offset-0" value="1" /></span></div></div></div></div></div></div>
  // );
  return (
    <div className="drawer-content">
      <div className="pt-24">
        <div className="grid grid-cols-1 gap-0 lg:grid-cols-9">
          <div className="col-span-2 hidden px-6 lg:block">
            <ul role="menu" className="menu rounded-box bg-base-100 menu-vertical">
              <li role="menuitem" className="menu-title">
                <span>Capture Tools</span>
              </li>
              <li role="menuitem" className="">
                <a className="" href="/929/capture-tools/links-library">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="h-4 w-4"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg>{" "}
                  Links Library
                </a>
              </li>
              <li role="menuitem" className="">
                <a className="" href="/929/capture-tools/json-library">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    className="h-4 w-4"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M14 4.5V11h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM4.151 15.29a1.2 1.2 0 0 1-.111-.449h.764a.58.58 0 0 0 .255.384q.105.073.25.114.142.041.319.041.245 0 .413-.07a.56.56 0 0 0 .255-.193.5.5 0 0 0 .084-.29.39.39 0 0 0-.152-.326q-.152-.12-.463-.193l-.618-.143a1.7 1.7 0 0 1-.539-.214 1 1 0 0 1-.352-.367 1.1 1.1 0 0 1-.123-.524q0-.366.19-.639.192-.272.528-.422.337-.15.777-.149.456 0 .779.152.326.153.5.41.18.255.2.566h-.75a.56.56 0 0 0-.12-.258.6.6 0 0 0-.246-.181.9.9 0 0 0-.37-.068q-.324 0-.512.152a.47.47 0 0 0-.185.384q0 .18.144.3a1 1 0 0 0 .404.175l.621.143q.326.075.566.211a1 1 0 0 1 .375.358q.135.222.135.56 0 .37-.188.656a1.2 1.2 0 0 1-.539.439q-.351.158-.858.158-.381 0-.665-.09a1.4 1.4 0 0 1-.478-.252 1.1 1.1 0 0 1-.29-.375m-3.104-.033a1.3 1.3 0 0 1-.082-.466h.764a.6.6 0 0 0 .074.27.5.5 0 0 0 .454.246q.285 0 .422-.164.137-.165.137-.466v-2.745h.791v2.725q0 .66-.357 1.005-.355.345-.985.345a1.6 1.6 0 0 1-.568-.094 1.15 1.15 0 0 1-.407-.266 1.1 1.1 0 0 1-.243-.39m9.091-1.585v.522q0 .384-.117.641a.86.86 0 0 1-.322.387.9.9 0 0 1-.47.126.9.9 0 0 1-.47-.126.87.87 0 0 1-.32-.387 1.55 1.55 0 0 1-.117-.641v-.522q0-.386.117-.641a.87.87 0 0 1 .32-.387.87.87 0 0 1 .47-.129q.265 0 .47.129a.86.86 0 0 1 .322.387q.117.255.117.641m.803.519v-.513q0-.565-.205-.973a1.46 1.46 0 0 0-.59-.63q-.38-.22-.916-.22-.534 0-.92.22a1.44 1.44 0 0 0-.589.628q-.205.407-.205.975v.513q0 .562.205.973.205.407.589.626.386.217.92.217.536 0 .917-.217.384-.22.589-.626.204-.41.205-.973m1.29-.935v2.675h-.746v-3.999h.662l1.752 2.66h.032v-2.66h.75v4h-.656l-1.761-2.676z"
                    ></path>
                  </svg>{" "}
                  JSON Generator
                </a>
              </li>
              <li role="menuitem" className="">
                <a className="" href="/929/capture-tools/checkbox-plugin">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    className="h-4 w-4"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a7 7 0 1 1 2.898 5.673c-.167-.121-.216-.406-.002-.62l1.8-1.8a3.5 3.5 0 0 0 4.572-.328l1.414-1.415a.5.5 0 0 0 0-.707l-.707-.707 1.559-1.563a.5.5 0 1 0-.708-.706l-1.559 1.562-1.414-1.414 1.56-1.562a.5.5 0 1 0-.707-.706l-1.56 1.56-.707-.706a.5.5 0 0 0-.707 0L5.318 5.975a3.5 3.5 0 0 0-.328 4.571l-1.8 1.8c-.58.58-.62 1.6.121 2.137A8 8 0 1 0 0 8a.5.5 0 0 0 1 0"
                    ></path>
                  </svg>{" "}
                  Checkbox Plugin
                </a>
              </li>
              <li role="menuitem" className="">
                <a className="" href="/929/capture-tools/messenger-code">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="h-4 w-4"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
                    <path d="M7 17l0 .01"></path>
                    <path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
                    <path d="M7 7l0 .01"></path>
                    <path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
                    <path d="M17 7l0 .01"></path>
                    <path d="M14 14l3 0"></path>
                    <path d="M20 14l0 .01"></path>
                    <path d="M14 14l0 3"></path>
                    <path d="M14 20l3 0"></path>
                    <path d="M17 17l3 0"></path>
                    <path d="M20 17l0 3"></path>
                  </svg>{" "}
                  Messenger Code
                </a>
              </li>
              <li role="menuitem" className="">
                <a
                  aria-current="page"
                  className="active"
                  href="/929/capture-tools/post-engagements"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M17 19.22H5V7h7V5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-7h-2v7.22z"></path>
                    <path d="M19 2h-2v3h-3c.01.01 0 2 0 2h3v2.99c.01.01 2 0 2 0V7h3V5h-3V2zM7 9h8v2H7zM7 12v2h8v-2h-3zM7 15h8v2H7z"></path>
                  </svg>{" "}
                  Post Engagement
                </a>
              </li>
              <li role="menuitem" className="">
                <a className="" href="/929/capture-tools/send-to-messenger">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="h-4 w-4"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1"></path>
                    <path d="M8 13l3 -2l2 2l3 -2"></path>
                  </svg>{" "}
                  Send To Messenger
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-7">
            <div className="px-6">
              <div className="mb-2 flex flex-row items-end gap-2">
                <div className="grow truncate">
                  <h4 className="truncate text-xl">Post Engagements</h4>
                </div>
                <div className="form-control hidden md:flex">
                  <div className="join items-center border border-neutral bg-base-100">
                    <input
                      placeholder="Search…"
                      type="text"
                      className="input input-sm h-[30px] focus:outline-none join-item border-0"
                      value=""
                    />
                    <span className="join-item px-1">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="h-4 w-4"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
                <div role="listbox" className="dropdown dropdown-end">
                  <label tabIndex={0}>
                    <button className="btn btn-sm btn-outline">
                      Bulk Actions{" "}
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m11.998 17 7-8h-14z"></path>
                      </svg>
                    </button>
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box menu-sm z-[1] mt-1 w-48"
                    role="menu"
                  >
                    <li role="menuitem">
                      <a href="/">
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

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
                      {/* <th colSpan={1} style={{ width: "20px" }}>
                        <div className="px-1">
                          <input type="checkbox" className="checkbox checkbox-sm" />
                        </div>
                      </th> */}
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
                    <tr>
                      <td style={{ width: "20px" }}>
                        <div className="px-1">
                          <input type="checkbox" className="checkbox checkbox-sm" />
                        </div>
                      </td>
                      <td style={{ width: "20px" }}>
                        <img
                          alt="messenger-blurple"
                          className="h-3.5 w-3.5"
                          src="/images/platform/messenger-blurple.svg"
                        />
                      </td>
                      <td style={{ width: "150px" }}>Optimization</td>
                      <td style={{ width: "150px" }}>50 / 25</td>
                      <td style={{ width: "150px" }}>66</td>
                      <td style={{ width: "150px" }}>10%</td>
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
                              <a href="/">
                                Edit
                              </a>
                            </li>
                            <li role="menuitem">
                              <a href="/">
                                Rename
                              </a>
                            </li>
                            <li role="menuitem">
                              <a href="/">
                                Delete
                              </a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "20px" }}>
                        <div className="px-1">
                          <input type="checkbox" className="checkbox checkbox-sm" />
                        </div>
                      </td>
                      <td style={{ width: "20px" }}>
                        <img
                          alt="messenger-blurple"
                          className="h-3.5 w-3.5"
                          src="/images/platform/messenger-blurple.svg"
                        />
                      </td>
                      <td style={{ width: "150px" }}>Optimization</td>
                      <td style={{ width: "150px" }}>50 / 25</td>
                      <td style={{ width: "150px" }}>66</td>
                      <td style={{ width: "150px" }}>10%</td>
                      <td style={{ width: "20px" }}>
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
                              <a>Edit</a>
                            </li>
                            <li role="menuitem">
                              <a>Rename</a>
                            </li>
                            <li role="menuitem">
                              <a>Delete</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "20px" }}>
                        <div className="px-1">
                          <input type="checkbox" className="checkbox checkbox-sm" />
                        </div>
                      </td>
                      <td style={{ width: "20px" }}>
                        <img
                          className="h-3.5 w-3.5"
                          src="/images/platform/messenger-blurple.svg"
                        />
                      </td>
                      <td style={{ width: "150px" }}>Accountability</td>
                      <td style={{ width: "150px" }}>50 / 25</td>
                      <td style={{ width: "150px" }}>66</td>
                      <td style={{ width: "150px" }}>10%</td>
                      <td style={{ width: "20px" }}>
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
                              <a>Edit</a>
                            </li>
                            <li role="menuitem">
                              <a>Rename</a>
                            </li>
                            <li role="menuitem">
                              <a>Delete</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "20px" }}>
                        <div className="px-1">
                          <input type="checkbox" className="checkbox checkbox-sm" />
                        </div>
                      </td>
                      <td style={{ width: "20px" }}>
                        <img className="h-3.5 w-3.5" src="/images/platform/instagram.svg" />
                      </td>
                      <td style={{ width: "150px" }}>Accounts</td>
                      <td style={{ width: "150px" }}>50 / 25</td>
                      <td style={{ width: "150px" }}>66</td>
                      <td style={{ width: "150px" }}>10%</td>
                      <td style={{ width: "20px" }}>
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
                              <a>Edit</a>
                            </li>
                            <li role="menuitem">
                              <a>Rename</a>
                            </li>
                            <li role="menuitem">
                              <a>Delete</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "20px" }}>
                        <div className="px-1">
                          <input type="checkbox" className="checkbox checkbox-sm" />
                        </div>
                      </td>
                      <td style={{ width: "20px" }}>
                        <img className="h-3.5 w-3.5" src="/images/platform/instagram.svg" />
                      </td>
                      <td style={{ width: "150px" }}>Operations</td>
                      <td style={{ width: "150px" }}>50 / 25</td>
                      <td style={{ width: "150px" }}>66</td>
                      <td style={{ width: "150px" }}>10%</td>
                      <td style={{ width: "20px" }}>
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
                              <a>Edit</a>
                            </li>
                            <li role="menuitem">
                              <a>Rename</a>
                            </li>
                            <li role="menuitem">
                              <a>Delete</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "20px" }}>
                        <div className="px-1">
                          <input type="checkbox" className="checkbox checkbox-sm" />
                        </div>
                      </td>
                      <td style={{ width: "20px" }}>
                        <img
                          className="h-3.5 w-3.5"
                          src="/images/platform/messenger-blurple.svg"
                        />
                      </td>
                      <td style={{ width: "150px" }}>Applications</td>
                      <td style={{ width: "150px" }}>50 / 25</td>
                      <td style={{ width: "150px" }}>66</td>
                      <td style={{ width: "150px" }}>10%</td>
                      <td style={{ width: "20px" }}>
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
                              <a>Edit</a>
                            </li>
                            <li role="menuitem">
                              <a>Rename</a>
                            </li>
                            <li role="menuitem">
                              <a>Delete</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "20px" }}>
                        <div className="px-1">
                          <input type="checkbox" className="checkbox checkbox-sm" />
                        </div>
                      </td>
                      <td style={{ width: "20px" }}>
                        <img
                          className="h-3.5 w-3.5"
                          src="/images/platform/messenger-blurple.svg"
                        />
                      </td>
                      <td style={{ width: "150px" }}>Accountability</td>
                      <td style={{ width: "150px" }}>50 / 25</td>
                      <td style={{ width: "150px" }}>66</td>
                      <td style={{ width: "150px" }}>10%</td>
                      <td style={{ width: "20px" }}>
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
                              <a>Edit</a>
                            </li>
                            <li role="menuitem">
                              <a>Rename</a>
                            </li>
                            <li role="menuitem">
                              <a>Delete</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "20px" }}>
                        <div className="px-1">
                          <input type="checkbox" className="checkbox checkbox-sm" />
                        </div>
                      </td>
                      <td style={{ width: "20px" }}>
                        <img className="h-3.5 w-3.5" src="/images/platform/instagram.svg" />
                      </td>
                      <td style={{ width: "150px" }}>Mobility</td>
                      <td style={{ width: "150px" }}>50 / 25</td>
                      <td style={{ width: "150px" }}>66</td>
                      <td style={{ width: "150px" }}>10%</td>
                      <td style={{ width: "20px" }}>
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
                              <a>Edit</a>
                            </li>
                            <li role="menuitem">
                              <a>Rename</a>
                            </li>
                            <li role="menuitem">
                              <a>Delete</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "20px" }}>
                        <div className="px-1">
                          <input type="checkbox" className="checkbox checkbox-sm" />
                        </div>
                      </td>
                      <td style={{ width: "20px" }}>
                        <img className="h-3.5 w-3.5" src="/images/platform/instagram.svg" />
                      </td>
                      <td style={{ width: "150px" }}>Mobility</td>
                      <td style={{ width: "150px" }}>50 / 25</td>
                      <td style={{ width: "150px" }}>66</td>
                      <td style={{ width: "150px" }}>10%</td>
                      <td style={{ width: "20px" }}>
                        <div role="listbox" className="dropdown dropdown-top dropdown-end">
                          <label tabIndex={1}>
                            <button className="btn btn-xs btn-outline">Actions</button>
                          </label>
                          <ul
                            tabIndex={1}
                            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box menu-xs z-[1]"
                            role="menu"
                          >
                            <li role="menuitem">
                              <a>Edit</a>
                            </li>
                            <li role="menuitem">
                              <a>Rename</a>
                            </li>
                            <li role="menuitem">
                              <a>Delete</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "20px" }}>
                        <div className="px-1">
                          <input type="checkbox" className="checkbox checkbox-sm" />
                        </div>
                      </td>
                      <td style={{ width: "20px" }}>
                        <img
                          className="h-3.5 w-3.5"
                          src="/images/platform/messenger-blurple.svg"
                        />
                      </td>
                      <td style={{ width: "150px" }}>Program</td>
                      <td style={{ width: "150px" }}>50 / 25</td>
                      <td style={{ width: "150px" }}>66</td>
                      <td style={{ width: "150px" }}>10%</td>
                      <td style={{ width: "20px" }}>
                        <div role="listbox" className="dropdown dropdown-top dropdown-end">
                          <label tabIndex={1}>
                            <button className="btn btn-xs btn-outline">Actions</button>
                          </label>
                          <ul
                            tabIndex={1}
                            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box menu-xs z-[1]"
                            role="menu"
                          >
                            <li role="menuitem">
                              <a>Edit</a>
                            </li>
                            <li role="menuitem">
                              <a>Rename</a>
                            </li>
                            <li role="menuitem">
                              <a>Delete</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="flex items-center justify-center gap-4 py-3.5">
                <button
                  className="btn btn-circle btn-primary btn-sm"
                  disabled={false}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 1024 1024"
                    className="h-5 w-5"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M485.6 249.9L198.2 498c-8.3 7.1-8.3 20.8 0 27.9l287.4 248.2c10.7 9.2 26.4.9 26.4-14V263.8c0-14.8-15.7-23.2-26.4-13.9zm320 0L518.2 498a18.6 18.6 0 0 0-6.2 14c0 5.2 2.1 10.4 6.2 14l287.4 248.2c10.7 9.2 26.4.9 26.4-14V263.8c0-14.8-15.7-23.2-26.4-13.9z"></path>
                  </svg>
                </button>
                <button
                  className="btn btn-circle btn-primary btn-sm"
                  disabled={false}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M15.61 7.41 14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z"></path>
                  </svg>
                </button>
                <button className="btn btn-circle btn-primary btn-sm">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M10.02 6 8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z"></path>
                  </svg>
                </button>
                <button className="btn btn-circle btn-primary btn-sm">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 1024 1024"
                    className="h-5 w-5"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M825.8 498L538.4 249.9c-10.7-9.2-26.4-.9-26.4 14v496.3c0 14.9 15.7 23.2 26.4 14L825.8 526c8.3-7.2 8.3-20.8 0-28zm-320 0L218.4 249.9c-10.7-9.2-26.4-.9-26.4 14v496.3c0 14.9 15.7 23.2 26.4 14L505.8 526c4.1-3.6 6.2-8.8 6.2-14 0-5.2-2.1-10.4-6.2-14z"></path>
                  </svg>
                </button>
                <span className="flex items-center gap-1">
                  <div>Page</div>
                  <strong>1 of 2</strong>
                </span>
                <span className="hidden items-center gap-1 md:flex">
                  · Go to page:
                  <input
                    type="number"
                    className="input w-16 p-1 input-sm input-bordered focus:outline-offset-0"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DrawerContent;