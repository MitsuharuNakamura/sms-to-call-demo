exports.handler = async function(context, event, callback) {
    const client = require('twilio')(context.ACCOUNT_SID, context.AUTH_TOKEN);
  
    const { to, voiceMessage } = event;  // ← ここもJSON.parseいらない！
  
    const twiml = `
      <Response>
        <Say language="ja-JP" voice="alice">
          ${voiceMessage}
        </Say>
      </Response>
    `;
  
    try {
      const call = await client.calls.create({
        to: to,
        from: context.CALLER_ID,
        twiml: twiml
      });
      return callback(null, { callSid: call.sid });
    } catch (error) {
      return callback(error);
    }
  };
  