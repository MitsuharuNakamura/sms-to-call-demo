exports.handler = async function(context, event, callback) {
    const client = require('twilio')(context.ACCOUNT_SID, context.AUTH_TOKEN);
  
    const { to, smsBody } = event;  // ← そのまま使う！JSON.parseしない！
  
    try {
      const message = await client.messages.create({
        to: to,
        from: "TWILIODEMO",
        body: smsBody,
      });
      return callback(null, { sid: message.sid });
    } catch (error) {
      return callback(error);
    }
  };
  