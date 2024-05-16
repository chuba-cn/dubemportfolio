import React from "react"

const Wrapper = ({ children }: { children: React.ReactNode}) => {
  return (
    <div className="flex flex-col min-h-[100dvh] px-4 md:px-8 h-full w-full bg-white bg-dot-black/[0.2] relative">
      <div className="absolute pointer-events-none inset-0 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="relative z-20 bg-clip-text">
          {children}
        </div>
    </div>
  )
}

export default Wrapper