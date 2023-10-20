import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://eenkjedvnbwawzesokjq.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVlbmtqZWR2bmJ3YXd6ZXNva2pxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc3Mzk0NjksImV4cCI6MjAxMzMxNTQ2OX0.EBaoj4JjFyQ1H2WRQUJ1gyjkFJATXL7Ked3M8L-r-MQ';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
