import React, { useEffect, useState } from 'react';
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { certifcates } from '@/constants';

const CertificatesList = () => {
  return (
    <div className="h-[20rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={certifcates}
        direction="right"
        speed="slow"
      />
    </div>
  )
}

export default CertificatesList