const { Telegraf } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.on("chat_join_request", async (ctx) => {
  const request = ctx.chatJoinRequest;
  const user = request.from;
  const chat = request.chat;

  try {
    await ctx.telegram.approveChatJoinRequest(
      chat.id,
      user.id
    );

    await ctx.telegram.sendMessage(
      user.id,
      `Hello ${user.first_name} 👋\n\nYour request to join ${chat.title} has been approved ✅`
    );
  } catch (error) {
    console.log("Error:", error.message);
  }
});

bot.launch();

console.log("Bot is running...");
