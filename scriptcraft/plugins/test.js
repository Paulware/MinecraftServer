  exports.lobby={  x:410,y:20,z:649};
  exports.teamLobby={  x:425,y:20,z:650};
  exports.blueDefenders={  "0":{  x:509,y:20,z:746}};
  exports.redDefenders={  "0":{  x:489,y:20,z:251}};
  exports.beds={  "blue":{  x:509,y:20,z:766},"red":{  x:489,y:20,z:271}};
  exports.spawnPoint={  "blue":{  x:509,y:20,z:766},"red":{  x:489,y:20,z:271}};
  exports.spawnPoints=[
    new org.bukkit.Location(server.worlds[0], exports.teamLobby.x, exports.teamLobby.y, exports.teamLobby.z),
    new org.bukkit.Location(server.worlds[0], exports.lobby.x, exports.lobby.y, exports.lobby.z)
  ];
  exports.bedLocations=[
    new org.bukkit.Location(server.worlds[0], exports.beds["red"].x, exports.beds["red"].y, exports.beds["red"].z),
    new org.bukkit.Location(server.worlds[0], exports.beds["blue"].x, exports.beds["blue"].y, exports.beds["blue"].z)
  ];
  events.serverLoad( function (event) {
    exports.gameId=new Date().getTime();
    org.bukkit.Bukkit.dispatchCommand(org.bukkit.Bukkit.getConsoleSender(), "gamemode survival @a");
    org.bukkit.Bukkit.dispatchCommand(org.bukkit.Bukkit.getConsoleSender(), "gamerule keepinventory true");
    org.bukkit.Bukkit.dispatchCommand(org.bukkit.Bukkit.getConsoleSender(), "gamerule doweathercycle false");
    org.bukkit.Bukkit.dispatchCommand(org.bukkit.Bukkit.getConsoleSender(), "gamerule dodaylightcycle false");
    org.bukkit.Bukkit.dispatchCommand(org.bukkit.Bukkit.getConsoleSender(), "gamerule commandblockoutput false");
    org.bukkit.Bukkit.dispatchCommand(org.bukkit.Bukkit.getConsoleSender(), "gamerule sendCommandFeedback false");
    org.bukkit.Bukkit.dispatchCommand(org.bukkit.Bukkit.getConsoleSender(), "gamerule dodaylightcycle false");
    org.bukkit.Bukkit.dispatchCommand(org.bukkit.Bukkit.getConsoleSender(), "setworldspawn 500 59 494");
    org.bukkit.Bukkit.dispatchCommand(org.bukkit.Bukkit.getConsoleSender(), "weather clear");
    org.bukkit.Bukkit.dispatchCommand(org.bukkit.Bukkit.getConsoleSender(), "time set day");
    console.log ("Game rules set" );
    listeners();
    spawnStructures();
  });


