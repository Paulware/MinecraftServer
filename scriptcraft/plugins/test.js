  exports.lobbyLocation=new org.bukkit.Location(server.worlds[0], 410, 20, 649);
  exports.careerLocation=new org.bukkit.Location(server.worlds[0], 425, 20, 650);
  exports.blueBed=new org.bukkit.Location(server.worlds[0], 509, 20, 766);
  exports.blueDefenders=[
    new org.bukkit.Location(server.worlds[0], 512, 20, 746),
    new org.bukkit.Location(server.worlds[0], 482, 20, 746)
  ];
  exports.redBed=new org.bukkit.Location(server.worlds[0], 489, 20, 271);
  exports.redDefenders=[
    new org.bukkit.Location(server.worlds[0], 489, 20, 292),
    new org.bukkit.Location(server.worlds[0], 519, 20, 292)
  ];
  exports.spawnPoints=[
    exports.careerLocation,
    exports.lobbyLocation
  ];
  exports.gameId=new Date().getTime();
  spawnStructures();
  listeners();


function listeners () {
  //Instantiations;
  var player;
  var gameId;
  var block;
  var line;
  var team;
  events.playerMove( function (event) {
    player=(event.getPlayer== null) ? null : event.getPlayer();
    gameId=(player== null)? null : (player.getMetadata == null)?null:(player.getMetadata("_gameid_").length == 0)?null:player.getMetadata("_gameid_")[0].value();
    if (((gameId) != (exports.gameId))){
      (function() {
        if (player != null ) {
           player.sendMessage ("Welcome to the game");
        }
       })();
      fd = new org.bukkit.metadata.FixedMetadataValue (__plugin,exports.gameId);
      if (player != null) {
        if (player.setMetadata != null ) {
          player.setMetadata ("_gameid_", fd );
        }
      }
      player.removeMetadata ("_team_", __plugin );
      (function () { var _pitch; var _yaw; var _velocity;
        _pitch    = player.location.getPitch();
        _yaw      = player.location.getYaw();
        _velocity = player.getVelocity();
        exports.lobbyLocation.setPitch (_pitch);
        exports.lobbyLocation.setYaw   (_yaw);
        player.teleport(exports.lobbyLocation, org.bukkit.event.player.PlayerTeleportEvent.TeleportCause.PLUGIN);
        player.setVelocity(_velocity);
      })();
      player.setGameMode(org.bukkit.GameMode.SURVIVAL);
    }
  });
  events.playerInteract( function (event) {
    player=(event.getPlayer== null) ? null : event.getPlayer();
    block=(event.getClickedBlock== null) ? null : event.getClickedBlock();
    if ((((block==null)?null:block.getType()) == (org.bukkit.Material.OAK_SIGN))){
      if (! (player.getMetadata("_team_").length > 0)){
        line=(block==null)?null: (block.state.getLine == null)?null:block.state.getLine(1);
        line=(line).toLowerCase();
        if (((line) == "red") || ((line) == "blue")){
          fd = new org.bukkit.metadata.FixedMetadataValue (__plugin,line);
          if (player != null) {
            if (player.setMetadata != null ) {
              player.setMetadata ("_team_", fd );
            }
          }
          player.removeMetadata ("_career_", __plugin );
          (function() {
            if (player != null ) {
               player.sendMessage ("You have selected team: " + line);
            }
           })();
          (function () { var _pitch; var _yaw; var _velocity;
            _pitch    = player.location.getPitch();
            _yaw      = player.location.getYaw();
            _velocity = player.getVelocity();
            exports.careerLocation.setPitch (_pitch);
            exports.careerLocation.setYaw   (_yaw);
            player.teleport(exports.careerLocation, org.bukkit.event.player.PlayerTeleportEvent.TeleportCause.PLUGIN);
            player.setVelocity(_velocity);
          })();
        }
      }
      else if (! (player.getMetadata("_career_").length > 0)){
        line=(block==null)?null: (block.state.getLine == null)?null:block.state.getLine(1);
        line=(line).toLowerCase();
        fd = new org.bukkit.metadata.FixedMetadataValue (__plugin,line);
        if (player != null) {
          if (player.setMetadata != null ) {
            player.setMetadata ("_career_", fd );
          }
        }
        team=(player== null)? null : (player.getMetadata == null)?null:(player.getMetadata("_team_").length == 0)?null:player.getMetadata("_team_")[0].value();
        if (((team) == ("red"))){
          (function () { var _pitch; var _yaw; var _velocity;
            _pitch    = player.location.getPitch();
            _yaw      = player.location.getYaw();
            _velocity = player.getVelocity();
            exports.redBed.setPitch (_pitch);
            exports.redBed.setYaw   (_yaw);
            player.teleport(exports.redBed, org.bukkit.event.player.PlayerTeleportEvent.TeleportCause.PLUGIN);
            player.setVelocity(_velocity);
          })();
        }
        else {
          (function () { var _pitch; var _yaw; var _velocity;
            _pitch    = player.location.getPitch();
            _yaw      = player.location.getYaw();
            _velocity = player.getVelocity();
            exports.blueBed.setPitch (_pitch);
            exports.blueBed.setYaw   (_yaw);
            player.teleport(exports.blueBed, org.bukkit.event.player.PlayerTeleportEvent.TeleportCause.PLUGIN);
            player.setVelocity(_velocity);
          })();
        }
      }
    }
  });
  events.playerRespawn( function (event) {
    player=(event.getPlayer== null) ? null : event.getPlayer();
    if (player.getMetadata("_team_").length > 0){
      team=(player== null)? null : (player.getMetadata == null)?null:(player.getMetadata("_team_").length == 0)?null:player.getMetadata("_team_")[0].value();
      if (((team) == ("red"))){
        block=server.worlds[0].getBlockAt (exports.redBed);
      }
      else {
        block=server.worlds[0].getBlockAt (exports.blueBed);
      }
      if ((((block==null)?null:block.getType()) != (org.bukkit.Material.RED_BED))){
        (function() {
          if (player != null ) {
             player.sendMessage ("Your bed has been destroyed, You are now a spectator");
          }
         })();
        player.setGameMode(org.bukkit.GameMode.SPECTATOR);
      }
      setTimeout (function () {
        player.teleport((block== null)?null:block.location, org.bukkit.event.player.PlayerTeleportEvent.TeleportCause.PLUGIN);
      },2000);
    }
    else {
      (function() {
        if (player != null ) {
           player.sendMessage ("No team yet selected");
        }
       })();
    }
  });
};

