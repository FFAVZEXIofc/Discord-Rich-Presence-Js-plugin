const Discord = require('discord-rpc');

// Replace YOUR_CLIENT_ID with your actual client ID
const clientId = 'YOUR_CLIENT_ID';

// Initialize Discord RPC
Discord.initialize(clientId);

// Set up the Discord Rich Presence activity
const activity = {
  state: 'Playing a game',
  details: 'Creating a Discord Rich Presence',
  startTimestamp: Date.now(),
  largeImageKey: 'logo',
  largeImageText: 'Discord Rich Presence',
  smallImageKey: 'icon',
  smallImageText: 'Example app'
};

// Set the activity
Discord.setActivity(activity);