exports.createBeacon  = function (color, location) {
  //Instantiations;
  var block;
  var data;
  var sign;
  var newLocation;
  server.worlds[0].getBlockAt (location).setType (org.bukkit.Material.BEACON);
  newLocation=(function() { var _x = location.x + 0;var _y = location.y + 1;var _z = location.z + 0;var loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return loc; })();
  if (((color) == ("red"))){
    server.worlds[0].getBlockAt (newLocation).setType (org.bukkit.Material.BLUE_STAINED_GLASS);
  }
  else {
    server.worlds[0].getBlockAt (newLocation).setType (org.bukkit.Material.RED_STAINED_GLASS);
  }
  newLocation=(function() { var _x = location.x + 0;var _y = location.y + -1;var _z = location.z + 0;var loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return loc; })();
  server.worlds[0].getBlockAt (newLocation).setType (org.bukkit.Material.DIAMOND_BLOCK);
  newLocation=(function() { var _x = location.x + 1;var _y = location.y + -1;var _z = location.z + 0;var loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return loc; })();
  server.worlds[0].getBlockAt (newLocation).setType (org.bukkit.Material.DIAMOND_BLOCK);
  newLocation=(function() { var _x = location.x + 1;var _y = location.y + -1;var _z = location.z + 1;var loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return loc; })();
  server.worlds[0].getBlockAt (newLocation).setType (org.bukkit.Material.DIAMOND_BLOCK);
  newLocation=(function() { var _x = location.x + 1;var _y = location.y + -1;var _z = location.z + -1;var loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return loc; })();
  server.worlds[0].getBlockAt (newLocation).setType (org.bukkit.Material.DIAMOND_BLOCK);
  newLocation=(function() { var _x = location.x + -1;var _y = location.y + -1;var _z = location.z + 1;var loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return loc; })();
  server.worlds[0].getBlockAt (newLocation).setType (org.bukkit.Material.DIAMOND_BLOCK);
  newLocation=(function() { var _x = location.x + 0;var _y = location.y + -1;var _z = location.z + 1;var loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return loc; })();
  server.worlds[0].getBlockAt (newLocation).setType (org.bukkit.Material.DIAMOND_BLOCK);
  newLocation=(function() { var _x = location.x + 1;var _y = location.y + -1;var _z = location.z + 1;var loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return loc; })();
  server.worlds[0].getBlockAt (newLocation).setType (org.bukkit.Material.DIAMOND_BLOCK);
  newLocation=(function() { var _x = location.x + -1;var _y = location.y + -1;var _z = location.z + 0;var loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return loc; })();
  server.worlds[0].getBlockAt (newLocation).setType (org.bukkit.Material.DIAMOND_BLOCK);
  newLocation=(function() { var _x = location.x + 0;var _y = location.y + -1;var _z = location.z + -1;var loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return loc; })();
  server.worlds[0].getBlockAt (newLocation).setType (org.bukkit.Material.DIAMOND_BLOCK);
  newLocation=(function() { var _x = location.x + -1;var _y = location.y + -1;var _z = location.z + -1;var loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return loc; })();
  server.worlds[0].getBlockAt (newLocation).setType (org.bukkit.Material.DIAMOND_BLOCK);
};

