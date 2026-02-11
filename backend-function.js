
/**
 * GOOGLE CLOUD FUNCTION (Node.js 18+)
 * 
 * To deploy this:
 * 1. Create a new Cloud Function in GCP Console.
 * 2. Set Trigger: HTTPS.
 * 3. Runtime: Node.js 20.
 * 4. Add the following code to index.js.
 * 5. Add "nodemailer" and "cors" to package.json dependencies.
 */

const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true});

exports.contactHandler = (req, res) => {
  // 1. Handle CORS
  return cors(req, res, async () => {
    // 2. Only allow POST requests
    if (req.method !== 'POST') {
      return res.status(405).send({ error: 'Method Not Allowed' });
    }

    const { name, email, message, source } = req.body;

    // 3. Basic Validation
    if (!name || !email || !message) {
      return res.status(400).send({ error: 'Missing required fields' });
    }

    try {
      // 4. Configure Email Transport
      // Recommendation: Use an App Password for Gmail or a dedicated SMTP service like SendGrid
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.SMTP_USER, // Set this in Cloud Function Environment Variables
          pass: process.env.SMTP_PASS, // Set this in Cloud Function Environment Variables
        },
      });

      // 5. Setup Email Content for the Owner (You)
      const mailToOwner = {
        from: `"IPTVinov Leads" <${process.env.SMTP_USER}>`,
        to: 'support@iptvinov.com',
        subject: `New IPTV Lead from ${name}`,
        html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Source:</strong> ${source || 'Website'}</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <div style="padding: 10px; border-left: 4px solid #4f46e5; background: #f3f4f6;">
            ${message}
          </div>
        `,
      };

      // 6. Setup Auto-Reply for the Customer
      const mailToCustomer = {
        from: `"IPTVinov Support" <${process.env.SMTP_USER}>`,
        to: email,
        subject: 'We received your message!',
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: auto;">
            <h2 style="color: #4f46e5;">Hello ${name},</h2>
            <p>Thank you for reaching out to <strong>IPTVinov</strong>!</p>
            <p>We have received your message regarding our IPTV subscriptions. One of our agents will review your request and get back to you within 24 hours.</p>
            <p>If you need faster assistance, feel free to message us on WhatsApp: <strong>+212-724-57-38-95</strong></p>
            <br/>
            <p>Best regards,<br/>The IPTVinov Team</p>
          </div>
        `,
      };

      // Send emails
      await Promise.all([
        transporter.sendMail(mailToOwner),
        transporter.sendMail(mailToCustomer)
      ]);

      return res.status(200).send({ success: true, message: 'Emails sent successfully' });
    } catch (error) {
      console.error('SMTP Error:', error);
      return res.status(500).send({ error: 'Failed to send emails' });
    }
  });
};
