const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const path = require('path')


class EmailServices {
    constructor() { }

    sentMail = (emailData) => {
        console.log({ emailData });
        const transporter = nodemailer.createTransport({
            service: process.env.EMAIL_TYPE,
            auth: {
                user: process.env.EMAIL_REGISTRATION,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        console.log(process.env.EMAIL_REGISTRATION, process.env.EMAIL_PASSWORD);
        console.log({ "path": path.resolve("./src/templates/") });
        transporter.use(
            'compile',
            hbs({
                viewEngine: {
                    extName: ".handlebars",
                    partialsDir: path.join(__dirname, '../../src/template/'),
                    defaultLayout: false,
                },
                viewPath: path.join(__dirname, '../../src/template/'),
                extName: ".handlebars"
            })
        );

        console.log({ emailData: emailData });

        console.log({ "template path": path.join(__dirname, '../../src/template/') });

        const mail = {
            from: process.env.EMAIL_REGISTRATION,
            to: emailData.email,
            subject: 'One-Time Password (OTP) for Secure Access',
            template: 'sentOtp',
            context: { emailData }
        }
        transporter.sendMail(mail, (error, info) => {
            if (error) {
                throw new Error(error.message);
            }
            console.log("Message sent: %s", info.message);
        });
    }
}


module.exports = EmailServices


