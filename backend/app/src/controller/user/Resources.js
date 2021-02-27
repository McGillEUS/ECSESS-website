const {} = require("../../service/user/Resources");
const nodemailer = require('nodemailer');
const config = require("../../config/config");

const postAcademicEmail = async (req, res, next) => {
    try {
        console.log(req.body);
        let formData = req.body;
        let transporter = nodemailer.createTransport({
            host: config.email.EMAILHOST,
            port: config.email.EMAILPORT,
            auth: {
              user: config.email.EMAILUSER,
              pass: config.email.EMAILPASS
            }
          })
        let message = {
            from: formData.senderEmail,
            to: formData.recipientEmail,
            subject: `[ ${formData.senderFirstName} ${formData.senderLastName} ] ${formData.subject}`,
            text: formData.message
        };
        transporter.sendMail(message);
        return res.status(200).json({
            success: true,
            message: "Message sent successfully"
        })
    } catch {
        return res.status(400).json({
            success: false,
            message: `Bad request`
        })
    }
}

module.exports = { postAcademicEmail};