import { z } from 'zod';

// Enums
export const OrderType = z.enum(['dine_in', 'takeaway']);
export const OrderStatus = z.enum(['pending', 'preparing', 'ready', 'served', 'cancelled']);
export const PaymentStatus = z.enum(['unpaid', 'paid', 'later']);
export const TableStatus = z.enum(['free', 'active']);
export const UserRole = z.enum(['admin', 'server', 'kitchen']);

export type OrderType = z.infer<typeof OrderType>;
export type OrderStatus = z.infer<typeof OrderStatus>;
export type PaymentStatus = z.infer<typeof PaymentStatus>;
export type TableStatus = z.infer<typeof TableStatus>;
export type UserRole = z.infer<typeof UserRole>;

// Database schemas
export const TableSchema = z.object({
  id: z.string().uuid(),
  number: z.string(),
  qr_url: z.string().nullable(),
  capacity: z.number().int().positive(),
  status: TableStatus,
});

export const ProductSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1),
  category: z.string().min(1),
  price: z.number().nonnegative(),
  available: z.boolean().default(true),
  description: z.string().nullable(),
  image_url: z.string().url().nullable(),
  allergens: z.array(z.string()).default([]),
});

export const OrderSchema = z.object({
  id: z.string().uuid(),
  type: OrderType,
  table_id: z.string().uuid().nullable(),
  status: OrderStatus,
  total: z.number().nonnegative(),
  payment_status: PaymentStatus,
  pickup_slot: z.string().datetime().nullable(),
  created_at: z.string().datetime(),
});

export const OrderItemSchema = z.object({
  id: z.string().uuid(),
  order_id: z.string().uuid(),
  product_id: z.string().uuid(),
  qty: z.number().int().positive(),
  note: z.string().nullable(),
});

export const UserSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  name: z.string(),
  role: UserRole,
  created_at: z.string().datetime(),
});

// Types inferred from schemas
export type Table = z.infer<typeof TableSchema>;
export type Product = z.infer<typeof ProductSchema>;
export type Order = z.infer<typeof OrderSchema>;
export type OrderItem = z.infer<typeof OrderItemSchema>;
export type User = z.infer<typeof UserSchema>;

// API Request schemas
export const CreateOrderRequestSchema = z.object({
  type: OrderType,
  table_id: z.string().uuid().optional(),
  payment_status: PaymentStatus.default('unpaid'),
  pickup_slot: z.string().datetime().optional(),
});

export const CreateOrderItemRequestSchema = z.object({
  order_id: z.string().uuid(),
  product_id: z.string().uuid(),
  qty: z.number().int().positive(),
  note: z.string().optional(),
});

export const UpdateOrderStatusRequestSchema = z.object({
  status: OrderStatus,
});

export const CreateProductRequestSchema = z.object({
  name: z.string().min(1),
  category: z.string().min(1),
  price: z.number().nonnegative(),
  available: z.boolean().default(true),
  description: z.string().optional(),
  image_url: z.string().url().optional(),
  allergens: z.array(z.string()).default([]),
});

export type CreateOrderRequest = z.infer<typeof CreateOrderRequestSchema>;
export type CreateOrderItemRequest = z.infer<typeof CreateOrderItemRequestSchema>;
export type UpdateOrderStatusRequest = z.infer<typeof UpdateOrderStatusRequestSchema>;
export type CreateProductRequest = z.infer<typeof CreateProductRequestSchema>;

// Extended types for UI
export interface OrderWithItems extends Order {
  items?: (OrderItem & { product?: Product })[];
  table?: Table;
}

export interface CartItem {
  product: Product;
  quantity: number;
  note?: string;
}

export interface DailyStats {
  day: string;
  orders_count: number;
  revenue: number;
}
