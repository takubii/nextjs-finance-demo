import { z } from 'zod';

import { useCreateTransaction } from '@/features/transactions/api/use-create-transaction';
import { useNewTransaction } from '@/features/transactions/hooks/use-new-transaction';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { insertTransactionsSchema } from '@/db/schema';

const formSchema = insertTransactionsSchema.omit({
  id: true,
});

type FormValues = z.input<typeof formSchema>;

export const NewTransactionSheet = () => {
  const { isOpen, onClose } = useNewTransaction();

  const mutation = useCreateTransaction();

  const onSubmit = (values: FormValues) => {
    mutation.mutate(values, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className='space-y-4'>
        <SheetHeader>
          <SheetTitle>New Transaction</SheetTitle>
          <SheetDescription>Add a new transaction.</SheetDescription>
        </SheetHeader>
        <p>TODO: Transactions Form</p>
      </SheetContent>
    </Sheet>
  );
};
