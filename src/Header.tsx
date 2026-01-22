import { Children, useState, type ReactNode } from "react"
import type { HeaderProps } from './Types'
import { StatBlock } from "./DashAssets"
import { IconSet } from "./icons/icon"

const presetBanners = ["./src/banners/default_0.png","imagelink2", "imagelink3"]

const Header = ({jobProjName, jobProjDetails}: HeaderProps)=> {

    const [crntBanner, setCrntBanner] = useState(presetBanners[0]);
    const [openSettings, setOpenSettings] = useState<boolean>(false)

    
    function handleCrntBanner(e: React.ChangeEvent<HTMLInputElement>){
        setCrntBanner(e.target.value)
    }

    
    function handleSwitch(){
        setOpenSettings(!openSettings ? true : false);
    }

    return(
        <section className="">
            <div className="flex bg-red-500 py-2 px-3.5 justify-between text-center h-13.25">
                {/* <img src="czxc" alt="" /> */}
                <h1 className="text-2xl">{jobProjName}</h1>

                <button onClick={handleSwitch}>
                    <IconSet iconName="moon" size={18}></IconSet>
                </button>
                {/* <svg>s</svg> */}
            </div>
            <div className=" w-full outline-1">
                <img src={crntBanner} alt="Gradient Mesh" width="" height="40" className="w-full"/>
            </div>
            {openSettings &&
            
                <ProjectsSettingsModal>
                    <section className="bg-purple-600 absolute w-100 flex flex-col p-5 rounded-xl">
                        <div className="flex justify-between">                        
                            <h1>Edit Project</h1>
                            <button onClick={handleSwitch}>
                                <IconSet iconName="moon" size={18}></IconSet>
                            </button>
                        </div>
                        <fieldset className="flex flex-col gap-2 ">
                            
                            <div className="flex gap-2  overflow-clip rounded-[100px]
                            ">

                                <input type="radio" name="default" id="" checked={ crntBanner === presetBanners[0] } value={ presetBanners[0] } onChange={(e)=>{
                                    handleCrntBanner(e);
                                }}/>
                                <img src={presetBanners[0]} alt="" width={""} height={100} className="w-100 h-10 rounded-[100px]" />

                            </div>

                            <div className="flex gap-2  overflow-clip rounded-[100px]">

                                <input type="radio" name="default" id="" checked={ crntBanner === presetBanners[1] } value={ presetBanners[1] } onChange={(e)=>{
                                    handleCrntBanner(e);
                                }}/>
                                <img src={presetBanners[0]} alt="" width={""} height={100} className="w-100 h-10 rounded-[100px]" />

                            </div>

                            <div className="flex gap-2  overflow-clip rounded-[100px]">

                                <input type="radio" name="default" id="" checked={ crntBanner === presetBanners[2] } value={ presetBanners[2] } onChange={(e)=>{
                                    handleCrntBanner(e);
                                }}/>
                                <img src={presetBanners[0]} alt="" width={""} height={100} className="w-100 h-10 rounded-[100px]" />

                            </div>
                        
                        </fieldset>
                    </section>
            </ProjectsSettingsModal>
            
            }




        </section>
    )

}

type ProjectSettingProp = {
    children: ReactNode
}

const ProjectsSettingsModal = ({children}: ProjectSettingProp) => {


    return(
        <section>
            
            {children}

        </section>
    )
}




export { Header, ProjectsSettingsModal}