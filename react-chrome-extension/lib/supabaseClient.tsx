import { createClient } from '@supabase/supabase-js'
import {Database} from "../schema/schema"


const publicKey = process.env.PUB_SUPABASE_SECRET_KEY ?? "Public Key for Supabase missing";

export const supabase = createClient<Database>('https://mhxmexdtagjbmquxeusj.supabase.co', publicKey);