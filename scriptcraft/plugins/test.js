  exports.lobbyLocation=new org.bukkit.Location(server.worlds[0], 410, 20, 649);
  exports.careerLocation=new org.bukkit.Location(server.worlds[0], 425, 20, 650);
  exports.blueBed=new org.bukkit.Location(server.worlds[0], 509, 20, 766);
  exports.blueDefenders=[
    new org.bukkit.Location(server.worlds[0], 512, 20, 746)
  ];
  exports.redBed=new org.bukkit.Location(server.worlds[0], 489, 20, 271);
  exports.redDefenders=[
    new org.bukkit.Location(server.worlds[0], 489, 20, 292)
  ];
  exports.spawnPoints=[
    exports.careerLocation,
    exports.lobbyLocation
  ];
  events.serverLoad( function (event) {
    exports.gameId=new Date().getTime();
    exports.gameStarted=false;
    org.bukkit.Bukkit.dispatchCommand(org.bukkit.Bukkit.getConsoleSender(), "gamemode survival @a");
    org.bukkit.Bukkit.dispatchCommand(org.bukkit.Bukkit.getConsoleSender(), "gamerule keepinventory true");
    org.bukkit.Bukkit.dispatchCommand(org.bukkit.Bukkit.getConsoleSender(), "gamerule doweathercycle false");
    org.bukkit.Bukkit.dispatchCommand(org.bukkit.Bukkit.getConsoleSender(), "gamerule dodaylightcycle false");
    org.bukkit.Bukkit.dispatchCommand(org.bukkit.Bukkit.getConsoleSender(), "gamerule commandblockoutput false");
    org.bukkit.Bukkit.dispatchCommand(org.bukkit.Bukkit.getConsoleSender(), "gamerule sendCommandFeedback false");
    org.bukkit.Bukkit.dispatchCommand(org.bukkit.Bukkit.getConsoleSender(), "gamerule dodaylightcycle false");
    org.bukkit.Bukkit.dispatchCommand(org.bukkit.Bukkit.getConsoleSender(), "setworldspawn 500 59 494");
    org.bukkit.Bukkit.dispatchCommand(org.bukkit.Bukkit.getConsoleSender(), "setworldspawn 500 59 494");
    org.bukkit.Bukkit.dispatchCommand(org.bukkit.Bukkit.getConsoleSender(), "weather clear");
    org.bukkit.Bukkit.dispatchCommand(org.bukkit.Bukkit.getConsoleSender(), "time set day");
    for (var _x = 0; _x<10;_x++) {
      for (var _y = 0; _y<1;_y++) {
        for (var _z = 0; _z<10;_z++) {
           var _loc = new org.bukkit.Location(server.worlds[0], parseInt((function() { var _x = exports.redBed.x + -5;var _y = exports.redBed.y + -1;var _z = exports.redBed.z + -5;var loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return loc; })().x+_x), parseInt((function() { var _x = exports.redBed.x + -5;var _y = exports.redBed.y + -1;var _z = exports.redBed.z + -5;var loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return loc; })().y+_y), parseInt((function() { var _x = exports.redBed.x + -5;var _y = exports.redBed.y + -1;var _z = exports.redBed.z + -5;var loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return loc; })().z+_z));
           server.worlds[0].getBlockAt (_loc).setType (org.bukkit.Material.RED_CONCRETE);
        }
      }
    }
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
    for (var _x = 0; _x<10;_x++) {
      for (var _y = 0; _y<1;_y++) {
        for (var _z = 0; _z<10;_z++) {
           var _loc = new org.bukkit.Location(server.worlds[0], parseInt((function() { var _x = exports.blueBed.x + -5;var _y = exports.blueBed.y + -1;var _z = exports.blueBed.z + -5;var loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return loc; })().x+_x), parseInt((function() { var _x = exports.blueBed.x + -5;var _y = exports.blueBed.y + -1;var _z = exports.blueBed.z + -5;var loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return loc; })().y+_y), parseInt((function() { var _x = exports.blueBed.x + -5;var _y = exports.blueBed.y + -1;var _z = exports.blueBed.z + -5;var loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return loc; })().z+_z));
           server.worlds[0].getBlockAt (_loc).setType (org.bukkit.Material.BLUE_CONCRETE);
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
    for (var _elementIndex=0; _elementIndex <exports.blueDefenders.length;_elementIndex++) {
      defender = exports.blueDefenders[_elementIndex];
      createBeacon ("blue", defender);
    };
    for (var _elementIndex=0; _elementIndex <exports.redDefenders.length;_elementIndex++) {
      defender = exports.redDefenders[_elementIndex];
      createBeacon ("red", defender);
    };
    for (var _elementIndex=0; _elementIndex <server.getOnlinePlayers().length;_elementIndex++) {
      player = server.getOnlinePlayers()[_elementIndex];
      fd = new org.bukkit.metadata.FixedMetadataValue (__plugin,-1);
      if (player != null) {
        if (player.setMetadata != null ) {
          player.setMetadata ("_gameid_", fd );
        }
      }
    };
    listeners();
  });


exports.createBeacon  = function (color, location) {
  //Instantiations;
  var block;
  var data;
  var sign;
  var newLocation;
  server.worlds[0].getBlockAt (location).setType (org.bukkit.Material.BEACON);
  for (var _x = 0; _x<5;_x++) {
    for (var _y = 0; _y<1;_y++) {
      for (var _z = 0; _z<5;_z++) {
         var _loc = new org.bukkit.Location(server.worlds[0], parseInt((function() { var _x = location.x + -2;var _y = location.y + -1;var _z = location.z + -2;var loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return loc; })().x+_x), parseInt((function() { var _x = location.x + -2;var _y = location.y + -1;var _z = location.z + -2;var loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return loc; })().y+_y), parseInt((function() { var _x = location.x + -2;var _y = location.y + -1;var _z = location.z + -2;var loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return loc; })().z+_z));
         server.worlds[0].getBlockAt (_loc).setType (org.bukkit.Material.DIAMOND_BLOCK);
      }
    }
  }
  newLocation=(function() { var _x = location.x + 0;var _y = location.y + 1;var _z = location.z + 0;var loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return loc; })();
  if (((color) == ("red"))){
    server.worlds[0].getBlockAt (newLocation).setType (org.bukkit.Material.BLUE_STAINED_GLASS);
  }
  else {
    server.worlds[0].getBlockAt (newLocation).setType (org.bukkit.Material.RED_STAINED_GLASS);
  }
};

exports.listeners = function () {
  //Instantiations;
  var player;
  var gameId;
  var team;
  var speed;
  var vector;
  var defenders;
  var distance;
  var newLocation;
  var arrow;
  var block;
  var durability;
  var chestplate;
  var line;
  var color;
  var _player;
  var teams;
  var clickType;
  var career;
  var firework;
  var projectile;
  var location;
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
    fd = new org.bukkit.metadata.FixedMetadataValue (__plugin,-1);
    if (player != null) {
      if (player.setMetadata != null ) {
        player.setMetadata ("_gameid_", fd );
      }
    }
  });
  events.blockBreak( function (event) {
    event.cancelled = true;
  });
  events.playerMove( function (event) {
    player=(event.getPlayer== null) ? null : event.getPlayer();
    gameId=(player== null)? null : (player.getMetadata == null)?null:(player.getMetadata("_gameid_").length == 0)?null:player.getMetadata("_gameid_")[0].value();
    team=(player== null)? null : (player.getMetadata == null)?null:(player.getMetadata("_team_").length == 0)?null:player.getMetadata("_team_")[0].value();
    speed=player.getVelocity().length();
    if (((speed) > (5))){
      console.log ("capping speed of: " + speed);
      vector=player.getVelocity().normalize();
      vector=vector.multiply (4);
      player.setVelocity(vector);
    }
    if (((exports.gameId) == (gameId))){
      if (! (player.getMetadata("_team_").length > 0)){
        if (function () { _inSphere = false;
          if (Math.abs(player.location.x - exports.lobbyLocation.x) <= 10){
             if (Math.abs(player.location.y - exports.lobbyLocation.y) <= 10){
                if (Math.abs(player.location.z - exports.lobbyLocation.z) <= 10){
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
            exports.lobbyLocation.setPitch (_pitch);
            exports.lobbyLocation.setYaw   (_yaw);
            player.teleport(exports.lobbyLocation, org.bukkit.event.player.PlayerTeleportEvent.TeleportCause.PLUGIN);
            player.setVelocity(_velocity);
          })();
        }
      }
      else if (! (player.getMetadata("_career_").length > 0)){
        console.log ("got team: " + team);
        if (function () { _inSphere = false;
          if (Math.abs(player.location.x - exports.careerLocation.x) <= 10){
             if (Math.abs(player.location.y - exports.careerLocation.y) <= 10){
                if (Math.abs(player.location.z - exports.careerLocation.z) <= 10){
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
            exports.careerLocation.setPitch (_pitch);
            exports.careerLocation.setYaw   (_yaw);
            player.teleport(exports.careerLocation, org.bukkit.event.player.PlayerTeleportEvent.TeleportCause.PLUGIN);
            player.setVelocity(_velocity);
          })();
        }
      }
      else {
        if (! ((player == null ) ? false : (player.getGameMode().toString() == "SPECTATOR"))){
          if (((team) == ("red"))){
            defenders=exports.blueDefenders;
          }
          else {
            defenders=exports.redDefenders;
          }
          for (var _elementIndex=0; _elementIndex <defenders.length;_elementIndex++) {
            defender = defenders[_elementIndex];
            distance=(player== null)?null:player.location.distance(defender);
            if (((distance) < (60))){
              vector=(player== null)?null:player.location.toVector().subtract(defender.toVector()).normalize();
              vector=vector.multiply (5);
              newLocation=(function() { var _x = defender.x + 0;var _y = defender.y + 2;var _z = defender.z + 0;var loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return loc; })();
              for (var i=0; i<5; i++) {
                arrow=server.worlds[0].spawnArrow(newLocation,vector,vector.length(),12);
                ;
              }
            }
          };
        }
      }
    }
    else {
      if (((gameId) == (null))){
        console.log ("null gameId ?!");
      }
      else if (((gameId) == (-1)) || ((gameId) != (exports.gameId))){
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
          (function() {   var h=20;
            if (player.setHealth != null) {
              if (h<0) {
                 h = 0;
              }
              player.setHealth(h);  }
           })();
          player.getInventory().setChestplate(null);
          console.log ( 'Chestplate removed for player: ' + player.name );
          player.removeMetadata ("_career_", __plugin );
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
          player.getInventory().setItem (0,new org.bukkit.inventory.ItemStack (org.bukkit.Material.LEGACY_ELYTRA,1) );
          if (((line) == ("fighter"))){
            player.getInventory().setItem (1,new org.bukkit.inventory.ItemStack (org.bukkit.Material.ARROW,64) );
          }
          else {
            player.getInventory().setItem (1,new org.bukkit.inventory.ItemStack (org.bukkit.Material.SNOWBALL,64) );
          }
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
          if (((teams.length) > 1)){
            exports.gameStarted=true;
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
          if (((career) == ("fighter"))){
            speed=player.getVelocity().length();
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
      if (((team) == ("red"))){
        location=exports.redBed;
      }
      else {
        location=exports.blueBed;
      }
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
        if (((team) == ("red"))){
          safeLocation=exports.redBed;
        }
        else {
          safeLocation=exports.blueBed;
        }
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
    if (exports.gameStarted){
      console.log ("Player death event triggered");
      player=(event.getEntity== null) ? null : event.getEntity();
      if (player instanceof org.bukkit.entity.Player){
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
      }
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
      server.worlds[0].getBlockAt (exports.redBed).setType (org.bukkit.Material.AIR);
      server.worlds[0].getBlockAt (exports.blueBed).setType (org.bukkit.Material.AIR);
      event.cancelled = true;
    }
  });
};
