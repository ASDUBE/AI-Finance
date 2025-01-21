'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Check, Pencil, X } from 'lucide-react';
import React, { useState } from 'react';

const BudgetProgress = ({ initialBudget, currentExpenses }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newBudget, setNewBudget] = useState(
    initialBudget?.amount?.toString() || ''
  );
  const handleUpdateBudget = () => {};
  const handleCancelBudget = () => {
    setNewBudget(initialBudget?.amount?.toString() || '');
    setIsEditing(false);
  };
  const percentUsed = initialBudget
    ? (currentExpenses / initialBudget.amount) * 100
    : 0;

  return (
    <Card>
      <CardHeader>
        <CardTitle> Monthly Budget (DefaultAccount)</CardTitle>

        <div>
          {isEditing ? (
            <div>
              <Input
                type="number"
                value={newBudget}
                classname="w-32"
                autofocus
                placeHolder="Enter amount"
                onChange={(e) => setNewBudget(e.target.value)}
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={handleUpdateBudget}
                classname="h-4 w-4 text-green-500"
              >
                <Check />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleCancelBudget}
                classname="h-4 w-4 text-red-400"
              >
                <X />
              </Button>
            </div>
          ) : (
            <>
              {' '}
              <CardDescription>
                {initialBudget
                  ? `$${currentExpenses.toFixed(
                      2
                    )} of $${initialBudget.amount.toFixed(2)} spent`
                  : 'No Budget Set'}
              </CardDescription>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsEditing(true)}
                classname="h-6 w-6 "
              >
                <Pencil className="h-3 w-3" />
              </Button>
            </>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
    </Card>
  );
};

export default BudgetProgress;
