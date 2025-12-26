import transporter from "../config/mail.js";

export async function sendAssignmentEmail(santa, receiver) {
  const wishlistText = receiver.wishlist ? receiver.wishlist: "No wishlist provided";
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: santa.email,
    subject: "🎁 Your Secret Santa Assignment",
    text: `
Hi ${santa.name},

You are the Secret Santa for ${receiver.name}!

Wishlist:
${wishlistText}

Happy gifting!
`
  };

  await transporter.sendMail(mailOptions);
}
