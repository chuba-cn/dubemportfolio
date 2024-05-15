import React from "react"

const Wrapper = ({ children }: { children: React.ReactNode}) => {
  return (
    <div className="flex flex-col min-h-[100dvh] px-4 md:px-8">
        {children}
    </div>
  )
}

export default Wrapper