function spawnStructures () {
  //Instantiations;
  var location;
  var block;
  var data;
  var loc;
  var sign;
  var newLocation;
  console.log ( "Spawn a legacy bed yo");
  loc = new org.bukkit.Location (server.worlds[0], parseInt(exports.redBed.x), parseInt(exports.redBed.y), parseInt(exports.redBed.z));
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
  newLocation=(function() { var _x = exports.redBed.x + -5;var _y = exports.redBed.y + -1;var _z = exports.redBed.z + -5;var loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return loc; })();
  for (var _x = 0; _x<10;_x++) {
    for (var _y = 0; _y<1;_y++) {
      for (var _z = 0; _z<10;_z++) {
         var _loc = new org.bukkit.Location(server.worlds[0], parseInt(newLocation.x+_x), parseInt(newLocation.y+_y), parseInt(newLocation.z+_z));
         server.worlds[0].getBlockAt (_loc).setType (org.bukkit.Material.RED_CONCRETE);
      }
    }
  }
  console.log ( "Spawn a legacy bed yo");
  loc = new org.bukkit.Location (server.worlds[0], parseInt(exports.blueBed.x), parseInt(exports.blueBed.y), parseInt(exports.blueBed.z));
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
  newLocation=(function() { var _x = exports.blueBed.x + -5;var _y = exports.blueBed.y + -1;var _z = exports.blueBed.z + -5;var loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return loc; })();
  for (var _x = 0; _x<10;_x++) {
    for (var _y = 0; _y<1;_y++) {
      for (var _z = 0; _z<10;_z++) {
         var _loc = new org.bukkit.Location(server.worlds[0], parseInt(newLocation.x+_x), parseInt(newLocation.y+_y), parseInt(newLocation.z+_z));
         server.worlds[0].getBlockAt (_loc).setType (org.bukkit.Material.BLUE_CONCRETE);
      }
    }
  }
  for (var _elementIndex=0; _elementIndex <exports.redDefenders.length;_elementIndex++) {
    defender = exports.redDefenders[_elementIndex];
    server.worlds[0].getBlockAt (defender).setType (org.bukkit.Material.BEACON);
    newLocation=(function() { var _x = defender.x + -2;var _y = defender.y + -1;var _z = defender.z + -2;var loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return loc; })();
    for (var _x = 0; _x<5;_x++) {
      for (var _y = 0; _y<1;_y++) {
        for (var _z = 0; _z<5;_z++) {
           var _loc = new org.bukkit.Location(server.worlds[0], parseInt(newLocation.x+_x), parseInt(newLocation.y+_y), parseInt(newLocation.z+_z));
           server.worlds[0].getBlockAt (_loc).setType (org.bukkit.Material.DIAMOND_BLOCK);
        }
      }
    }
    newLocation=(function() { var _x = defender.x + 0;var _y = defender.y + 1;var _z = defender.z + 0;var loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return loc; })();
    server.worlds[0].getBlockAt (newLocation).setType (org.bukkit.Material.BLUE_STAINED_GLASS);
  };
  for (var _elementIndex=0; _elementIndex <exports.blueDefenders.length;_elementIndex++) {
    defender = exports.blueDefenders[_elementIndex];
    server.worlds[0].getBlockAt (defender).setType (org.bukkit.Material.BEACON);
    newLocation=(function() { var _x = defender.x + -2;var _y = defender.y + -1;var _z = defender.z + -2;var loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return loc; })();
    for (var _x = 0; _x<5;_x++) {
      for (var _y = 0; _y<1;_y++) {
        for (var _z = 0; _z<5;_z++) {
           var _loc = new org.bukkit.Location(server.worlds[0], parseInt(newLocation.x+_x), parseInt(newLocation.y+_y), parseInt(newLocation.z+_z));
           server.worlds[0].getBlockAt (_loc).setType (org.bukkit.Material.DIAMOND_BLOCK);
        }
      }
    }
    newLocation=(function() { var _x = defender.x + 0;var _y = defender.y + 1;var _z = defender.z + 0;var loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return loc; })();
    server.worlds[0].getBlockAt (newLocation).setType (org.bukkit.Material.RED_STAINED_GLASS);
  };
};
