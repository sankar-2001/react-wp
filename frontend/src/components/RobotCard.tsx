import React from 'react'



type RobotCardProps = {
    robot_id?: string;

}

export default function RobotCard({robot_id = "unknown"}: RobotCardProps) {
  return (
    <ol className="bg-red-300 p-4 m-5">
    <li>robot id: {robot_id}</li>
    <li>owner name ( only shown to  admin)</li>
    <li>is online</li>
    <li>battery percentage</li>
    <li>status: running, idle</li>
    <li>robot card image</li>
    <li>something</li>
    <li>something2</li>
  </ol>
  )
}
