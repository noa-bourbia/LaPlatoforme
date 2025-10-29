import React from 'react';
import { cn } from '../lib/utils';
import type { OrderStatus } from '@restaurant-connect/shared';

export interface StatusBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  status: OrderStatus;
}

const statusStyles: Record<OrderStatus, string> = {
  pending: 'bg-yellow-100 text-yellow-800 border-yellow-300',
  preparing: 'bg-orange-100 text-orange-800 border-orange-300',
  ready: 'bg-green-100 text-green-800 border-green-300',
  served: 'bg-blue-100 text-blue-800 border-blue-300',
  cancelled: 'bg-red-100 text-red-800 border-red-300',
};

const statusLabels: Record<OrderStatus, string> = {
  pending: 'En attente',
  preparing: 'En préparation',
  ready: 'Prêt',
  served: 'Servi',
  cancelled: 'Annulé',
};

export const StatusBadge = React.forwardRef<HTMLSpanElement, StatusBadgeProps>(
  ({ className, status, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold',
          statusStyles[status],
          className
        )}
        {...props}
      >
        {statusLabels[status]}
      </span>
    );
  }
);

StatusBadge.displayName = 'StatusBadge';
