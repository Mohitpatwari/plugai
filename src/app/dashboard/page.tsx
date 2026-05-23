import DashboardClient from '@/src/components/DashboardClient';
import { getSession } from '@/src/lib/getSession'
import React from 'react'

const dashboard = async() => {

  const session=await getSession();

  return (
    <div>
      <DashboardClient ownerId={session?.user?.id}/>
    </div>
  )
}

export default dashboard