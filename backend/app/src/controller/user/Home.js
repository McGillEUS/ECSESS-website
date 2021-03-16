const { getNewsService } = require("../../service/admin/Home");
const nodemailer = require('nodemailer');
const config = require("../../config/config");
const fs = require('fs');

const getNews = async (req, res, next) => {
    try {
        const news = await getNewsService();
        console.log(news);
        if (news) {
            return res.status(200).json({
                success: true,
                message: "fetched news successfully",
                news: news
            })
        } else {
            return res.status(200).json({
                success: true,
                message: "cannot get such news"
            })
        } 
    } catch {
        return res.status(400).json({
            success: false,
            message: `Bad request`
        })
    }
}

const postLivewireEmail = async (req, res, next) => {
    try {
        console.log(req.body);
        console.log("yee: " + JSON.stringify(req.file));
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
            to: config.email.LIVEWIREEMAIL,
            subject: `[ ${formData.senderName} - ${formData.senderOrganization} ] ${formData.subject}`,
            text: formData.message,
            attachments: [
                {
                    filename: req.file.originalname,
                    path: req.file.path
                },
            ]
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

module.exports = { getNews, postLivewireEmail };