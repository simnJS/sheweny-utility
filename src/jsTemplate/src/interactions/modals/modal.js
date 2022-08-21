const { Modal } = require('discord.js')

module.export = class className extends Modal {
  constructor(client) {
    super(client, ["modalId"]);
  }
  
  async execute(modal) {
    modal.reply("Modal received.");
  }
};
