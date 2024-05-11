import React from "react"

const Wrapper = ({ children }: { children: React.ReactNode}) => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
        {children}
    </div>
  )
}

export default Wrapper