import { userInfo } from "@/components/infoUser/InfoUser"
import Image from "next/image"
import React from "react"
import { funcionVoid } from "../../../types"

interface props {
    ProfileEditOnHandler: funcionVoid
}


const ProfileInfoCard: React.FC<props> = ({ProfileEditOnHandler}) => {
    return (
        <section className="w-full h-screen flex flex-col items-center mt-16 gap-14">
            <div className="w-full flex flex-col items-center gap-4">
                <h1 className="text-3xl font-normal" >Personal info</h1>
                <h2 className="text-base ">Basic info, like your name and photo</h2>
            </div>
            <div className="w-full flex flex-col md:w-4/5  md:h-m-[580.54px] lg:w-[845.91px] md:border-zinc-200 md:border-2 md:rounded-2xl ">
                <div className="w-full flex flex-row justify-between items-center px-5 gap-4 md:px-11 md:border-y md:pt-10 md:pb-8">
                    <div className="flex-1 max-w-[190px] md:max-w-[350px]">
                        <h2 className="text-3xl font-normal" >Profile</h2>
                        <p className="text-zinc-500 text-sm" >Some info may be visible to other people</p>
                    </div>
                    <div className=" h-12 flex flex-row justify-center items-center border-zinc-400 border-2 rounded-2xl px-10  hover:bg-zinc-200" onClick={ProfileEditOnHandler}>
                        <p className="text-zinc-500">Edit</p>
                    </div>
                </div>

                <div className="w-full h-min-[84px] flex flex-row justify-between items-center gap-5 py-8 px-5 border-b border-zinc-300 md:px-11 md:border-y md:py-3  md:gap-8" >
                    <div className="min-w-[90px] md:w-48" >
                        <p className="text-zinc-400">PHOTO</p>
                    </div>
                    <div className="flex-1 flex flex-row justify-end md:justify-start  ">
                        <Image src={userInfo.profileImage} alt="profilePicture" width="90" height="90" className="rounded-xl" />
                    </div>
                </div>

                <div className="w-full h-[109px] flex flex-row justify-between items-center gap-5 py-8 px-5 border-b border-zinc-300 md:px-11 md:border-y md:py-3  md:gap-8">
                    <div className="min-w-[90px] md:w-48">
                        <p className="text-zinc-400">NAME</p>
                    </div>
                    <div className="flex-1 flex flex-row justify-end md:justify-start  ">
                        <p>{userInfo.name}</p>
                    </div>
                </div>

                <div className="w-full h-[109px] flex flex-row justify-between items-center gap-5 py-8 px-5 border-b border-zinc-300 md:px-11 md:border-y md:py-3  md:gap-8">
                    <div className="min-w-[90px] md:w-48">
                        <p className="text-zinc-400">BIO</p>
                    </div>
                    <div className="flex-1 flex flex-row justify-end md:justify-start  ">
                        <p>{userInfo.bio}</p>
                    </div>
                </div>

                <div className="w-full h-[109px] flex flex-row justify-between items-center gap-5 py-8 px-5 border-b border-zinc-300 md:px-11 md:border-y md:py-3  md:gap-8">
                    <div className="min-w-[90px] md:w-48">
                        <p className="text-zinc-400">PHONE</p>
                    </div>
                    <div className="flex-1 flex flex-row justify-end md:justify-start  ">
                        <p>{userInfo.phone}</p>
                    </div>
                </div>

                <div className="w-full h-[109px] flex flex-row justify-between items-center gap-5 py-8 px-5 border-b border-zinc-300 md:px-11 md:border-y md:py-3  md:gap-8">
                    <div className="min-w-[90px] md:w-48">
                        <p className="text-zinc-400">EMAIL</p>
                    </div>
                    <div className="flex-1 flex flex-row justify-end md:justify-start  ">
                        <p>{userInfo.email}</p>
                    </div>
                </div>

                <div className="w-full h-[109px] flex flex-row justify-between items-center gap-5 py-8 px-5 border-b border-zinc-300 md:px-11 md:border-y md:py-3  md:gap-8">
                    <div className="min-w-[90px] md:w-48">
                        <p className="text-zinc-400">PASSWORD</p>
                    </div>
                    <div className="flex-1 flex flex-row justify-end md:justify-start  ">
                        <p>{userInfo.password}</p>
                    </div>
                </div>

            </div>

            <div>
                <p>created by JuanProDev</p>
            </div>
        </section>
    )
}

export default ProfileInfoCard