  exports.lobby={  x:410,y:20,z:649};
  exports.teamLobby={  x:425,y:20,z:650};
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
    for (var _elementIndex=0; _elementIndex <exports.bedLocations.length;_elementIndex++) {
      bed = exports.bedLocations[_elementIndex];
      server.worlds[0].getBlockAt (bed).setType (org.bukkit.Material.LEGACY_BED_BLOCK);
    };
    exports.gameId=new Date().getTime();
    org.bukkit.Bukkit.dispatchCommand(org.bukkit.Bukkit.getConsoleSender(), "gamemode survival @a");
    org.bukkit.Bukkit.dispatchCommand(org.bukkit.Bukkit.getConsoleSender(), "gamerule keepinventory true");
    org.bukkit.Bukkit.dispatchCommand(org.bukkit.Bukkit.getConsoleSender(), "gamerule doweathercycle false");
    org.bukkit.Bukkit.dispatchCommand(org.bukkit.Bukkit.getConsoleSender(), "gamerule dodaylightcycle false");
    org.bukkit.Bukkit.dispatchCommand(org.bukkit.Bukkit.getConsoleSender(), "gamerule commandblockoutput false");
    org.bukkit.Bukkit.dispatchCommand(org.bukkit.Bukkit.getConsoleSender(), "gamerule sendCommandFeedback false");
    org.bukkit.Bukkit.dispatchCommand(org.bukkit.Bukkit.getConsoleSender(), "gamerule dodaylightcycle false");
    org.bukkit.Bukkit.dispatchCommand(org.bukkit.Bukkit.getConsoleSender(), "weather clear");
    org.bukkit.Bukkit.dispatchCommand(org.bukkit.Bukkit.getConsoleSender(), "time set day");
    console.log ("Game rules set" );
    listeners();
    spawnBeds();
  });


exports.listeners = function () {
  //Instantiations;
  var player;
  var gameId;
  var lobby;
  var team;
  var teamLobby;
  var block;
  var durability;
  var chestplate;
  var line;
  var spawnPoint;
  var clickType;
  var career;
  var newLocation;
  var vector;
  var firework;
  var arrow;
  var projectile;
  var location;
  var shooter;
  var entityType;
  var foundPoint;
  var safeLocation;
  var teams;
  var message;
  var list;
  var cmd;
  events.playerJoin( function (event) {
    player=(event.getPlayer== null) ? null : event.getPlayer();
    player.setGameMode(org.bukkit.GameMode.SURVIVAL);
  });
  events.playerMove( function (event) {
    player=(event.getPlayer== null) ? null : event.getPlayer();
    gameId=(player== null)? null : (player.getMetadata == null)?null:(player.getMetadata("_gameid_").length == 0)?null:player.getMetadata("_gameid_")[0].value();
    if (((exports.gameId) == ((player== null)? null : (player.getMetadata == null)?null:(player.getMetadata("_gameid_").length == 0)?null:player.getMetadata("_gameid_")[0].value()))){
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
        team=(player== null)? null : (player.getMetadata == null)?null:(player.getMetadata("_team_").length == 0)?null:player.getMetadata("_team_")[0].value();
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
          player.removeMetadata ("_career_", __plugin );
        }
      }
      else if (! (player.getMetadata("_career_").length > 0)){
        team=(player== null)? null : (player.getMetadata == null)?null:(player.getMetadata("_team_").length == 0)?null:player.getMetadata("_team_")[0].value();
        if (([
          "fighter",
          "bomber"
        ].indexOf ( line) >= 0)){
          console.log ("career: " + line);
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
          player.getInventory().clear();
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
        console.log ("Got a left click in air" );
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
          console.log ("handle left click for career: " + career);
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
            vector=vector.multiply (2);
            player.setVelocity(vector);
          }
        }
      }
      else if (((clickType) == (org.bukkit.event.block.Action.RIGHT_CLICK_AIR))){
        if (player.isOnGround()){
          if (((durability) >= 400)){
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
        else {
          career=(player== null)? null : (player.getMetadata == null)?null:(player.getMetadata("_career_").length == 0)?null:player.getMetadata("_career_")[0].value();
          console.log ("career: [" + career + "]");
          if (((career) == ("fighter"))){
            newLocation=(function() { var _x = (player== null)?null:player.location.x + 0;var _y = (player== null)?null:player.location.y + 3;var _z = (player== null)?null:player.location.z + 0;var loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return loc; })();
            vector=(player== null)?null:player.location.getDirection().normalize();
            for (var i=0; i<10; i++) {
              arrow=server.worlds[0].spawnArrow(newLocation,vector,4,12);
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
    player.removeMetadata ("_career_", __plugin );
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
      }
    }
  });
  events.blockExplode( function (event) {
    block=(event.getBlock== null) ? null : event.getBlock();
    console.log ("explosion at : " + block.location);
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
    console.log ("get teams");
    teams=(function() {    var _players=server.getOnlinePlayers();var _teams=[];var _teamColor;
       console.log ( 'Number of players: ' + _players.length );
       for (var i=0; i<_players.length;i++) {
          _teamColor=(_players[i]== null)? null : (_players[i].getMetadata == null)?null:(_players[i].getMetadata("_team_").length == 0)?null:_players[i].getMetadata("_team_")[0].value();
          if (_teamColor != null) {
             if (! ((_teams.indexOf (_teamColor) >= 0))){
                if (! ((_players[i] == null ) ? false : (_players[i].getGameMode().toString() != "SPECTATOR"))){
                   _teams.push (_teamColor);
                }
             }
          }
       }
       console.log ( "Active teams: " + _teams );
       return _teams;
     })();
    console.log ("Check length of: " + teams);
    if (((teams.length) == 1)){
      org.bukkit.Bukkit.dispatchCommand(org.bukkit.Bukkit.getConsoleSender(), "say @a " + "Team: " + teams[0] + " has won!");
    }
  });
  events.playerCommandPreprocess( function (event) {
    player=(event.getPlayer== null) ? null : event.getPlayer();
    message=(event.getMessage== null) ? null : event.getMessage();
    list=(message).split(" ");
    cmd=(list).shift();
    if (((cmd) == ("\t"))){
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
    }
  });
};

exports.spawnBeds = function () {
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
    location = [
    new org.bukkit.Location(server.worlds[0], exports.beds["red"].x, exports.beds["red"].y, exports.beds["red"].z),
    new org.bukkit.Location(server.worlds[0], exports.beds["blue"].x, exports.beds["blue"].y, exports.beds["blue"].z)
  ][_elementIndex];
    server.worlds[0].getBlockAt (location).setType (org.bukkit.Material.LEGACY_BED_BLOCK);
  };
};
