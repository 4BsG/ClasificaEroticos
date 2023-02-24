import React, { PropsWithChildren } from 'react'

export default function PhoneContainer({ children } : PropsWithChildren ) { 
  return (
    <div className=" w-full h-full rounded-t-xl  bg-foreground max-w-5xl">
      {children}
    </div>
  )
}