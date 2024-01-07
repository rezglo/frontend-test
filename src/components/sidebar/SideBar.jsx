import React from 'react'
import { Link } from 'react-router-dom'

export const SideBar = () => {
    return (
            <div className="drawer lg:drawer-open ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-side h-min-full bg-base-200  text-base-content">

                    <ul className="menu p-4 w-80  ">
                        <h3 className='' >Channels</h3> <hr />
                        <li><Link>Sidebar Item 1</Link></li>
                        <li><Link>Sidebar Item 2</Link></li>
                    </ul>
                    <hr />
                    <ul className="menu p-4 w-80 ">
                    <h3 className=''>Direct Messages</h3> <hr />
                        <li><Link>Sidebar Item 1</Link></li>
                        <li><Link>Sidebar Item 2</Link></li>
                    </ul>

                </div>
            </div>
    )
}
