/* ============================================================
   supabase.js
   Configuração da conexão com o Supabase.

   IMPORTANTE:
   - Utilize somente a URL pública do projeto e a chave
     "anon" / "publishable".
   - NUNCA utilize a "service_role" no frontend.
   ============================================================ */

const SUPABASE_URL = 'https://ssmnbpzlffagcgmipqha.supabase.co/rest/v1/';

const SUPABASE_ANON_KEY = 'sb_publishable_-0VIomAnPRb9-UhAeIbeOA_alXXyu-S';

// O objeto global `supabase` vem do script carregado via CDN
// no index.html.
const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);
