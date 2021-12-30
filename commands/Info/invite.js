const {
  MessageEmbed
} = require("discord.js");
const config = require("../../botconfig/config.json");
var ee = require("../../botconfig/embed.json");
const settings = require("../../botconfig/settings.json");
module.exports = {
  name: "invite", //the command name for execution & for helpcmd [OPTIONAL]

  category: "Info",
  usage: "invite",
  aliases: ["inviteme", "addme", ],

  cooldown: 5, //the command cooldown for execution & for helpcmd [OPTIONAL]
  description: "Sends you an invite link", //the command description for helpcmd [OPTIONAL]
  memberpermissions: [], //Only allow members with specific Permissions to execute a Commmand [OPTIONAL]
  requiredroles: [], //Only allow specific Users with a Role to execute a Command [OPTIONAL]
  alloweduserids: [], //Only allow specific Users to execute a Command [OPTIONAL]
  run: async (client, message, args) => {
    try {
      message.reply({
        embeds: [
          new MessageEmbed().setColor(ee.color)
          .setFooter(ee.footertext, ee.footericon)
          .setDescription(`[**Click here to invite me!**](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands)\n\n||[**Click here to invite me __without__ Slash Commands!**](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot)||`)
          
     const vote = new disbut.MessageButton()
.setLabel('Vote')
.setStyle('url')
.setEmoji('✨')
.setURL('https://top.gg/bot/859937907464732722/vote');

const invite = new disbut.MessageButton()
.setLabel('Invite')
.setStyle('url')
.setEmoji('910978598356262934')
.setURL('https://discord.com/oauth2/authorize?client_id=859937907464732722&permissions=8&scope=bot%20applications.commands');


const support = new disbut.MessageButton()
.setLabel('Support')
.setStyle('url')
.setEmoji('905887440378691594')
.setURL('https://discord.gg/JCtqn4A2Y2');

const website = new disbut.MessageButton()
.setLabel('Website')
.setStyle('url')
.setEmoji('905888428594429973')
.setURL('https://security-bot1-1.junger.repl.co/');


const trash = new disbut.MessageButton()
.setLabel('Delete')
.setID('delete')
.setEmoji('903698016240828426')
.setStyle('red')
 message.react("<a:797855362694774804:891459284183941170>");

const me = await message.channel.send(help,{buttons : [ website, support, invite, vote , trash]})

 const filter = async(btn) => btn.clicker.user.id == message.member.id
                const collector = me.createButtonCollector(filter)

        collector.on("collect", async(button) => {
                     button.reply.defer()
                     if(button.id === "delete") {
                       me.delete().then(()=> message.delete())

 




          
        ]
      });
    } catch (e) {
      console.log(String(e.stack).bgRed)
    }
  }
}
/**
 * @INFO
 * Bot Coded by Tomato#6966 | https://github.com/Tomato6966/discord-js-lavalink-Music-Bot-erela-js
 * @INFO
 * Work for Milrato Development | https://milrato.eu
 * @INFO
 * Please mention Him / Milrato Development, when using this Code!
 * @INFO
 */
