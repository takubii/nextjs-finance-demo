import { z } from 'zod';

import { AccountForm } from '@/features/accounts/components/account-form';
import { useNewAccount } from '@/features/accounts/hooks/use-new-account';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { insertAccountsSchema } from '@/db/schema';

const formSchema = insertAccountsSchema.pick({
  name: true,
});

type FormValues = z.input<typeof formSchema>;

export const NewAccountSheet = () => {
  const { isOpen, onClose } = useNewAccount();

  const onSubmit = (values: FormValues) => {
    console.log({ values });
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className='space-y-4'>
        <SheetHeader>
          <SheetTitle>New Account</SheetTitle>
          <SheetDescription>Create a new account to track your transactions.</SheetDescription>
        </SheetHeader>
        <AccountForm
          onSubmit={onSubmit}
          defaultValues={{
            name: '',
          }}
          disabled={false}
        />
      </SheetContent>
    </Sheet>
  );
};
