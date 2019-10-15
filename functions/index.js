const functions = require('firebase-functions');
const sgMail = require('@sendgrid/mail');
const cors = require('cors')({ origin: true });

const SENDGRID_API_KEY = functions.config().sendgrid.key;
sgMail.setApiKey(SENDGRID_API_KEY);

const parseBody = body => {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    companyName,
    numberOfEmployees
  } = body;

  let { message } = body;

  if (!message.length) {
    message = 'No additional information was provided.';
  }

  return {
    personalizations: [
      {
        to: [
          {
            email: 'jawang12@gmail.com',
            name: 'Jimmy Wang'
          }
        ],
        dynamic_template_data: {
          firstName,
          lastName,
          email,
          phoneNumber,
          companyName,
          numberOfEmployees,
          message,
          subject: 'Demo Requested!'
        }
      }
    ],
    from: {
      email: 'jawang12@gmail.com',
      name: 'J. Wang'
    },
    template_id: 'd-9dbd80ccbf094f1e8d0e5e40dcba3dd0'
  };
};

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.sendContactEmail = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    return sgMail
      .send(parseBody(request.body))
      .then(() =>
        response.status(200).send(response + ' success from the cloud')
      )
      .catch(error =>
        response.status(400).send(error + ' mail failed to send')
      );
  });
});
