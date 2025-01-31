import nodemailer from 'nodemailer';

const validateEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
};

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();
        if (!name || !email || !message) {
            return new Response(JSON.stringify({ error: 'Semua field harus diisi!' }), { status: 400 });
        }
        if (!validateEmail(email)) {
            return new Response(JSON.stringify({ error: 'Alamat email tidak valid!' }), { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: Number(process.env.EMAIL_PORT),
            secure: process.env.EMAIL_PORT === '465',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_FROM,
            replyTo: email,
            to: 'aanwidianto01@gmail.com',
            subject: `New message from portofolio form`,
            text: `Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`,
        };
        await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({ message: 'Email berhasil dikirim!' }), { status: 200 });

    } catch (error) {
        console.error('Error sending email:', error);
        let errorMessage = 'Terjadi kesalahan saat mengirim email.';
        if (error instanceof Error) {
            errorMessage = error.message;
        }
        return new Response(JSON.stringify({ error: errorMessage }), { status: 500 });
    }
}
