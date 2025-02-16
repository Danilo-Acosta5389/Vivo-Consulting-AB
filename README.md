# Vivo Consulting AB

This is the company Vivo Consulting AB's website built with Next.js and TypeScript. It serves as an informative platform and allows users to contact the company via an email form. The form includes validation using Zod and prevents bot submissions using Google ReCAPTCHA v3.

## Features

- **Built with Next.js 15 and React 19** for modern web development.
- **Email form with validation** powered by Zod.
- **Google ReCAPTCHA v3 integration** to prevent spam.
- **Nodemailer SMTP support** for sending emails securely.
- **Uses pnpm as a package manager** for efficient dependency management.

## Technologies Used

- **Framework**: Next.js 15, React 19
- **Language**: TypeScript
- **Package Manager**: pnpm 9+
- **Validation**: Zod
- **Email Service**: Nodemailer
- **Bot Protection**: Google ReCAPTCHA v3

## Contributors

All credits go to:

- **Developer**: Danilo Acosta Dote
- **Designer**: Felicia Avila Förenrud

## Live Demo

If the project is deployed, add a link here: `[Live Demo](https://dev-vivoconsulting.ddns.net)`

## Prerequisites

To run this project locally, you need the following:

- **Node.js v18.12 or above**
- **pnpm 9 or above**
- **Google ReCAPTCHA v3 API keys**
- **SMTP credentials** for email sending

## Installation & Setup

1. **Clone the repository**
   ```sh
   git clone https://github.com/your-repo.git
   cd your-repo
   ```
2. **Install dependencies**
   ```sh
   pnpm install
   ```
3. **Create and configure the `.env` file** in the root directory:

   ```sh
   # SMTP Credentials
   SMTP_USERNAME="your-email@example.com"
   SMTP_PASSWORD="your-app-password"

   # Email Recipient
   EMAIL_RECIPIENT="recipient@example.com"

   # Google ReCAPTCHA Keys
   NEXT_PUBLIC_RECAPTCHA_SITE_KEY="your-site-key"
   RECAPTCHA_SECRET_KEY="your-secret-key"
   ```

4. **Modify `src/utils/email-sender.ts`**

   - Update the variables `process.env.DEVELOPER`, `process.env.DESIGNER`, and `process.env.CLIENT` to match the correct `.env` values.

5. **Run the development server**
   ```sh
   pnpm run dev
   ```

## Warning ⚠️

- **Make sure you update `src/utils/email-sender.ts`** to use the correct environment variables.
- **Your SMTP password is sensitive!** Do not expose it in public repositories.

## Contact

For any issues or collaboration, reach out via:

- **GitHub**: [Danilo Acosta](https://github.com/Danilo-Acosta5389)

- **LinkedIn**: [Danilo Acosta](https://www.linkedin.com/in/danilo-acosta-dote/)
- **Email**: danilo.acosta5389@outlook.com

- **LinkedIn**: [Felicia Förnerud](https://www.linkedin.com/in/felicia-f%C3%B6rnerud/)
- **Email**: felicia.fornerud@gmail.com
