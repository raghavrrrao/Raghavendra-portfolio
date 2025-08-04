import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY // safer than anon for server
);

export default async function handler(req, res) {
    const { error } = await supabase.from('pings').insert([
        { source: 'vercel-cron' }
    ]);

    if (error) {
        console.error('Supabase ping failed:', error);
        return res.status(500).json({ error: 'Failed to ping' });
    }

    return res.status(200).json({ message: 'Ping sent successfully' });
}
