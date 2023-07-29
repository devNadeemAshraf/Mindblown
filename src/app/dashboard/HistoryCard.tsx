'use client';

import React from 'react'

import { History } from 'lucide-react'


import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useRouter } from 'next/navigation'

type Props = {}

const HistoryCard = (props: Props) => {
  const router = useRouter();

  return (
    <Card className='hover:cursor-pointer hover:opacity-90' onClick={() => {
      router.push("/history")
    }}>
      <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
        <CardTitle className='text-2xl font-bold'>History</CardTitle>
        <History size={28} strokeWidth={2} className='text-green-500' />
      </CardHeader>
      <CardContent>
        <p className='text-sm text-muted-foreground'>View past quiz history here.</p>
      </CardContent>
    </Card>
  )
}

export default HistoryCard