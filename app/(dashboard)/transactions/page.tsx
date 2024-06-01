'use client';

import { Plus } from 'lucide-react';

import { useNewTransaction } from '@/features/transactions/hooks/use-new-transaction';

import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

const TransactionsPage = () => {
  const newTransaction = useNewTransaction();

  return (
    <div className='max-w-screen-2xl mx-auto w-full pb-10 -mt-24'>
      <Card className='border-none drop-shadow-sm'>
        <CardHeader className='gap-y-2 lg:flex-row lg:items-center lg:justify-between'>
          <CardTitle className='text-xl line-clamp-1'>Transaction History</CardTitle>
          <Button size='sm' onClick={newTransaction.onOpen}>
            Add new
            <Plus className='size-4 mr-2' />
          </Button>
        </CardHeader>
      </Card>
    </div>
  );
};

export default TransactionsPage;
