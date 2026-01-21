import { useState } from "react"
import type { SideNavProps } from './Types'
import IconSet from "./icons/icon"

const SideNav = ({recentJobs}:SideNavProps) => {

    const [modeIcon, setModeIcon] = useState<boolean>(false)
    const [isExpanded, isSetExpanded] = useState<boolean>(false);

    function handleSwitch(){
        setModeIcon(!modeIcon ? true : false);
    }

    function handleSwitchNav(){
        isSetExpanded(!isExpanded ? true : false);
    }

    return(

        <aside onClick={handleSwitchNav} className="flex flex-col outline-1 outline-red-600 h-screen px-2.5 pt-4 pb-4 gap-11 justify-center bg-amber-400">
            <div className="flex justify-between gap-18 items-center">
                
                {isExpanded && <h3>Dashboard</h3>}
                <IconSet iconName="barleft" size={24}></IconSet>

            </div>


            {isExpanded && <nav> 
                                <ul>
                                    <li>Tracked Jobs:</li>{recentJobs.map(job =>  <li>{job.company}</li> )}
                                </ul> 
                          </nav>}
            <button  className="mt-auto" onClick={ handleSwitch }>{ !modeIcon ? <IconSet iconName="sun" size={24}/> : <IconSet iconName="moon" size={24}/> }</button>

        </aside>
        
    )

}

export default SideNav