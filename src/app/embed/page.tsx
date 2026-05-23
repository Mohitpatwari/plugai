import EmbedClient from '@/src/components/EmbedClient';
import { getSession } from '@/src/lib/getSession'
import React from 'react'

const page = async() => {
    const session=await getSession();
  return (
    <div>
        <EmbedClient ownerId={session?.user?.id}/>
    </div>
  )
}

export default page