import React, { Fragment } from 'react'
import CircleSkeleton from './CircleSkeleton';
import RectangleSkeleton from './RectangleSkeleton';

export const ProfileSkeleton = () => {
  return (
    <Fragment>
      <div className='container d-flex flex-row gap-4'>
        <div
          style={{
            borderRadius: "50%",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: " 0.5rem"
          }}
        >
          <CircleSkeleton width='20px' height='20px' />
        </div>
        <div>
          <RectangleSkeleton />
        </div>
      </div >
    </Fragment>
  )
}
