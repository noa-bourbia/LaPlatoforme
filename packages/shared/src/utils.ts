// API error handling
export class APIError extends Error {
  constructor(
    public code: string,
    message: string,
    public statusCode: number = 400
  ) {
    super(message);
    this.name = 'APIError';
  }

  toJSON() {
    return {
      error: {
        code: this.code,
        message: this.message,
      },
    };
  }
}

// Common error codes
export const ErrorCodes = {
  UNAUTHORIZED: 'UNAUTHORIZED',
  FORBIDDEN: 'FORBIDDEN',
  NOT_FOUND: 'NOT_FOUND',
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  PAYMENT_FAILED: 'PAYMENT_FAILED',
  ORDER_NOT_FOUND: 'ORDER_NOT_FOUND',
  PRODUCT_UNAVAILABLE: 'PRODUCT_UNAVAILABLE',
  INVALID_STATUS_TRANSITION: 'INVALID_STATUS_TRANSITION',
} as const;

// Utility to calculate order total server-side
export const calculateOrderTotal = (
  items: Array<{ price: number; qty: number }>
): number => {
  return items.reduce((total, item) => total + item.price * item.qty, 0);
};

// Status transition validation
export const isValidStatusTransition = (
  currentStatus: string,
  newStatus: string,
  userRole: string
): boolean => {
  const transitions: Record<string, Record<string, string[]>> = {
    pending: {
      kitchen: ['preparing'],
      server: ['cancelled'],
      admin: ['preparing', 'cancelled'],
    },
    preparing: {
      kitchen: ['ready'],
      server: ['cancelled'],
      admin: ['ready', 'cancelled'],
    },
    ready: {
      kitchen: ['served'],
      server: ['served'],
      admin: ['served', 'cancelled'],
    },
    served: {
      admin: ['cancelled'], // Rare but possible
    },
  };

  const allowedTransitions = transitions[currentStatus]?.[userRole] || [];
  return allowedTransitions.includes(newStatus);
};

// Format currency
export const formatCurrency = (amount: number, locale = 'fr-FR'): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'EUR',
  }).format(amount);
};

// Format date/time
export const formatDateTime = (dateString: string, locale = 'fr-FR'): string => {
  return new Intl.DateTimeFormat(locale, {
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(new Date(dateString));
};

export const formatTime = (dateString: string, locale = 'fr-FR'): string => {
  return new Intl.DateTimeFormat(locale, {
    timeStyle: 'short',
  }).format(new Date(dateString));
};

// Calculate time elapsed
export const getTimeElapsed = (createdAt: string): number => {
  return Math.floor((Date.now() - new Date(createdAt).getTime()) / 1000 / 60); // minutes
};
