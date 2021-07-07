const { directMention } = require("@slack/bolt");
const { anyOf, directMessage } = require("../middleware");

module.exports = function (app) {
    app.message("help", anyOf(directMention(), directMessage()), respondToHelp);
};

async function respondToHelp({ message, say }) {
    await say(message.text);
}
