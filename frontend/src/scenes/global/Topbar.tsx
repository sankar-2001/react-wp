import React from 'react'
import { Input } from "@/components/ui/input"
import { CircleUserIcon, SettingsIcon } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import { Bell, BellDot } from "lucide-react"

export default function Topbar() {

  return (
    <div className="flex p-2 justify-between h-10">
    {/* search bar */}


    <Input className="flex-initial h-10 w-36 rounded-sm mr-auto py-1 px-2 " type="string" placeholder="Search" />

    <div className="flex h-10 rounded-sm ml-auto py-1 px-2">
      {/* <h1><ModeToggle/></h1> */}
        <ModeToggle/>
        <BellDot/>
        <Bell/>
        <SettingsIcon />
        <CircleUserIcon/>
    </div>
  </div>
  )
}
