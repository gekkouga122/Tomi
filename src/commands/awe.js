const { RichEmbed } = require('discord.js');

module.exports = {
    name: 'awe',
    execute(client, message, raw){
        var img = "https://c-4tvylwolbz88x24nhtlwlkphx2ejbyzljkux2ejvt.g00.gamepedia.com/g00/3_c-4dpghykvmslnluk.nhtlwlkph.jvt_/c-4TVYLWOLBZ88x24oaawzx3ax2fx2fnhtlwlkph.jbyzljku.jvtx2fdpghykvmslnluk_nhtlwlkph_lux2flx2fl0x2fHdl.wunx3fclyzpvux3dkm69312025l3j6jhk72l35jklmm69ij2_$/$/$/$/$?i10c.ua=1&i10c.dv=21";
        var embed = new RichEmbed()
            .setColor("f4c41c") 
            .setFooter("Tomi developed and maintained by Bachoo#0001")
            .setDescription("+ 12% Crit chance + 20% Crit damage")
            .setThumbnail(img)
            .setTitle(raw)

        message.channel.send(embed);
    }
}