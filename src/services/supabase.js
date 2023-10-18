import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://snuznhwrgnfkfxwvgxcb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNudXpuaHdyZ25ma2Z4d3ZneGNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUyOTkzMjYsImV4cCI6MjAxMDg3NTMyNn0.s8OftsqepEyWYcVgidxlqKmIB4NJoMZ2qjXcBV2yDpo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
