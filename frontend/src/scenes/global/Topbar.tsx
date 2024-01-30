import React from 'react'
import { Input } from "@/components/ui/input"
import { CircleUserIcon, SettingsIcon } from "lucide-react"
import { Bell, BellDot } from "lucide-react"

export default function Topbar() {

  return (
    <div className="flex p-2 justify-between sticky top-0 bg-red-200">
    {/* search bar */}


    <Input className="flex-initial h-10 w-36 rounded-sm mr-auto py-1 px-2 bg-pink-200" type="string" placeholder="Search" />

    <div className="flex h-10 rounded-sm ml-auto py-1 px-2 bg-purple-400">
      {/* <h1><ModeToggle/></h1> */}
        <BellDot/>
        <Bell/>
        <SettingsIcon />
        <CircleUserIcon/>
    </div>
  </div>
  )
}
