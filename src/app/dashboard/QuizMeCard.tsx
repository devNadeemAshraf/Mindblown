'use client';

import React from 'react'

import { BrainCircuit } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useRouter } from 'next/navigation'

type Props = {}

const QuizMeCard = (props: Props) => {
  const router = useRouter();
  return (
    <Card className='hover:cursor-pointer hover:opacity-90' onClick={() => {
      router.push("/quiz")
    }}>
      <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
        <CardTitle className='text-2xl font-bold'>Quiz Me!</CardTitle>
        <BrainCircuit size={28} strokeWidth={2} className='text-red-400' />
      </CardHeader>
      <CardContent>
        <p className='text-sm text-muted-foreground'>Challenge yourself with a quiz!</p>
      </CardContent>
    </Card>
  )
}

export default QuizMeCard