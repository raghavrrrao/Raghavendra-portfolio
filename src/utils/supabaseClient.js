export function getSupabase() {
    return window.supabase.createClient(
        "https://vffhgfmrygcmnueoechg.supabase.co",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZmZmhnZm1yeWdjbW51ZW9lY2hnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkzMjk3MTcsImV4cCI6MjA2NDkwNTcxN30.53jTnQQJXduzCijxrQtignNXl29jbLNdjcqJYFOs6zY"
    );
}