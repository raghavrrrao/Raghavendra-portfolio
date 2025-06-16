import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

serve(async (req) => {
    const { name, email, subject, message } = await req.json();

    // Validate input
    if (!name || !email || !subject || !message) {
        return new Response(
            JSON.stringify({ error: "All fields are required" }),
            { status: 400 }
        );
    }

    if (!validateEmail(email)) {
        return new Response(
            JSON.stringify({ error: "Invalid email format" }),
            { status: 400 }
        );
    }

    // Sanitize input
    const cleanInputs = {
        name: name.substring(0, 100),
        email: email.substring(0, 100),
        subject: subject.substring(0, 200),
        message: message.substring(0, 1000)
    };

    return new Response(JSON.stringify(cleanInputs), { status: 200 });
});