import Icon from "@mdi/react";
import { mdiHomeOutline, mdiHiking, mdiAlphaHBox, mdiSecurity, mdiExitToApp } from "@mdi/js";
import { Link, NavLink } from "react-router-dom";

function Sidebar() {

    return (
        <>
            <div className="flex flex-col flex-1 pl-5">
                <nav className="flex-1 px-2 py-4 bg-white-800">
                    <span className="text-sm font-medium">MAIN</span>
                    <ul className="custm font-medium pl-4 pt-3">
                        <li>
                            <NavLink to="/home">
                                <Icon path={mdiHomeOutline} size={1} />
                                <span
                                    className={`({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active" : ""
                                    `}
                                >
                                    Dashboard
                                </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/leaves">
                                <Icon path={mdiHiking} size={1} />

                                <span className={`({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                `}>
                                    Leaves
                                </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/holiday">
                                <Icon path={mdiAlphaHBox} size={1} />

                                <span className={`({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                `}>
                                    Holiday
                                </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/change">
                                <Icon path={mdiSecurity} size={1} />

                                <span className={`({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                               `}>
                                    Change Password
                                </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/logout">
                                <Icon path={mdiExitToApp} size={1} />

                                <span className={`({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                `}>
                                    Logout
                                </span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
export default Sidebar