exports.listeners = function () {
  //Instantiations;
  var player;
  var gameId;
  var team;
  var lobby;
  var teamLobby;
  var location;
  var distance;
  var vector;
  var newLocation;
  var arrow;
  var block;
  var durability;
  var chestplate;
  var line;
  var color;
  var _player;
  var teams;
  var spawnPoint;
  var clickType;
  var career;
  var speed;
  var firework;
  var projectile;
  var shooter;
  var entityType;
  var foundPoint;
  var safeLocation;
  var message;
  var list;
  var cmd;
  var data;
  var loc;
  var sign;
  events.playerJoin( function (event) {
    player=(event.getPlayer== null) ? null : event.getPlayer();
    player.setGameMode(org.bukkit.GameMode.SURVIVAL);
  });
  events.playerMove( function (event) {
    player=(event.getPlayer== null) ? null : event.getPlayer();
    gameId=(player== null)? null : (player.getMetadata == null)?null:(player.getMetadata("_gameid_").length == 0)?null:player.getMetadata("_gameid_")[0].value();
    team=(player== null)? null : (player.getMetadata == null)?null:(player.getMetadata("_team_").length == 0)?null:player.getMetadata("_team_")[0].value();
    if (((exports.gameId) == (gameId))){
      if (! (player.getMetadata("_team_").length > 0)){
        lobby=new org.bukkit.Location(server.worlds[0], exports.lobby.x, exports.lobby.y, exports.lobby.z);
        if (function () { _inSphere = false;
          if (Math.abs(player.location.x - lobby.x) <= 10){
             if (Math.abs(player.location.y - lobby.y) <= 10){
                if (Math.abs(player.location.z - lobby.z) <= 10){
                   _inSphere = true;
                }
             }
          }
          return _inSphere;
        }()){
          org.bukkit.Bukkit.dispatchCommand(org.bukkit.Bukkit.getConsoleSender(), "title " + player.name + " actionbar {\"text\":\"Select Team\",\"italic\":false,\"bold\":false,\"color\":\"aqua\"}");
        }
        else {
          (function () { var _pitch; var _yaw; var _velocity;
            _pitch    = player.location.getPitch();
            _yaw      = player.location.getYaw();
            _velocity = player.getVelocity();
            lobby.setPitch (_pitch);
            lobby.setYaw   (_yaw);
            player.teleport(lobby, org.bukkit.event.player.PlayerTeleportEvent.TeleportCause.PLUGIN);
            player.setVelocity(_velocity);
          })();
        }
      }
      else if (! (player.getMetadata("_career_").length > 0)){
        console.log ("got team: " + team);
        teamLobby=new org.bukkit.Location(server.worlds[0], exports.teamLobby.x, exports.teamLobby.y, exports.teamLobby.z);
        if (function () { _inSphere = false;
          if (Math.abs(player.location.x - teamLobby.x) <= 10){
             if (Math.abs(player.location.y - teamLobby.y) <= 10){
                if (Math.abs(player.location.z - teamLobby.z) <= 10){
                   _inSphere = true;
                }
             }
          }
          return _inSphere;
        }()){
          org.bukkit.Bukkit.dispatchCommand(org.bukkit.Bukkit.getConsoleSender(), "title " + player.name + " actionbar {\"text\":\"Select Aircraft\",\"italic\":false,\"bold\":false,\"color\":\"aqua\"}");
        }
        else {
          (function () { var _pitch; var _yaw; var _velocity;
            _pitch    = player.location.getPitch();
            _yaw      = player.location.getYaw();
            _velocity = player.getVelocity();
            teamLobby.setPitch (_pitch);
            teamLobby.setYaw   (_yaw);
            player.teleport(teamLobby, org.bukkit.event.player.PlayerTeleportEvent.TeleportCause.PLUGIN);
            player.setVelocity(_velocity);
          })();
        }
      }
      else {
        if (! ((player == null ) ? false : (player.getGameMode().toString() == "SPECTATOR"))){
          if (((team) == ("red"))){
            location=new org.bukkit.Location(server.worlds[0], exports.blueDefenders["0"].x, exports.blueDefenders["0"].y, exports.blueDefenders["0"].z);
          }
          else {
            location=new org.bukkit.Location(server.worlds[0], exports.redDefenders["0"].x, exports.redDefenders["0"].y, exports.redDefenders["0"].z);
          }
          distance=(player== null)?null:player.location.distance(location);
          if (((distance) < (60))){
            vector=(player== null)?null:player.location.toVector().subtract(location.toVector()).normalize();
            vector=vector.multiply (5);
            newLocation=(function() { var _x = location.x + 0;var _y = location.y + 2;var _z = location.z + 0;var loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return loc; })();
            for (var i=0; i<5; i++) {
              arrow=server.worlds[0].spawnArrow(newLocation,vector,vector.length(),12);
              ;
            }
          }
        }
      }
    }
    else {
      console.log ("player gameId: " + gameId + " does not match global game id: " + exports.gameId);
      fd = new org.bukkit.metadata.FixedMetadataValue (__plugin,exports.gameId);
      if (player != null) {
        if (player.setMetadata != null ) {
          player.setMetadata ("_gameid_", fd );
        }
      }
      console.log ("Deleting team for player: " + player.name);
      player.removeMetadata ("_team_", __plugin );
      (function () { var _pitch; var _yaw; var _velocity;
        _pitch    = player.location.getPitch();
        _yaw      = player.location.getYaw();
        _velocity = player.getVelocity();
        new org.bukkit.Location(server.worlds[0], 410, 20, 649).setPitch (_pitch);
        new org.bukkit.Location(server.worlds[0], 410, 20, 649).setYaw   (_yaw);
        player.teleport(new org.bukkit.Location(server.worlds[0], 410, 20, 649), org.bukkit.event.player.PlayerTeleportEvent.TeleportCause.PLUGIN);
        player.setVelocity(_velocity);
      })();
    }
  });
  events.playerInteract( function (event) {
    player=(event.getPlayer== null) ? null : event.getPlayer();
    block=(event.getClickedBlock== null) ? null : event.getClickedBlock();
    durability=400;
    chestplate=(player==null)?null:(player.getInventory == null)?null:(player.getInventory().getChestplate== null) ? null : player.getInventory().getChestplate();
    if ((((chestplate == null ) ? null : (chestplate.getType == null) ? null : chestplate.getType()) == ("ELYTRA"))){
      durability=chestplate.getDurability();
    }
    if ((((block==null)?null:block.getType()) == (org.bukkit.Material.OAK_SIGN))){
      line=((block==null)?null: (block.state.getLine == null)?null:block.state.getLine(1)).toLowerCase();
      if (! (player.getMetadata("_team_").length > 0)){
        if (([
          "red",
          "blue"
        ].indexOf ( line) >= 0)){
          fd = new org.bukkit.metadata.FixedMetadataValue (__plugin,line);
          if (player != null) {
            if (player.setMetadata != null ) {
              player.setMetadata ("_team_", fd );
            }
          }
          player.getInventory().clear();
          if (((line) == ("red"))){
            color = org.bukkit.Color.RED;
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
          else {
            color = org.bukkit.Color.BLUE;
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
          player.getInventory().setChestplate(null);
          console.log ( 'Chestplate removed for player: ' + player.name );
          player.removeMetadata ("_career_", __plugin );
          teams=(function() {    var _players=server.getOnlinePlayers();var _teams=[];var _teamColor;
             console.log ( 'Number of players: ' + _players.length );
             for (var i=0; i<_players.length;i++) {
                if (undefined != _players[i] ) {
                   _teamColor=(_players[i]== null)? null : (_players[i].getMetadata == null)?null:(_players[i].getMetadata("_team_").length == 0)?null:_players[i].getMetadata("_team_")[0].value();
                   if (_teamColor != null) {
                      if (_teams.indexOf (_teamColor) == -1){
                         if (_players[i].getGameMode().toString() != "SPECTATOR"){
                           _teams.push (_teamColor);
                         }
                      }
                   }
                }
             }
             console.log ( "Active teams: " + _teams );
             return _teams;
           })();
          console.log ("Current number of teams: " + teams.length);
        }
      }
      else if (! (player.getMetadata("_career_").length > 0)){
        team=(player== null)? null : (player.getMetadata == null)?null:(player.getMetadata("_team_").length == 0)?null:player.getMetadata("_team_")[0].value();
        if (([
          "fighter",
          "bomber"
        ].indexOf ( line) >= 0)){
          fd = new org.bukkit.metadata.FixedMetadataValue (__plugin,line);
          if (player != null) {
            if (player.setMetadata != null ) {
              player.setMetadata ("_career_", fd );
            }
          }
          spawnPoint=new org.bukkit.Location(server.worlds[0], exports.spawnPoint[team].x, exports.spawnPoint[team].y, exports.spawnPoint[team].z);
          (function () { var _pitch; var _yaw; var _velocity;
            _pitch    = player.location.getPitch();
            _yaw      = player.location.getYaw();
            _velocity = player.getVelocity();
            spawnPoint.setPitch (_pitch);
            spawnPoint.setYaw   (_yaw);
            player.teleport(spawnPoint, org.bukkit.event.player.PlayerTeleportEvent.TeleportCause.PLUGIN);
            player.setVelocity(_velocity);
          })();
          player.getInventory().setItem (0,new org.bukkit.inventory.ItemStack (org.bukkit.Material.LEGACY_ELYTRA,1) );
          if (((line) == ("fighter"))){
            player.getInventory().setItem (1,new org.bukkit.inventory.ItemStack (org.bukkit.Material.ARROW,64) );
            player.getInventory().setItem (2,new org.bukkit.inventory.ItemStack (org.bukkit.Material.ARROW,64) );
          }
          else {
            player.getInventory().setItem (1,new org.bukkit.inventory.ItemStack (org.bukkit.Material.SNOWBALL,64) );
            player.getInventory().setItem (2,new org.bukkit.inventory.ItemStack (org.bukkit.Material.SNOWBALL,64) );
          }
        }
      }
    }
    clickType=(event.getAction== null) ? null : event.getAction();
    if (player.getMetadata("_career_").length > 0){
      career=(player== null)? null : (player.getMetadata == null)?null:(player.getMetadata("_career_").length == 0)?null:player.getMetadata("_career_")[0].value();
      if (((clickType) == (org.bukkit.event.block.Action.LEFT_CLICK_AIR))){
        if (player.isOnGround()){
          if ((((chestplate == null ) ? null : (chestplate.getType == null) ? null : chestplate.getType()) == ("ELYTRA"))){
            if (((durability) < (400))){
              newLocation=(function() { var _x = (player== null)?null:player.location.x + 0;var _y = (player== null)?null:player.location.y + 20;var _z = (player== null)?null:player.location.z + 0;var loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return loc; })();
              (function () { var _pitch; var _yaw; var _velocity;
                _pitch    = player.location.getPitch();
                _yaw      = player.location.getYaw();
                _velocity = player.getVelocity();
                newLocation.setPitch (_pitch);
                newLocation.setYaw   (_yaw);
                player.teleport(newLocation, org.bukkit.event.player.PlayerTeleportEvent.TeleportCause.PLUGIN);
                player.setVelocity(_velocity);
              })();
              player.addPotionEffect(new org.bukkit.potion.PotionEffect (org.bukkit.potion.PotionEffectType.SLOW_FALLING,200, 1));
            }
            else {
              (function() {
                if (player != null ) {
                   player.sendMessage ("Your Elytra is damaged and cannot fly");
                }
               })();
            }
          }
          else {
            (function() {
              if (player != null ) {
                 player.sendMessage ("You are not wearing your Elytra");
              }
             })();
          }
        }
        else {
          if (((career) == ("bomber"))){
            newLocation=(function() { var _x = (player== null)?null:player.location.x + 0;var _y = (player== null)?null:player.location.y + 20;var _z = (player== null)?null:player.location.z + 0;var loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return loc; })();
            (function () { var _pitch; var _yaw; var _velocity;
              _pitch    = player.location.getPitch();
              _yaw      = player.location.getYaw();
              _velocity = player.getVelocity();
              newLocation.setPitch (_pitch);
              newLocation.setYaw   (_yaw);
              player.teleport(newLocation, org.bukkit.event.player.PlayerTeleportEvent.TeleportCause.PLUGIN);
              player.setVelocity(_velocity);
            })();
          }
          else if (((career) == ("fighter"))){
            vector=player.getVelocity();
            speed=player.getVelocity().length();
            if (((speed) < 1)){
              vector=vector.multiply (5);
            }
            else if (((speed) < 2)){
              vector=vector.multiply (2);
            }
            player.setVelocity(vector);
            console.log ("Final speed of player: " + player.getVelocity().length());
          }
        }
      }
      else if (((clickType) == (org.bukkit.event.block.Action.RIGHT_CLICK_AIR))){
        if (player.isOnGround()){
          if (((durability) >= 400)){
            if ((((chestplate == null ) ? null : (chestplate.getType == null) ? null : chestplate.getType()) == ("ELYTRA"))){
              console.log ("infantry firing");
              firework=server.worlds[0].spawnEntity((player== null)?null:player.location,org.bukkit.entity.EntityType.FIREWORK);
              vector=(player== null)?null:player.location.getDirection().normalize().multiply (1.5);
              var _meta = org.bukkit.Bukkit.getItemFactory().getItemMeta(org.bukkit.Material.FIREWORK_ROCKET);
              _meta.setPower(0);
              _meta.addEffect(org.bukkit.FireworkEffect.builder()
                                 .withColor(org.bukkit.Color.AQUA)
                                 .withFade(org.bukkit.Color.ORANGE)
                                 .with(org.bukkit.FireworkEffect.Type.BALL_LARGE)
                                 .trail(false)
                                 .flicker(true)
                                 .build());
              firework.setFireworkMeta(_meta);
              firework.setVelocity(vector);
            }
          }
        }
        else {
          career=(player== null)? null : (player.getMetadata == null)?null:(player.getMetadata("_career_").length == 0)?null:player.getMetadata("_career_")[0].value();
          console.log ("career: [" + career + "]");
          if (((career) == ("fighter"))){
            speed=player.getVelocity();
            console.log ("current speed: " + speed );
            vector=(player== null)?null:player.location.getDirection().normalize();
            newLocation=(function() { var _x = (player== null)?null:player.location.x + vector.getX()*4;var _y = (player== null)?null:player.location.y + vector.getY()*4;var _z = (player== null)?null:player.location.z + vector.getZ()*4;var loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return loc; })();
            vector=vector.multiply (5);
            for (var i=0; i<10; i++) {
              arrow=server.worlds[0].spawnArrow(newLocation,vector,vector.length(),12);
              ;
            }
          }
          else if (((career) == ("bomber"))){
            projectile=server.worlds[0].spawnEntity(player.location,org.bukkit.entity.EntityType.SNOWBALL);
            player.launchProjectile(projectile.getClass());
          }
        }
      }
    }
  });
  events.playerRespawn( function (event) {
    player=(event.getPlayer== null) ? null : event.getPlayer();
    team=(player== null)? null : (player.getMetadata == null)?null:(player.getMetadata("_team_").length == 0)?null:player.getMetadata("_team_")[0].value();
    if (([
      "red",
      "blue"
    ].indexOf ( team) >= 0)){
      location=new org.bukkit.Location(server.worlds[0], exports.beds[team].x, exports.beds[team].y, exports.beds[team].z);
      block=(server.worlds[0].getBlockAt (location)==null)?null:server.worlds[0].getBlockAt (location).getType();
      console.log ("Block at bed location: [" + block + "]");
      if (((block) != ("RED_BED"))){
        console.log ("blockType: [" + block + "]");
        (function() {
          if (player != null ) {
             player.sendMessage ("Your bed has been destroyed, you are now a spectator");
          }
         })();
        player.setGameMode(org.bukkit.GameMode.SPECTATOR);
        (function () { var _pitch; var _yaw; var _velocity;
          _pitch    = player.location.getPitch();
          _yaw      = player.location.getYaw();
          _velocity = player.getVelocity();
          new org.bukkit.Location(server.worlds[0], 500, 60, 494).setPitch (_pitch);
          new org.bukkit.Location(server.worlds[0], 500, 60, 494).setYaw   (_yaw);
          player.teleport(new org.bukkit.Location(server.worlds[0], 500, 60, 494), org.bukkit.event.player.PlayerTeleportEvent.TeleportCause.PLUGIN);
          player.setVelocity(_velocity);
        })();
        setTimeout (function () {
          player.teleport(new org.bukkit.Location(server.worlds[0], 500, 60, 494), org.bukkit.event.player.PlayerTeleportEvent.TeleportCause.PLUGIN);
        },2000);
      }
      else {
        player.removeMetadata ("_career_", __plugin );
      }
    }
  });
  events.blockBreak( function (event) {
    event.cancelled = true;
  });
  events.projectileLaunch( function (event) {
    projectile=(event.getEntity== null) ? null : event.getEntity();
    shooter=(event.getEntity().getShooter== null) ? null : event.getEntity().getShooter();
    fd = new org.bukkit.metadata.FixedMetadataValue (__plugin,shooter);
    if (projectile != null) {
      if (projectile.setMetadata != null ) {
        projectile.setMetadata ("_shooter_", fd );
      }
    }
  });
  events.projectileHit( function (event) {
    projectile=(event.getEntity== null) ? null : event.getEntity();
    shooter=(projectile== null)? null : (projectile.getMetadata == null)?null:(projectile.getMetadata("_shooter_").length == 0)?null:projectile.getMetadata("_shooter_")[0].value();
    team=(shooter== null)? null : (shooter.getMetadata == null)?null:(shooter.getMetadata("_team_").length == 0)?null:shooter.getMetadata("_team_")[0].value();
    if (([
      "red",
      "blue"
    ].indexOf ( team) >= 0)){
      entityType=projectile.getType();
      if (((entityType) == ("SNOWBALL"))){
        foundPoint=false;
        for (var _elementIndex=0; _elementIndex <exports.spawnPoints.length;_elementIndex++) {
          safeLocation = exports.spawnPoints[_elementIndex];
          if (function () { _inSphere = false;
            if (Math.abs(projectile.location.x - safeLocation.x) <= 15){
               if (Math.abs(projectile.location.y - safeLocation.y) <= 15){
                  if (Math.abs(projectile.location.z - safeLocation.z) <= 15){
                     _inSphere = true;
                  }
               }
            }
            return _inSphere;
          }()){
            foundPoint=true;
            break;
          }
        };
        if (foundPoint){
          (function() {
            if (shooter != null ) {
               shooter.sendMessage ("Sorry you cannot destroy a lobby area");
            }
           })();
        }
        safeLocation=new org.bukkit.Location(server.worlds[0], exports.beds[team].x, exports.beds[team].y, exports.beds[team].z);
        if (function () { _inSphere = false;
          if (Math.abs(projectile.location.x - safeLocation.x) <= 15){
             if (Math.abs(projectile.location.y - safeLocation.y) <= 15){
                if (Math.abs(projectile.location.z - safeLocation.z) <= 15){
                   _inSphere = true;
                }
             }
          }
          return _inSphere;
        }()){
          (function() {
            if (shooter != null ) {
               shooter.sendMessage ("Sorry you cannot destroy your own bed");
            }
           })();
          foundPoint=true;
        }
        if (foundPoint){
          event.cancelled = true;
        }
        else {
          server.worlds[0].createExplosion ((projectile== null)?null:projectile.location,1);
        }
      }
    }
  });
  events.playerDeath( function (event) {
    console.log ("Player death event triggered");
    player=(event.getEntity== null) ? null : event.getEntity();
    console.log ("Player: " + player.name );
    teams=(function() {    var _players=server.getOnlinePlayers();var _teams=[];var _teamColor;
       console.log ( 'Number of players: ' + _players.length );
       for (var i=0; i<_players.length;i++) {
          if ((player) != _players[i] ) {
             _teamColor=(_players[i]== null)? null : (_players[i].getMetadata == null)?null:(_players[i].getMetadata("_team_").length == 0)?null:_players[i].getMetadata("_team_")[0].value();
             if (_teamColor != null) {
                if (_teams.indexOf (_teamColor) == -1){
                   if (_players[i].getGameMode().toString() != "SPECTATOR"){
                     _teams.push (_teamColor);
                   }
                }
             }
          }
       }
       console.log ( "Active teams: " + _teams );
       return _teams;
     })();
    if (((teams.length) == 1)){
      org.bukkit.Bukkit.dispatchCommand(org.bukkit.Bukkit.getConsoleSender(), "say @a " + "Team: " + teams[0] + " has won!");
    }
  });
  events.playerCommandPreprocess( function (event) {
    player=(event.getPlayer== null) ? null : event.getPlayer();
    message=(event.getMessage== null) ? null : event.getMessage();
    list=(message).split(" ");
    cmd=(list).shift();
    if (((cmd) == ("/t"))){
      message=list.join(" ");
      for (var _elementIndex=0; _elementIndex <server.getOnlinePlayers().length;_elementIndex++) {
        neighbor = server.getOnlinePlayers()[_elementIndex];
        if (function () { var _near;var _players;var _distance;_near=false;
        _players=server.getOnlinePlayers();
        for (var _i=0; _i<_players.length;_i++) {
        _distance=(player== null)?null:player.location.distance(_players[_i].location);
        if(_distance <= 5){if (neighbor== _players[_i]){
        _near=true;break;}}}
        return _near;}()){
          (function() {
            if (neighbor != null ) {
               neighbor.sendMessage (message);
            }
           })();
        }
      };
      event.cancelled = true;
    }
    else if (((cmd) == ("/killbeds"))){
      for (var _elementIndex=0; _elementIndex <[
        new org.bukkit.Location(server.worlds[0], exports.beds["red"].x, exports.beds["red"].y, exports.beds["red"].z),
        new org.bukkit.Location(server.worlds[0], exports.beds["blue"].x, exports.beds["blue"].y, exports.beds["blue"].z)
      ].length;_elementIndex++) {
        bed = [
        new org.bukkit.Location(server.worlds[0], exports.beds["red"].x, exports.beds["red"].y, exports.beds["red"].z),
        new org.bukkit.Location(server.worlds[0], exports.beds["blue"].x, exports.beds["blue"].y, exports.beds["blue"].z)
      ][_elementIndex];
        server.worlds[0].getBlockAt (bed).setType (org.bukkit.Material.AIR);
      };
      event.cancelled = true;
    }
  });
};

exports.spawnStructures = function () {
  //Instantiations;
  var location;
  var block;
  var data;
  var loc;
  var sign;
  for (var _elementIndex=0; _elementIndex <[
    new org.bukkit.Location(server.worlds[0], exports.beds["red"].x, exports.beds["red"].y, exports.beds["red"].z),
    new org.bukkit.Location(server.worlds[0], exports.beds["blue"].x, exports.beds["blue"].y, exports.beds["blue"].z)
  ].length;_elementIndex++) {
    bed = [
    new org.bukkit.Location(server.worlds[0], exports.beds["red"].x, exports.beds["red"].y, exports.beds["red"].z),
    new org.bukkit.Location(server.worlds[0], exports.beds["blue"].x, exports.beds["blue"].y, exports.beds["blue"].z)
  ][_elementIndex];
    console.log ( "Spawn a legacy bed yo");
    loc = new org.bukkit.Location (server.worlds[0], parseInt(bed.x), parseInt(bed.y), parseInt(bed.z));
    block = server.worlds[0].getBlockAt (loc);
    block.setType (org.bukkit.Material.LEGACY_BED_BLOCK);
    data = org.bukkit.Material.LEGACY_BED_BLOCK.createBlockData();
    data.setPart (org.bukkit.block.data.type.Bed.Part.HEAD);
    block.setBlockData (data);
    loc = new org.bukkit.Location (server.worlds[0], parseInt(loc.x), parseInt(loc.y), parseInt(loc.z)+1);
    block = server.worlds[0].getBlockAt (loc);
    block.setType (org.bukkit.Material.LEGACY_BED_BLOCK);
    data = org.bukkit.Material.LEGACY_BED_BLOCK.createBlockData();
    data.setPart (org.bukkit.block.data.type.Bed.Part.FOOT);
    block.setBlockData (data);
  };
  location=new org.bukkit.Location(server.worlds[0], exports.redDefenders["0"].x, exports.redDefenders["0"].y, exports.redDefenders["0"].z);
  createBeacon ("red", location);
  location=new org.bukkit.Location(server.worlds[0], exports.blueDefenders["0"].x, exports.blueDefenders["0"].y, exports.blueDefenders["0"].z);
  createBeacon ("blue", location);
};
