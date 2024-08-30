import { memo } from "react"
import Icon from "@mdi/react";
import { mdiClockOutline, mdiHomeOutline } from "@mdi/js";
import Timer from "./Timer";


function SideTop() {
    return (
        <>
            <p className="set text-set">Setting</p>
            <a href="" className="flex flex-row"><Icon path={mdiClockOutline} className="basis-1/4" size={1} /><Timer /></a>
            <a href="" className="flex flex-row"><Icon path={mdiHomeOutline} className="basis-1/4" size={1} />Dashboard</a>
            <a className="bg-rhino text-center py-2 rounded text-white mb-2 cursor-pointer hover:bg-gray1 hover:ease-all hover:duration-300">Logout</a>
        </>
    )
}
export default memo(SideTop)