import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image';

interface SubmitButtonProps {
    isLoading?: boolean;
    className?: string;
    children?: React.ReactNode;
}

const SubmitButton = ({isLoading, className, children}: SubmitButtonProps) => {
  return (
    <div>
        <Button type="submit" disabled={isLoading} className={className ?? 'shad-primary-btn w-full'}>
            {
                isLoading?(
                  <div className='flex items-center gap-4'>
                      <Image src="/assets/icons/loader.svg" width={24} height={24} alt="loading" className='animate-spin'/>
                      Loading...
                </div>
                ):
                children
                
            }
        </Button>
    </div>
  )
}

export default SubmitButton
