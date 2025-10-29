import { createClient } from '@supabase/supabase-js';

// Types
export interface SupabaseConfig {
  url: string;
  anonKey: string;
  serviceRoleKey?: string;
}

// Create Supabase client (client-side)
export const createSupabaseClient = (config: SupabaseConfig) => {
  return createClient(config.url, config.anonKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
    },
    realtime: {
      params: {
        eventsPerSecond: 10,
      },
    },
  });
};

// Create Supabase admin client (server-side only)
export const createSupabaseAdminClient = (config: Required<SupabaseConfig>) => {
  return createClient(config.url, config.serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
};

export type SupabaseClient = ReturnType<typeof createSupabaseClient>;
export type SupabaseAdminClient = ReturnType<typeof createSupabaseAdminClient>;
