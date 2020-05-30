exports.spleef  = function () {
  //Instantiations;
  var player;
  var objective;
  var players;
  var gameId;
  var block;
  var teamColor;
  var color;
  var _player;
  var attacker;
  var defender;
  var teams;
  var deadColor;
  var score;
  var value;
  var elapsedTime;
  var winner;
  var projectile;
  var blocks;
  org.bukkit.Bukkit.dispatchCommand(org.bukkit.Bukkit.getConsoleSender(), "kick @a restarting server");
  exports.gameId=null;
  events.playerJoin( function (event) {
    player=(event.getPlayer== null) ? null : event.getPlayer();
    if (((exports.gameId) == (null))){
      (function () {var _world;var _chunks;var _chunk;var _blocks;var _blockType;var _inventory;
      _world=server.worlds[0];_chunks=_world.getLoadedChunks();
      for (var _chunkIndex=0; _chunkIndex<_chunks.length;_chunkIndex++) {_chunk=_chunks[_chunkIndex];_blocks=_chunk.getTileEntities();for (var _blockIndex=0; _blockIndex<_blocks.length;_blockIndex++) {
      _blockType=(_blocks[_blockIndex]==null)?null:_blocks[_blockIndex].getType();
      if (_blockType == org.bukkit.Material.CHEST){
      _inventory=_blocks[_blockIndex].getBlockInventory();_inventory.clear();
      console.log ( "add goodies");
      for (var _goodieIndex=0;_goodieIndex<[
        new org.bukkit.inventory.ItemStack (org.bukkit.Material.SNOWBALL,32),
        new org.bukkit.inventory.ItemStack (org.bukkit.Material.DIAMOND_SHOVEL,5),
        new org.bukkit.inventory.ItemStack (org.bukkit.Material.SNOW_BLOCK,128),
        new org.bukkit.inventory.ItemStack (org.bukkit.Material.ARROW,128),
        new org.bukkit.inventory.ItemStack (org.bukkit.Material.CROSSBOW,16)
      ].length;_goodieIndex++) {
      if ((parseInt (Math.random () * (100-1)) + 1) > 50){_inventory.addItem ([
        new org.bukkit.inventory.ItemStack (org.bukkit.Material.SNOWBALL,32),
        new org.bukkit.inventory.ItemStack (org.bukkit.Material.DIAMOND_SHOVEL,5),
        new org.bukkit.inventory.ItemStack (org.bukkit.Material.SNOW_BLOCK,128),
        new org.bukkit.inventory.ItemStack (org.bukkit.Material.ARROW,128),
        new org.bukkit.inventory.ItemStack (org.bukkit.Material.CROSSBOW,16)
      ][_goodieIndex]);
      }}}}}})();
      var manager = org.bukkit.Bukkit.getScoreboardManager();
      exports.board = manager.getNewScoreboard();
      var objective = exports.board.registerNewObjective("objective1", "HEALTH", "Scoreboard");
      objective.setDisplaySlot(org.bukkit.scoreboard.DisplaySlot.SIDEBAR);
      objective = exports.board.getObjective (org.bukkit.scoreboard.DisplaySlot.SIDEBAR);
      objective.setDisplayName("Welcome to Spleef yo");
      // Update scoreboard for all players
      players=server.getOnlinePlayers();
      for (var playerIndex=0; playerIndex<players.length;playerIndex++) {
        score=(players[playerIndex]== null)? null : (players[playerIndex].getMetadata == null)?null:(players[playerIndex].getMetadata("_score_").length == 0)?null:players[playerIndex].getMetadata("_score_")[0].value();
        objective = exports.board.getObjective (org.bukkit.scoreboard.DisplaySlot.SIDEBAR);
        objective.getScore(players[playerIndex]).setScore(score);
        players[playerIndex].setScoreboard (exports.board);
      };
      objective = exports.board.getObjective (org.bukkit.scoreboard.DisplaySlot.SIDEBAR);
      players = server.getOnlinePlayers();
      for (var playersIndex=0; playersIndex<players.length; playersIndex++) {
        objective.getScore(players[playersIndex]).setScore(0);
        players[playersIndex].setScoreboard (exports.board);
      }
      org.bukkit.Bukkit.dispatchCommand(org.bukkit.Bukkit.getConsoleSender(), "fill -81 8 126 -90 8 135 snow_block");
      org.bukkit.Bukkit.dispatchCommand(org.bukkit.Bukkit.getConsoleSender(), "setworldspawn -73 29 80");
      org.bukkit.Bukkit.dispatchCommand(org.bukkit.Bukkit.getConsoleSender(), "setspawn -73 29 80");
      exports.teams=[];
      console.log ("First pass for spleef server");
      exports.gameId=new Date().getTime();
    }
    gameId=(player== null)? null : (player.getMetadata == null)?null:(player.getMetadata("_gameid_").length == 0)?null:player.getMetadata("_gameid_")[0].value();
    if (((gameId) != (exports.gameId))){
      console.log ("First pass for player in this game " + player.name);
      (function() {
        if (player != null ) {
           player.sendMessage ("Welcome to Spleef!");
        }
       })();
      player.removeMetadata ("_team_", __plugin );
      fd = new org.bukkit.metadata.FixedMetadataValue (__plugin,exports.gameId);
      if (player != null) {
        if (player.setMetadata != null ) {
          player.setMetadata ("_gameid_", fd );
        }
      }
      fd = new org.bukkit.metadata.FixedMetadataValue (__plugin,0);
      if (player != null) {
        if (player.setMetadata != null ) {
          player.setMetadata ("_score_", fd );
        }
      }
      if (player != null) {
        objective = exports.board.getObjective (org.bukkit.scoreboard.DisplaySlot.SIDEBAR);
        objective.getScore(player).setScore(0);
        player.setScoreboard (exports.board);
      }
      setTimeout (function () {
        player.teleport(new org.bukkit.Location(server.worlds[0], -73, 29, 80), org.bukkit.event.player.PlayerTeleportEvent.TeleportCause.PLUGIN);
      },2000);
      player.setGameMode(org.bukkit.GameMode.SURVIVAL);
      org.bukkit.Bukkit.dispatchCommand(org.bukkit.Bukkit.getConsoleSender(), "effect give " + player.name + " instant_health 20");
      player.getInventory().clear();
    }
  });
  events.playerInteract( function (event) {
    player=(event.getPlayer== null) ? null : event.getPlayer();
    block=(event.getClickedBlock== null) ? null : event.getClickedBlock();
    if ((((block==null)?null:block.getType()) == (org.bukkit.Material.OAK_SIGN))){
      teamColor=((block==null)?null: (block.state.getLine == null)?null:block.state.getLine(1)).toUpperCase();
      if ((["ORANGE", "RED", "BLUE", "WHITE"].indexOf ( teamColor) >= 0)){
        if ((((player== null)? null : (player.getMetadata == null)?null:(player.getMetadata("_team_").length == 0)?null:player.getMetadata("_team_")[0].value()) == (null))){
          fd = new org.bukkit.metadata.FixedMetadataValue (__plugin,teamColor);
          if (player != null) {
            if (player.setMetadata != null ) {
              player.setMetadata ("_team_", fd );
            }
          }
        }
        else {
          teamColor=(player== null)? null : (player.getMetadata == null)?null:(player.getMetadata("_team_").length == 0)?null:player.getMetadata("_team_")[0].value();
        }
        eval ( "color = org.bukkit.Color." + teamColor);
        _player = player;
        var items = require ('items');
        var helmet = items.leatherHelmet(1);
        var helmetMeta = helmet.itemMeta;
        helmetMeta.color = color;
        helmet.itemMeta = helmetMeta;
        _player.equipment.helmet = helmet;
        var boots = items.leatherBoots(1);
        var bootsMeta = boots.itemMeta;
        bootsMeta.color = color;
        boots.itemMeta = bootsMeta;
        _player.equipment.boots = boots;
        var chest = items.leatherChestplate(1);
        var chestMeta = chest.itemMeta;
        chestMeta.color = color;
        chest.itemMeta = chestMeta;
        _player.equipment.chestplate = chest;
        var legs = items.leatherLeggings(1);
        var legsMeta = legs.itemMeta;
        legsMeta.color = color;
        legs.itemMeta = legsMeta;
        _player.equipment.leggings = legs;
      }
      if (((teamColor) == ("ORANGE"))){
        setTimeout (function () {
          player.teleport(new org.bukkit.Location(server.worlds[0], -93, 16, 123), org.bukkit.event.player.PlayerTeleportEvent.TeleportCause.PLUGIN);
        },2000);
      }
      else if (((teamColor) == ("BLUE"))){
        setTimeout (function () {
          player.teleport(new org.bukkit.Location(server.worlds[0], -93, 16, 137), org.bukkit.event.player.PlayerTeleportEvent.TeleportCause.PLUGIN);
        },2000);
      }
      else if (((teamColor) == ("WHITE"))){
        setTimeout (function () {
          player.teleport(new org.bukkit.Location(server.worlds[0], -78, 16, 139), org.bukkit.event.player.PlayerTeleportEvent.TeleportCause.PLUGIN);
        },2000);
      }
      else if (((teamColor) == ("RED"))){
        setTimeout (function () {
          player.teleport(new org.bukkit.Location(server.worlds[0], -78, 16, 123), org.bukkit.event.player.PlayerTeleportEvent.TeleportCause.PLUGIN);
        },2000);
      }
    }
  });
  events.entityDamage( function (event) {
    attacker=(event.getDamager== null) ? null : event.getDamager();
    defender=(event.getEntity== null) ? null : event.getEntity();
    if ((function() {   var value1 = (attacker== null)? null : (attacker.getMetadata == null)?null:(attacker.getMetadata("_team_").length == 0)?null:attacker.getMetadata("_team_")[0].value();  var value2 = (player== null)? null : (player.getMetadata == null)?null:(player.getMetadata("_team_").length == 0)?null:player.getMetadata("_team_")[0].value();  var s = (value1 == value2);  return s; })()){
      (function() {
        if (attacker != null ) {
           attacker.sendMessage ("Ouch, we are on the same Team!");
        }
       })();
      event.cancelled = true;
    }
  });
  events.playerDeath( function (event) {
    player=(event.getEntity== null) ? null : event.getEntity();
    player.setGameMode(org.bukkit.GameMode.SPECTATOR);
    players=server.getOnlinePlayers();
    teams=[];
    deadColor=(player== null)? null : (player.getMetadata == null)?null:(player.getMetadata("_team_").length == 0)?null:player.getMetadata("_team_")[0].value();
    for (var i=0; i<players.length;i++) {
      (function() {
        if (players[i] != null ) {
           players[i].sendMessage (player.name + " died");
        }
       })();
      if (((players[i]) != (player))){
        teamColor=(players[i]== null)? null : (players[i].getMetadata == null)?null:(players[i].getMetadata("_team_").length == 0)?null:players[i].getMetadata("_team_")[0].value();
        if (((deadColor) != (teamColor))){
          score=(players[i]== null)? null : (players[i].getMetadata == null)?null:(players[i].getMetadata("_score_").length == 0)?null:players[i].getMetadata("_score_")[0].value();
          (function () {
            var value = ( score==null)?0:score;
            score= value+1;
          })();
          fd = new org.bukkit.metadata.FixedMetadataValue (__plugin,score);
          if (players[i] != null) {
            if (players[i].setMetadata != null ) {
              players[i].setMetadata ("_score_", fd );
            }
          }
          if (player != null) {
            objective = exports.board.getObjective (org.bukkit.scoreboard.DisplaySlot.SIDEBAR);
            objective.getScore(players[i]).setScore(score);
            players[i].setScoreboard (exports.board);
          }
        }
        if (! ((teams.indexOf ( teamColor) >= 0))){
          if (! ((players[i] == null ) ? false : (players[i].getGameMode().toString() == "SPECTATOR"))){
            teams.push (teamColor)
          }
        }
      }
    };
    elapsedTime=(new Date().getTime()) - (exports.gameId);
    if (((elapsedTime) > 180)){
      teams=(function() {    var _players=server.getOnlinePlayers();var _teams=[];var _teamColor;
         for (var i=0; i<_players.length;i++) {
            _teamColor=(_players[i]== null)? null : (_players[i].getMetadata == null)?null:(_players[i].getMetadata("_team_").length == 0)?null:players[i].getMetadata("_team_")[0].value();
            if (! ((_teams.indexOf (_teamColor) >= 0))){
               if (! ((_players[i] == null ) ? false : (_players[i].getGameMode().toString() == "SPECTATOR"))){
                  _teams.push (_teamColor);
               }
            }
         }
         console.log ( "Active teams: " + _teams );
         return _teams;
       })();
      if (((teams.length) == 1)){
        winner=teams[0];
        org.bukkit.Bukkit.dispatchCommand(org.bukkit.Bukkit.getConsoleSender(), "say @a " + "Team " + winner + " has won!" );
        org.bukkit.Bukkit.dispatchCommand(org.bukkit.Bukkit.getConsoleSender(), "kick @a Team " + winner + " has won");
        exports.gameId=null;
      }
    }
  });
  events.playerRespawn( function (event) {
    player=(event.getPlayer== null) ? null : event.getPlayer();
    if (false){
      org.bukkit.Bukkit.dispatchCommand(org.bukkit.Bukkit.getConsoleSender(), "effect give " + player.name + " instant_health 20");
      player.getInventory().clear();
      player.getInventory().setItem (0,new org.bukkit.inventory.ItemStack (org.bukkit.Material.SNOW_BLOCK,16) );
      player.getInventory().setItem (1,new org.bukkit.inventory.ItemStack (org.bukkit.Material.DIAMOND_SHOVEL,1) );
    }
    teamColor=(player== null)? null : (player.getMetadata == null)?null:(player.getMetadata("_team_").length == 0)?null:player.getMetadata("_team_")[0].value();
    if (((teamColor) == (null))){
      setTimeout (function () {
        player.teleport(new org.bukkit.Location(server.worlds[0], -73, 29, 80), org.bukkit.event.player.PlayerTeleportEvent.TeleportCause.PLUGIN);
      },2000);
    }
    else {
      if (((teamColor) == ("ORANGE"))){
        setTimeout (function () {
          player.teleport(new org.bukkit.Location(server.worlds[0], -93, 16, 123), org.bukkit.event.player.PlayerTeleportEvent.TeleportCause.PLUGIN);
        },2000);
      }
      else if (((teamColor) == ("BLUE"))){
        setTimeout (function () {
          player.teleport(new org.bukkit.Location(server.worlds[0], -93, 16, 137), org.bukkit.event.player.PlayerTeleportEvent.TeleportCause.PLUGIN);
        },2000);
      }
      else if (((teamColor) == ("WHITE"))){
        setTimeout (function () {
          player.teleport(new org.bukkit.Location(server.worlds[0], -78, 16, 139), org.bukkit.event.player.PlayerTeleportEvent.TeleportCause.PLUGIN);
        },2000);
      }
      else if (((teamColor) == ("RED"))){
        setTimeout (function () {
          player.teleport(new org.bukkit.Location(server.worlds[0], -78, 16, 123), org.bukkit.event.player.PlayerTeleportEvent.TeleportCause.PLUGIN);
        },2000);
      }
    }
  });
  events.projectileHit( function (event) {
    projectile=(event.getEntity== null) ? null : event.getEntity();
    block=(event.getHitBlock== null) ? null : event.getHitBlock();
    if (((projectile.getType()) == (org.bukkit.entity.EntityType.SNOWBALL))){
      blocks=(function() {   var _blocks = [];
        var _blockType;
        var _loc;
        for (var _x=(block.location).x-0;_x<=(block.location).x+0;_x++) {    for (var _y=(block.location).y-0;_y<=(block.location).y+0;_y++) {      for (var _z=(block.location).z-0;_z<=(block.location).z+0;_z++) {         _loc = new org.bukkit.Location(server.worlds[0], _x,_y,_z);         _blockType =  server.worlds[0].getBlockAt(_loc).getType();
               if (_blockType == (org.bukkit.Material.SNOW_BLOCK)) { _blocks.push (server.worlds[0].getBlockAt(_loc)); }
        }}}
        console.log ( "found" + _blocks.length + " blocks " );
        return _blocks;
       })();
      for (var i=0; i<blocks.length;i++) {
        blocks[i].setType(org.bukkit.Material.AIR);
      };
    }
  });
  events.blockBreak( function (event) {
    block=event.getBlock();
    if ((((block==null)?null:block.getType()) != (org.bukkit.Material.SNOW_BLOCK))){
      event.cancelled = true;
    }
  });
};
