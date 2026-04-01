import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pgolrauvlekeqhznxpjv.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBnb2xyYXV2bGVrZXFoem54cGp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUwNTkwNjEsImV4cCI6MjA5MDYzNTA2MX0.gGSm_yrpDQ6iLYZmub8863Z1yBKPTVGD3Pg9VpwWqLk';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function test() {
  console.log("Testing Supabase Insert...");
  const { data, error } = await supabase
    .from('quote_requests')
    .insert([{ full_name: 'Test', phone: '123', email: 'test@example.com', message: 'Test message' }]);
  
  if (error) {
    console.error("SUPABASE ERROR:", error);
  } else {
    console.log("SUPABASE SUCCESS:", data);
  }
}

test();
