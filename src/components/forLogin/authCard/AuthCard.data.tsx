import { RiFacebookBoxFill,  RiGoogleLine, RiTwitterFill, RiGithubFill, RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";


const sizeOFIconsAuth0 = "25"
const colorOFIconsAuth0 = "rgb(209 213 219)"

const settingsOfIconsAuth0 = {
    size: "25",
    color: "#828282"
}

export const iconsAuth0 = [
    {   id: "0",
        icon: <RiGoogleLine size={settingsOfIconsAuth0.size} color={settingsOfIconsAuth0.color} className='hover:fill-black' />
    },
    {   id: "1",
        icon: <RiFacebookBoxFill size={settingsOfIconsAuth0.size} color={settingsOfIconsAuth0.color} className='hover:fill-black' />
    },
    {   id: "2",
        icon: <RiTwitterFill size={settingsOfIconsAuth0.size} color={settingsOfIconsAuth0.color} className='hover:fill-black' />
    },
    {   id: "3",
        icon: <RiGithubFill size={settingsOfIconsAuth0.size} color={settingsOfIconsAuth0.color} className='hover:fill-black' />
    },
    
]

const settingsOfIconsWithFrom = {
    size: "25",
    color: "#828282"
}

export const iconsWithFrom = [
    {
        id: "0",
        icon: <MdEmail size={settingsOfIconsWithFrom.size} color={settingsOfIconsWithFrom.color} />
    },
    {
        id: "1",
        icon: <RiLockPasswordFill size={settingsOfIconsWithFrom.size} color={settingsOfIconsWithFrom.color} />
    }
]