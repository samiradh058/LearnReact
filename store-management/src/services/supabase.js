import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://diwrkcjqgtskfiifreyl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpd3JrY2pxZ3Rza2ZpaWZyZXlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkxNDY0NjYsImV4cCI6MjA0NDcyMjQ2Nn0.Tf1j2ivIlMAIwie8hmc2ht2Hx0CxnyLiDMQa26_jDU8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
