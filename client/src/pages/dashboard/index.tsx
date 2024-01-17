import React from 'react'
import '../../tailwind.css';
export const DashboardPage  = () => {
  return (
    <div className="grid grid-rows-4 bg- grid-flow-col gap-4">
  <div>01</div>
  <div>05</div>
  <div>01</div>
  <div>05</div>
  <div>01</div>
  <div className="grid grid-rows-subgrid gap-4 row-span-3">
      <div className="row-start-2">06</div>
  </div>
  <div>07</div>
  <div>10</div>
  <div>01</div>
  <div>05</div>
</div>
  )
}
