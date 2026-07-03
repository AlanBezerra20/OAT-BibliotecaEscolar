const SUPABASE_URL = 'https://wyzzijjpmholmgypxvuk.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_CqCXL4wRWZKclGsP-mchxA_oAa0kC6e';

if (!window.supabase) {
    throw new Error('A biblioteca do Supabase não foi carregada no index.html.');
}

if (
    SUPABASE_URL.includes('COLOQUE_') ||
    SUPABASE_PUBLISHABLE_KEY.includes('COLOQUE_')
) {
    console.warn(
        'Configure SUPABASE_URL e SUPABASE_PUBLISHABLE_KEY em js/config/supabaseClient.js.'
    );
}

export const supabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);
