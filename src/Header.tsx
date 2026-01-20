import { useState } from "react"
import type { HeaderProps } from './Types'


const Header = ({jobProjName}: HeaderProps)=> {

    const presetBanners = ["./src/banners/default_0.png","imagelink2", "imagelink3"]
    const [crntBanner, setCrntBanner] = useState(presetBanners[0]);
    
    function handleCrntBanner(e: React.ChangeEvent<HTMLInputElement>){
        setCrntBanner(e.target.value)
    }

    return(
        <section className="">
            <div className="flex bg-red-500 p-3.5 justify-between">
                {/* <img src="czxc" alt="" /> */}
                <h1 className="text-2xl">{jobProjName}</h1>
                {/* <svg>s</svg> */}
            </div>
            <>
                <img src={crntBanner} alt="Gradient Mesh" />
            </>
            <fieldset>
                <input type="radio" name="default" id="" checked={ crntBanner === presetBanners[0] } value={ presetBanners[0] } onChange={(e)=>{
                    handleCrntBanner(e);
                }}/>
                <input type="radio" name="default" id="" checked={ crntBanner === presetBanners[1] } value={ presetBanners[1] } onChange={(e)=>{
                    handleCrntBanner(e);

                }}/>
                <input type="radio" name="default" id="" checked={ crntBanner === presetBanners[2] } value={ presetBanners[2] } onChange={(e)=>{
                    handleCrntBanner(e);
                }}/>
            </fieldset>
        </section>
    )

}


export default Header