const { RichEmbed } = require('discord.js');

module.exports = {
    name: 'tempo',
    execute(client, message, raw){
        var img = "https://c-4tvylwolbz88x24nhtlwlkphx2ejbyzljkux2ejvt.g00.gamepedia.com/g00/3_c-4dpghykvmslnluk.nhtlwlkph.jvt_/c-4TVYLWOLBZ88x24oaawzx3ax2fx2fnhtlwlkph.jbyzljku.jvtx2fdpghykvmslnluk_nhtlwlkph_lux2fmx2fmhx2fAltwv.wunx3fclyzpvux3d88h7ij94ki56i214325029677j1807h2_$/$/$/$/$?i10c.ua=1&i10c.dv=21";
        var embed = new RichEmbed()
            .setColor("62b678") 
            .setFooter("Tomi developed and maintained by Bachoo#0001")
            .setDescription("- 12% Cooldowns + 8% Run speed ")
            .setThumbnail(img)
            .setTitle(raw)

        message.channel.send(embed);        
    }
}