function spawnCapturePoint (location,destroy) {
  //Instantiations;
  var newLocation;
  var block;
  var data;
  var sign;
  var airLocation;
  newLocation=location;
  newLocation=(function() { var _x = newLocation.x + 0;var _y = newLocation.y + 1;var _z = newLocation.z + 0;var _loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return _loc; })();
  for (var i=0; i<7; i++) {
    if (destroy){
      // Spawn org.bukkit.Material.AIR at: newLocation
      if (newLocation instanceof org.bukkit.Location ){
        server.worlds[0].getBlockAt (newLocation).setType (org.bukkit.Material.AIR);
      } else {
        console.log ( '\n***ERR! Cannot spawn block.  Invalid location specified!');
      }
    }
    else {
      // Spawn org.bukkit.Material.RED_CONCRETE at: newLocation
      if (newLocation instanceof org.bukkit.Location ){
        server.worlds[0].getBlockAt (newLocation).setType (org.bukkit.Material.RED_CONCRETE);
      } else {
        console.log ( '\n***ERR! Cannot spawn block.  Invalid location specified!');
      }
    }
    airLocation=(function() { var _x = newLocation.x + 1;var _y = newLocation.y + 0;var _z = newLocation.z + 0;var _loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return _loc; })();
    // Spawn org.bukkit.Material.AIR at: airLocation
    if (airLocation instanceof org.bukkit.Location ){
      server.worlds[0].getBlockAt (airLocation).setType (org.bukkit.Material.AIR);
    } else {
      console.log ( '\n***ERR! Cannot spawn block.  Invalid location specified!');
    }
    newLocation=(function() { var _x = newLocation.x + 0;var _y = newLocation.y + 1;var _z = newLocation.z + 0;var _loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return _loc; })();
  }
};

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
  setTimeout (function () {
    console.log ("do daylightcycle");
    org.bukkit.Bukkit.dispatchCommand(org.bukkit.Bukkit.getConsoleSender(), "gamerule doDaylightCycle false");
    console.log ("done with daylight cycle");
  },500);
  resetCapturePoints();
  spawnStructures();
  fd = new org.bukkit.metadata.FixedMetadataValue (__plugin,0);
  var players = server.getOnlinePlayers();
  var _player;
  for (var playersIndex=0; playersIndex<players.length; playersIndex++) {
    _player = players[playersIndex];
    if ( _player != null) {
      if (_player.setMetadata != null ) {
        _player.setMetadata ("_gameid_", fd );
      }
    }
  }
  listeners();


function spawnStructures () {
  //Instantiations;
  var count;
  var length;
  var x;
  var z;
  var location;
  var block;
  var data;
  var loc;
  var sign;
  var newLocation;
  console.log ("spawnStructures");
  count=0;
  length=exports.capturePoints.length;
  console.log ("capture points length: " + length );
  for (var _elementIndex=0; _elementIndex <exports.capturePoints.length;_elementIndex++) {
    capturePoint = exports.capturePoints[_elementIndex];
    count=(function () {
      var _val_ = ( count==null)?0:count;
      _val_ = _val_+1;
      return _val_;
    })();
    console.log ("count: " + count);
    if (((count) == (length))){
      x=parseInt (Math.random () * (600-400)) + 400;
      z=parseInt (Math.random () * (800-200)) + 200;
      location=new org.bukkit.Location(server.worlds[0], x, 20, z);
      capturePoint.location=location;
      spawnCapturePoint(location, false);
      setTimeout (function () {
        org.bukkit.Bukkit.dispatchCommand(org.bukkit.Bukkit.getConsoleSender(), "say @a " + "The random capture point is located at: " + location);
      },500);
    }
    else {
      location=capturePoint.location;
      spawnCapturePoint(location, false);
    }
  };
  console.log ( "Spawn a legacy bed yo");
  _loc = new org.bukkit.Location (server.worlds[0], parseInt(exports.redBed.x), parseInt(exports.redBed.y), parseInt(exports.redBed.z));
  block = server.worlds[0].getBlockAt (_loc);
  block.setType (org.bukkit.Material.LEGACY_BED_BLOCK);
  data = org.bukkit.Material.LEGACY_BED_BLOCK.createBlockData();
  data.setPart (org.bukkit.block.data.type.Bed.Part.HEAD);
  block.setBlockData (data);
  _loc = new org.bukkit.Location (server.worlds[0], parseInt(_loc.x), parseInt(_loc.y), parseInt(_loc.z)+1);
  block = server.worlds[0].getBlockAt (_loc);
  block.setType (org.bukkit.Material.LEGACY_BED_BLOCK);
  data = org.bukkit.Material.LEGACY_BED_BLOCK.createBlockData();
  data.setPart (org.bukkit.block.data.type.Bed.Part.FOOT);
  block.setBlockData (data);
  newLocation=(function() { var _x = exports.redBed.x + -5;var _y = exports.redBed.y + -1;var _z = exports.redBed.z + -5;var _loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return _loc; })();
  for (var _x = 0; _x<10;_x++) {
    for (var _y = 0; _y<1;_y++) {
      for (var _z = 0; _z<10;_z++) {
         var _loc = new org.bukkit.Location(server.worlds[0], parseInt(newLocation.x+_x), parseInt(newLocation.y+_y), parseInt(newLocation.z+_z));
         server.worlds[0].getBlockAt (_loc).setType (org.bukkit.Material.RED_CONCRETE);
      }
    }
  }
  spawnCommandBlock (newLocation);
  console.log ( "Spawn a legacy bed yo");
  _loc = new org.bukkit.Location (server.worlds[0], parseInt(exports.blueBed.x), parseInt(exports.blueBed.y), parseInt(exports.blueBed.z));
  block = server.worlds[0].getBlockAt (_loc);
  block.setType (org.bukkit.Material.LEGACY_BED_BLOCK);
  data = org.bukkit.Material.LEGACY_BED_BLOCK.createBlockData();
  data.setPart (org.bukkit.block.data.type.Bed.Part.HEAD);
  block.setBlockData (data);
  _loc = new org.bukkit.Location (server.worlds[0], parseInt(_loc.x), parseInt(_loc.y), parseInt(_loc.z)+1);
  block = server.worlds[0].getBlockAt (_loc);
  block.setType (org.bukkit.Material.LEGACY_BED_BLOCK);
  data = org.bukkit.Material.LEGACY_BED_BLOCK.createBlockData();
  data.setPart (org.bukkit.block.data.type.Bed.Part.FOOT);
  block.setBlockData (data);
  newLocation=(function() { var _x = exports.blueBed.x + -5;var _y = exports.blueBed.y + -1;var _z = exports.blueBed.z + -5;var _loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return _loc; })();
  for (var _x = 0; _x<10;_x++) {
    for (var _y = 0; _y<1;_y++) {
      for (var _z = 0; _z<10;_z++) {
         var _loc = new org.bukkit.Location(server.worlds[0], parseInt(newLocation.x+_x), parseInt(newLocation.y+_y), parseInt(newLocation.z+_z));
         server.worlds[0].getBlockAt (_loc).setType (org.bukkit.Material.BLUE_CONCRETE);
      }
    }
  }
  spawnCommandBlock (newLocation);
  for (var _elementIndex=0; _elementIndex <exports.redDefenders.length;_elementIndex++) {
    defender = exports.redDefenders[_elementIndex];
    // Spawn org.bukkit.Material.BEACON at: defender
    if (defender instanceof org.bukkit.Location ){
      server.worlds[0].getBlockAt (defender).setType (org.bukkit.Material.BEACON);
    } else {
      console.log ( '\n***ERR! Cannot spawn block.  Invalid location specified!');
    }
    newLocation=(function() { var _x = defender.x + -2;var _y = defender.y + -1;var _z = defender.z + -2;var _loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return _loc; })();
    for (var _x = 0; _x<5;_x++) {
      for (var _y = 0; _y<1;_y++) {
        for (var _z = 0; _z<5;_z++) {
           var _loc = new org.bukkit.Location(server.worlds[0], parseInt(newLocation.x+_x), parseInt(newLocation.y+_y), parseInt(newLocation.z+_z));
           server.worlds[0].getBlockAt (_loc).setType (org.bukkit.Material.DIAMOND_BLOCK);
        }
      }
    }
    newLocation=(function() { var _x = defender.x + 0;var _y = defender.y + 1;var _z = defender.z + 0;var _loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return _loc; })();
    // Spawn org.bukkit.Material.BLUE_STAINED_GLASS at: newLocation
    if (newLocation instanceof org.bukkit.Location ){
      server.worlds[0].getBlockAt (newLocation).setType (org.bukkit.Material.BLUE_STAINED_GLASS);
    } else {
      console.log ( '\n***ERR! Cannot spawn block.  Invalid location specified!');
    }
    console.log ("spawn red defender at: " + newLocation);
  };
  for (var _elementIndex=0; _elementIndex <exports.blueDefenders.length;_elementIndex++) {
    defender = exports.blueDefenders[_elementIndex];
    // Spawn org.bukkit.Material.BEACON at: defender
    if (defender instanceof org.bukkit.Location ){
      server.worlds[0].getBlockAt (defender).setType (org.bukkit.Material.BEACON);
    } else {
      console.log ( '\n***ERR! Cannot spawn block.  Invalid location specified!');
    }
    newLocation=(function() { var _x = defender.x + -2;var _y = defender.y + -1;var _z = defender.z + -2;var _loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return _loc; })();
    for (var _x = 0; _x<5;_x++) {
      for (var _y = 0; _y<1;_y++) {
        for (var _z = 0; _z<5;_z++) {
           var _loc = new org.bukkit.Location(server.worlds[0], parseInt(newLocation.x+_x), parseInt(newLocation.y+_y), parseInt(newLocation.z+_z));
           server.worlds[0].getBlockAt (_loc).setType (org.bukkit.Material.DIAMOND_BLOCK);
        }
      }
    }
    newLocation=(function() { var _x = defender.x + 0;var _y = defender.y + 1;var _z = defender.z + 0;var _loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return _loc; })();
    // Spawn org.bukkit.Material.RED_STAINED_GLASS at: newLocation
    if (newLocation instanceof org.bukkit.Location ){
      server.worlds[0].getBlockAt (newLocation).setType (org.bukkit.Material.RED_STAINED_GLASS);
    } else {
      console.log ( '\n***ERR! Cannot spawn block.  Invalid location specified!');
    }
    console.log ("spawn blue defender at: " + newLocation);
  };
};

function resetCapturePoints () {
  exports.capturePoints=[
    {  location:(function() { var _x = exports.redBed.x + 40;var _y = exports.redBed.y + -1;var _z = exports.redBed.z + 40;var _loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return _loc; })(),owner:"",flagHeight:0},
    {  location:(function() { var _x = exports.redBed.x + 20;var _y = exports.redBed.y + -1;var _z = exports.redBed.z + 20;var _loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return _loc; })(),owner:"",flagHeight:0},
    {  location:(function() { var _x = exports.blueBed.x + 40;var _y = exports.blueBed.y + -1;var _z = exports.blueBed.z + 40;var _loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return _loc; })(),owner:"",flagHeight:0},
    {  location:(function() { var _x = exports.blueBed.x + 20;var _y = exports.blueBed.y + -1;var _z = exports.blueBed.z + 20;var _loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return _loc; })(),owner:"",flagHeight:0},
    {  location:new org.bukkit.Location(server.worlds[0], 501, 59, 497),owner:"",flagHeight:0},
    {  location:new org.bukkit.Location(server.worlds[0], 0, 0, 0),owner:"",flagHeight:0}
  ];
};

function spawnCommandBlock  (newLocation) {
  //Instantiations;
  var location;
  var block;
  var data;
  var loc;
  var sign;
  var state;
  var _data;
  var _block;
  // Spawn org.bukkit.Material.COMMAND_BLOCK at: newLocation
  if (newLocation instanceof org.bukkit.Location ){
    server.worlds[0].getBlockAt (newLocation).setType (org.bukkit.Material.COMMAND_BLOCK);
  } else {
    console.log ( '\n***ERR! Cannot spawn block.  Invalid location specified!');
  }
  block = server.worlds[0].getBlockAt (newLocation);
  state = block.getState();
  state.setCommand("give @p arrow{display:{Name:\"\\\"Fuel\\\"\"}} 1");
  state.update();
  newLocation=(function() { var _x = newLocation.x + 0;var _y = newLocation.y + 1;var _z = newLocation.z + 0;var _loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return _loc; })();
  // Spawn org.bukkit.Material.OAK_BUTTON at: newLocation
  if (newLocation instanceof org.bukkit.Location ){
    server.worlds[0].getBlockAt (newLocation).setType (org.bukkit.Material.OAK_BUTTON);
  } else {
    console.log ( '\n***ERR! Cannot spawn block.  Invalid location specified!');
  }
  _block = server.worlds[0].getBlockAt (newLocation)
  _data = _block.getBlockData();
  _data.setFace(org.bukkit.block.data.type.Switch.Face.FLOOR)
  _block.setBlockData(_data)
  newLocation=(function() { var _x = newLocation.x + 9;var _y = newLocation.y + 0;var _z = newLocation.z + 0;var _loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return _loc; })();
  // Spawn org.bukkit.Material.OAK_BUTTON at: newLocation
  if (newLocation instanceof org.bukkit.Location ){
    server.worlds[0].getBlockAt (newLocation).setType (org.bukkit.Material.OAK_BUTTON);
  } else {
    console.log ( '\n***ERR! Cannot spawn block.  Invalid location specified!');
  }
  _block = server.worlds[0].getBlockAt (newLocation)
  _data = _block.getBlockData();
  _data.setFace(org.bukkit.block.data.type.Switch.Face.FLOOR)
  _block.setBlockData(_data)
  newLocation=(function() { var _x = newLocation.x + 0;var _y = newLocation.y + -1;var _z = newLocation.z + 0;var _loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return _loc; })();
  // Spawn org.bukkit.Material.COMMAND_BLOCK at: newLocation
  if (newLocation instanceof org.bukkit.Location ){
    server.worlds[0].getBlockAt (newLocation).setType (org.bukkit.Material.COMMAND_BLOCK);
  } else {
    console.log ( '\n***ERR! Cannot spawn block.  Invalid location specified!');
  }
  block = server.worlds[0].getBlockAt (newLocation);
  state = block.getState();
  state.setCommand("give @p snowball{display:{Name:\"\\\"Bomb\\\"\"}} 1");
  state.update();
};

function playerCommand (event) {
  //Instantiations;
  var player;
  var message;
  var data;
  var cmd;
  var stack;
  var meta;
  var index;
  var location;
  var textLocation;
  player=(event.getPlayer== null) ? null : event.getPlayer();
  message=(event.getMessage== null) ? null : event.getMessage();
  data=(message).split(" ");
  cmd=(data).shift();
  message=data.join(" ");
  console.log ("cmd: [" + cmd + "] " + message);
  // Give the player a damaged Elytra
  if (((cmd) == "/d")){
    console.log ("d command yo");
    stack=new org.bukkit.inventory.ItemStack (org.bukkit.Material.LEGACY_ELYTRA,1);
    var meta = stack.getItemMeta();
    meta.setDamage (400);
    stack.setItemMeta (meta);
    if (player != null) { player.getInventory().addItem (stack); }
    event.cancelled = true;
  }
  else if (((cmd) == "/f")){
    stack=(function() {   var s = new org.bukkit.inventory.ItemStack (org.bukkit.Material.ARROW,10);  var m = s.getItemMeta();  m.setDisplayName ("Fuel");  s.setItemMeta(m);  return s; })();
    if (player != null) { player.getInventory().addItem (stack); }
    event.cancelled = true;
  }
  else if (((cmd) == "/b")){
    stack=(function() {   var s = new org.bukkit.inventory.ItemStack (org.bukkit.Material.SNOWBALL,10);  var m = s.getItemMeta();  m.setDisplayName ("Bomb");  s.setItemMeta(m);  return s; })();
    if (player != null) { player.getInventory().addItem (stack); }
    event.cancelled = true;
  }
  else if (((cmd) == "/r")){
    index=(function () {
      var _val_ = ( exports.capturePoints.length==null)?0:exports.capturePoints.length;
      _val_ = _val_-1;
      return _val_;
    })();
    location=exports.capturePoints[index].location;
    textLocation="[" + location.x + "," + location.y + "," + location.z + "]";
    (function() {
      if (player != null ) {
         player.sendMessage ("Random capture point is located at: " + textLocation);
      }
     })();
    event.cancelled = true;
  }
  else {
    console.log ("Did not understand cmd: [" + cmd + "] " + message);
  }
};

function listeners () {
  //Instantiations;
  var player;
  var item;
  console.log ("listeners");
  events.playerMove( function (event) {
    PlayerMoved(event);
  });
  // You'll turn into a spectator once your bed has been destroyed and you die.
  events.playerRespawn( function (event) {
    PlayerRespawn(event);
  });
  // Every time the user clicks
  events.playerInteract( function (event) {
    PlayerClick(event);
  });
  events.projectileHit( function (event) {
    projectileHit(event);
  });
  // Set gameId so we know that null is not associated with any player
  events.playerJoin( function (event) {
    fd = new org.bukkit.metadata.FixedMetadataValue (__plugin,0);
    if ((event.getPlayer== null) ? null : event.getPlayer() != null) {
      if ((event.getPlayer== null) ? null : event.getPlayer().setMetadata != null ) {
        (event.getPlayer== null) ? null : event.getPlayer().setMetadata ("_gameid_", fd );
      }
    }
  });
  events.blockBreak( function (event) {
    event.cancelled = true;
  });
  events.playerItemConsume( function (event) {
    player=(event.getPlayer== null) ? null : event.getPlayer();
    item=(event.getItem== null) ? null : event.getItem();
    if ((((item == null ) ? null : (item.getType == null) ? null : item.getType()) == (org.bukkit.Material.COOKIE))){
      (function() {
        if (player != null ) {
           player.sendMessage ("You consumed an cookie");
        }
       })();
    }
  });
  events.playerCommandPreprocess( function (event) {
    playerCommand(event);
  });
};

function PlayerMoved (event) {
  //Instantiations;
  var player;
  var gameId;
  var team;
  var distance;
  player=(event.getPlayer== null) ? null : event.getPlayer();
  gameId=(player== null)? null : (player.getMetadata == null)?null:(player.getMetadata("_gameid_").length == 0)?null:player.getMetadata("_gameid_")[0].value();
  team=(player== null)? null : (player.getMetadata == null)?null:(player.getMetadata("_team_").length == 0)?null:player.getMetadata("_team_")[0].value();
  // Join server sets gameId to 0 so this should never occur, since
  // player's gameId is set to zero when they join the server.
  if (((gameId) == (null))){
    console.log ("This is an unknown glitch....");
    fd = new org.bukkit.metadata.FixedMetadataValue (__plugin,exports.gameId);
    if (player != null) {
      if (player.setMetadata != null ) {
        player.setMetadata ("_gameid_", fd );
      }
    }
    (function() {
      if (player != null ) {
         player.sendMessage ("Random glitch noticed (Tell Paul)");
      }
     })();
  }
  else {
    if (((gameId) != (exports.gameId))){
      (function() {
        if (player != null ) {
           player.sendMessage ("Welcome to the game v1.2");
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
    else if (! (player.getMetadata("_team_").length > 0)){
      distance=(function() {   var _value = 0.0;
        if ((player== null)?null:player.location instanceof org.bukkit.Location ){
           if (exports.lobbyLocation instanceof org.bukkit.Location ) {
              _value = (player== null)?null:player.location.distance(exports.lobbyLocation);
           } else {
              console.log ( '\n***ERR! Distance between locations cannot determine distance...location2 is not a location!');
           }
        } else {
           console.log ( '\n***ERR! Distance between locations cannot determine distance...location1 is not a location!');
        }
        return _value; })();
      if (((distance) > 30)){
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
      distance=(function() {   var _value = 0.0;
        if ((player== null)?null:player.location instanceof org.bukkit.Location ){
           if (exports.lobbyLocation instanceof org.bukkit.Location ) {
              _value = (player== null)?null:player.location.distance(exports.lobbyLocation);
           } else {
              console.log ( '\n***ERR! Distance between locations cannot determine distance...location2 is not a location!');
           }
        } else {
           console.log ( '\n***ERR! Distance between locations cannot determine distance...location1 is not a location!');
        }
        return _value; })();
      if (((distance) > 30)){
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
  }
  autoDefenderMove(team,player);
  capturePointMove(player,team);
};

function autoDefenderMove (team,player) {
  //Instantiations;
  var defenders;
  var distance;
  var newLocation;
  var vector;
  var arrow;
  if (((team) == ("red"))){
    defenders=exports.blueDefenders;
  }
  else {
    defenders=exports.redDefenders;
  }
  for (var _elementIndex=0; _elementIndex <defenders.length;_elementIndex++) {
    loc = defenders[_elementIndex];
    distance=(function() {   var _value = 0.0;
      if (loc instanceof org.bukkit.Location ){
         if ((player== null)?null:player.location instanceof org.bukkit.Location ) {
            _value = loc.distance((player== null)?null:player.location);
         } else {
            console.log ( '\n***ERR! Distance between locations cannot determine distance...location2 is not a location!');
         }
      } else {
         console.log ( '\n***ERR! Distance between locations cannot determine distance...location1 is not a location!');
      }
      return _value; })();
    if (((distance) < (20))){
      newLocation=(function() { var _x = loc.x + 0;var _y = loc.y + 3;var _z = loc.z + 0;var _loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return _loc; })();
      vector=(player== null)?null:player.location.toVector().subtract(newLocation.toVector());
      vector=vector.multiply (1.5);
      for (var i=0; i<5; i++) {
        arrow=server.worlds[0].spawnArrow(newLocation,vector,vector.length(),12);
        ;
      }
    }
  };
};

function projectileHit (event) {
  //Instantiations;
  var projectile;
  var entityType;
  var distance;
  projectile=(event.getEntity== null) ? null : event.getEntity();
  entityType=projectile.getType();
  distance=(function() {   var _value = 0.0;
    if ((projectile== null)?null:projectile.location instanceof org.bukkit.Location ){
       if (exports.lobbyLocation instanceof org.bukkit.Location ) {
          _value = (projectile== null)?null:projectile.location.distance(exports.lobbyLocation);
       } else {
          console.log ( '\n***ERR! Distance between locations cannot determine distance...location2 is not a location!');
       }
    } else {
       console.log ( '\n***ERR! Distance between locations cannot determine distance...location1 is not a location!');
    }
    return _value; })();
  if (((entityType) == (org.bukkit.entity.EntityType.SNOWBALL))){
    if (((distance) < 50)){
      console.log ("No explosions allowed near the lobby");
    }
    else {
      server.worlds[0].createExplosion ((projectile== null)?null:projectile.location,1);
    }
  }
};

function PlayerRespawn (event) {
  //Instantiations;
  var player;
  var team;
  var block;
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
};

function gameOver () {
  //Instantiations;
  var allCaptured;
  var owner;
  var lastOwner;
  allCaptured=true;
  for (var _elementIndex=0; _elementIndex <exports.capturePoints.length;_elementIndex++) {
    capturePoint = exports.capturePoints[_elementIndex];
    owner=capturePoint.owner;
    if (((owner) == "")){
      allCaptured=false;
      break;
    }
  };
  if (allCaptured){
    lastOwner="";
    for (var _elementIndex=0; _elementIndex <exports.capturePoints.length;_elementIndex++) {
      capturePoint = exports.capturePoints[_elementIndex];
      owner=capturePoint.owner;
      if (((lastOwner) == "")){
        lastOwner=owner;
      }
      else {
        if (((lastOwner) != (owner))){
          allCaptured=false;
          break;
        }
      }
    };
  }
  return allCaptured;
};

function capturePointMove (player,team) {
  //Instantiations;
  var location;
  var distance;
  var flagHeight;
  var owner;
  var index;
  var block;
  var data;
  var loc;
  var sign;
  for (var _elementIndex=0; _elementIndex <exports.capturePoints.length;_elementIndex++) {
    capturePoint = exports.capturePoints[_elementIndex];
    location=capturePoint.location;
    distance=(function() {   var _value = 0.0;
      if ((player== null)?null:player.location instanceof org.bukkit.Location ){
         if (location instanceof org.bukkit.Location ) {
            _value = (player== null)?null:player.location.distance(location);
         } else {
            console.log ( '\n***ERR! Distance between locations cannot determine distance...location2 is not a location!');
         }
      } else {
         console.log ( '\n***ERR! Distance between locations cannot determine distance...location1 is not a location!');
      }
      return _value; })();
    if (((distance) < 20)){
      flagHeight=capturePoint.flagHeight;
      if (((flagHeight) == 0)){
        capturePoint.owner=team;
      }
      owner=capturePoint.owner;
      if (((owner) == (team))){
        if (((flagHeight) < 7)){
          flagHeight=(function () {
            var _val_ = ( flagHeight==null)?0:flagHeight;
            _val_ = _val_+1;
            return _val_;
          })();
          capturePoint.flagHeight=flagHeight;
          if (((flagHeight) == 7)){
            (function() {
              if (player != null ) {
                 player.sendMessage ("You have claimed the flag");
              }
             })();
            org.bukkit.Bukkit.dispatchCommand(org.bukkit.Bukkit.getConsoleSender(), "say @a " + "Capture point has been captured by " + team + " team");
            if (gameOver()){
              setTimeout (function () {
                org.bukkit.Bukkit.dispatchCommand(org.bukkit.Bukkit.getConsoleSender(), "say @a " + "The game is over " + team + " has won" );
              },500);
              index=(function () {
                var _val_ = ( exports.capturePoints.length==null)?0:exports.capturePoints.length;
                _val_ = _val_-1;
                return _val_;
              })();
              spawnCapturePoint (exports.capturePoints[index].location, true);
              exports.gameId=new Date().getTime();
              spawnStructures();
              resetCapturePoints();
            }
          }
          if (((team) == ("red"))){
            // Spawn org.bukkit.Material.RED_STAINED_GLASS at: (function() { var _x = location.x + 1;var _y = location.y + flagHeight;var _z = location.z + 0;var _loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return _loc; })()
            if ((function() { var _x = location.x + 1;var _y = location.y + flagHeight;var _z = location.z + 0;var _loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return _loc; })() instanceof org.bukkit.Location ){
              server.worlds[0].getBlockAt ((function() { var _x = location.x + 1;var _y = location.y + flagHeight;var _z = location.z + 0;var _loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return _loc; })()).setType (org.bukkit.Material.RED_STAINED_GLASS);
            } else {
              console.log ( '\n***ERR! Cannot spawn block.  Invalid location specified!');
            }
          }
          else {
            // Spawn org.bukkit.Material.BLUE_STAINED_GLASS at: (function() { var _x = location.x + 1;var _y = location.y + flagHeight;var _z = location.z + 0;var _loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return _loc; })()
            if ((function() { var _x = location.x + 1;var _y = location.y + flagHeight;var _z = location.z + 0;var _loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return _loc; })() instanceof org.bukkit.Location ){
              server.worlds[0].getBlockAt ((function() { var _x = location.x + 1;var _y = location.y + flagHeight;var _z = location.z + 0;var _loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return _loc; })()).setType (org.bukkit.Material.BLUE_STAINED_GLASS);
            } else {
              console.log ( '\n***ERR! Cannot spawn block.  Invalid location specified!');
            }
          }
        }
      }
      else {
        // Spawn org.bukkit.Material.AIR at: (function() { var _x = location.x + 1;var _y = location.y + flagHeight;var _z = location.z + 0;var _loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return _loc; })()
        if ((function() { var _x = location.x + 1;var _y = location.y + flagHeight;var _z = location.z + 0;var _loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return _loc; })() instanceof org.bukkit.Location ){
          server.worlds[0].getBlockAt ((function() { var _x = location.x + 1;var _y = location.y + flagHeight;var _z = location.z + 0;var _loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return _loc; })()).setType (org.bukkit.Material.AIR);
        } else {
          console.log ( '\n***ERR! Cannot spawn block.  Invalid location specified!');
        }
        flagHeight=(function () {
          var _val_ = ( flagHeight==null)?0:flagHeight;
          _val_ = _val_-1;
          return _val_;
        })();
        capturePoint.flagHeight=flagHeight;
        if (((owner) == ("red"))){
          // Spawn org.bukkit.Material.RED_STAINED_GLASS at: (function() { var _x = location.x + 1;var _y = location.y + flagHeight;var _z = location.z + 0;var _loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return _loc; })()
          if ((function() { var _x = location.x + 1;var _y = location.y + flagHeight;var _z = location.z + 0;var _loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return _loc; })() instanceof org.bukkit.Location ){
            server.worlds[0].getBlockAt ((function() { var _x = location.x + 1;var _y = location.y + flagHeight;var _z = location.z + 0;var _loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return _loc; })()).setType (org.bukkit.Material.RED_STAINED_GLASS);
          } else {
            console.log ( '\n***ERR! Cannot spawn block.  Invalid location specified!');
          }
        }
        else {
          // Spawn org.bukkit.Material.BLUE_STAINED_GLASS at: (function() { var _x = location.x + 1;var _y = location.y + flagHeight;var _z = location.z + 0;var _loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return _loc; })()
          if ((function() { var _x = location.x + 1;var _y = location.y + flagHeight;var _z = location.z + 0;var _loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return _loc; })() instanceof org.bukkit.Location ){
            server.worlds[0].getBlockAt ((function() { var _x = location.x + 1;var _y = location.y + flagHeight;var _z = location.z + 0;var _loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return _loc; })()).setType (org.bukkit.Material.BLUE_STAINED_GLASS);
          } else {
            console.log ( '\n***ERR! Cannot spawn block.  Invalid location specified!');
          }
        }
      }
    }
  };
};

function PlayerClick (event) {
  //Instantiations;
  var player;
  var block;
  var hand;
  var action;
  var elytra;
  var durability;
  var itemType;
  var newLocation;
  var career;
  player=(event.getPlayer== null) ? null : event.getPlayer();
  block=(event.getClickedBlock== null) ? null : event.getClickedBlock();
  hand=(event.getHand== null) ? null : event.getHand();
  action=(event.getAction== null) ? null : event.getAction();
  handleCake(block,player);
  if (! (player.getMetadata("_team_").length > 0)){
    selectTeam(block,player);
  }
  else if (! (player.getMetadata("_career_").length > 0)){
    selectCareer(block,player);
  }
  else {
    elytra=(player==null)?null:(player.getInventory == null)?null:(player.getInventory().getChestplate== null) ? null : player.getInventory().getChestplate();
    durability=(elytra==null)?-1:(elytra.getDurability == null)?-1:elytra.getDurability();
    if (((durability) == -1)){
      if (((action) == (org.bukkit.event.block.Action.LEFT_CLICK_AIR)) || (org.bukkit.event.block.Action.RIGHT_CLICK_AIR)){
        (function() {
          if (player != null ) {
             player.sendMessage ("Sorry you are not wearing the elytra");
          }
         })();
      }
    }
    else if (((durability) >= 400)){
      careerInfantry(player,hand,action);
    }
    else {
      if (player.isOnGround()){
        if (((action) == (org.bukkit.event.block.Action.LEFT_CLICK_AIR))){
          itemType=((player== null) ? null : ( player.getInventory().getItemInOffHand == null) ? null : player.getInventory().getItemInOffHand() == null ) ? null : ((player== null) ? null : ( player.getInventory().getItemInOffHand == null) ? null : player.getInventory().getItemInOffHand().getType == null) ? null : (player== null) ? null : ( player.getInventory().getItemInOffHand == null) ? null : player.getInventory().getItemInOffHand().getType();
          if (((itemType) == (org.bukkit.Material.ARROW)) || ((itemType) == (org.bukkit.Material.SNOWBALL))){
            newLocation=(function() { var _x = (player== null)?null:player.location.x + 0;var _y = (player== null)?null:player.location.y + 20;var _z = (player== null)?null:player.location.z + 0;var _loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return _loc; })();
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
                 player.sendMessage ("Sorry, arrows or snowballs need to be in your offhand to launch ");
              }
             })();
          }
        }
      }
      else {
        career=(player== null)? null : (player.getMetadata == null)?null:(player.getMetadata("_career_").length == 0)?null:player.getMetadata("_career_")[0].value();
        if (((career) == ("fighter"))){
          careerFighter (player,block,hand,action);
        }
        else if (((career) == ("bomber"))){
          careerBomber (player,block,hand,action);
        }
      }
    }
  }
};

function careerInfantry (player,hand,action) {
  //Instantiations;
  var firework;
  var vector;
  if (((hand) == (org.bukkit.inventory.EquipmentSlot.OFF_HAND))){
    if (((action) == (org.bukkit.event.block.Action.RIGHT_CLICK_AIR))){
      firework=server.worlds[0].spawnEntity((player== null)?null:player.location,org.bukkit.entity.EntityType.FIREWORK);
      var _meta = org.bukkit.Bukkit.getItemFactory().getItemMeta(org.bukkit.Material.FIREWORK_ROCKET);
      _meta.setPower(0);
      _meta.addEffect(org.bukkit.FireworkEffect.builder()
                         .withColor(org.bukkit.Color.GREEN)
                         .withFade(org.bukkit.Color.BLUE)
                         .with(org.bukkit.FireworkEffect.Type.STAR)
                         .trail(false)
                         .flicker(true)
                         .build());
      firework.setFireworkMeta(_meta);
      vector=(player== null)?null:player.location.getDirection().normalize();
      vector=vector.multiply (3);
      firework.setVelocity(vector);
    }
  }
  else {
    (function() {
      if (player != null ) {
         player.sendMessage ("Sorry you cannot fly, your elytra is damaged.  You are now infantry, place a weapon in your off-hand to shoot firework");
      }
     })();
  }
};

function selectTeam (block,player) {
  //Instantiations;
  var line;
  if ((((block==null)?null:block.getType()) == (org.bukkit.Material.OAK_SIGN))){
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
};

function careerBomber (player,block,hand,action) {
  //Instantiations;
  var newLocation;
  if (((hand) == (org.bukkit.inventory.EquipmentSlot.HAND))){
    if (((action) == (org.bukkit.event.block.Action.LEFT_CLICK_AIR))){
      newLocation=(function() { var _x = (player== null)?null:player.location.x + 0;var _y = (player== null)?null:player.location.y + 10;var _z = (player== null)?null:player.location.z + 0;var _loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return _loc; })();
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
  }
};

function selectCareer (block,player) {
  //Instantiations;
  var line;
  var team;
  var color;
  var _player;
  var meta;
  var stack;
  var location;
  if ((((block==null)?null:block.getType()) == (org.bukkit.Material.OAK_SIGN))){
    line=(block==null)?null: (block.state.getLine == null)?null:block.state.getLine(1);
    line=(line).toLowerCase();
    team=(player== null)? null : (player.getMetadata == null)?null:(player.getMetadata("_team_").length == 0)?null:player.getMetadata("_team_")[0].value();
    if (([
      "fighter",
      "bomber"
    ].indexOf ( line) >= 0)){
      (function() {   var h=20;
        if (player.setHealth != null) {
          if (h<0) {
             h = 0;
          }
          player.setHealth(h);  }
       })();
      player.getInventory().clear();
      if (((team) == "red")){
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
      player.getInventory().setItem (0,new org.bukkit.inventory.ItemStack (org.bukkit.Material.LEGACY_ELYTRA,1) );
      if (((line) == ("fighter"))){
        player.getInventory().setItem (1,(function() {   var s = new org.bukkit.inventory.ItemStack (org.bukkit.Material.ARROW,64);  var m = s.getItemMeta();  m.setDisplayName ("Fuel");  s.setItemMeta(m);  return s; })() );
      }
      else if (((line) == ("bomber"))){
        player.getInventory().setItem (1,(function() {   var s = new org.bukkit.inventory.ItemStack (org.bukkit.Material.SNOWBALL,64);  var m = s.getItemMeta();  m.setDisplayName ("Bombs");  s.setItemMeta(m);  return s; })() );
      }
      player.getInventory().setItem (2,new org.bukkit.inventory.ItemStack (org.bukkit.Material.IRON_SWORD,1) );
      fd = new org.bukkit.metadata.FixedMetadataValue (__plugin,line);
      if (player != null) {
        if (player.setMetadata != null ) {
          player.setMetadata ("_career_", fd );
        }
      }
      team=(player== null)? null : (player.getMetadata == null)?null:(player.getMetadata("_team_").length == 0)?null:player.getMetadata("_team_")[0].value();
      location=exports.capturePoints[5].location;
      (function() {
        if (player != null ) {
           player.sendMessage ("The random capture point is located at: [" + location.x + "," + location.y + "," + location.z + "]");
        }
       })();
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
};

function careerFighter (player,block,hand,action) {
  //Instantiations;
  var vector;
  var newLocation;
  var arrow;
  var stack;
  var material;
  if (((hand) == (org.bukkit.inventory.EquipmentSlot.OFF_HAND))){
    if (((action) == (org.bukkit.event.block.Action.RIGHT_CLICK_AIR))){
      vector=(player== null)?null:player.location.getDirection().normalize();
      vector=vector.multiply (5);
      newLocation=(function() { var _x = (player== null)?null:player.location.x + 0;var _y = (player== null)?null:player.location.y + 4;var _z = (player== null)?null:player.location.z + 0;var _loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return _loc; })();
      for (var i=0; i<10; i++) {
        arrow=server.worlds[0].spawnArrow(newLocation,vector,vector.length(),12);
        ;
      }
    }
  }
  else if (((hand) == (org.bukkit.inventory.EquipmentSlot.HAND))){
    stack=(player== null) ? null : ( player.getInventory().getItemInOffHand == null) ? null : player.getInventory().getItemInOffHand();
    material=(stack == null ) ? null : (stack.getType == null) ? null : stack.getType();
    console.log ("Material: " + material);
    if (((material) == ("ARROW"))){
      if (((action) == (org.bukkit.event.block.Action.LEFT_CLICK_AIR))){
        if (stack.getAmount() > 0) {
          stack.setAmount(stack.getAmount ()-1);
        }
        vector=(player== null)?null:player.location.getDirection().normalize();
        vector=vector.multiply (2);
        player.setVelocity(vector);
        console.log ("Players vector updated");
      }
    }
  }
};

function handleCake (block,player) {
  //Instantiations;
  var remaining;
  remaining=function () {
     var remaining=-1;
     var data;
     var ind;
     if (block!= null) {
        if (block.getState != null) {
           if (block.getState().getData != null) {
              data = block.getState().getData().toString();
              ind = data.indexOf ( "(") + 1;
              remaining = 6 - parseInt (data.toString ().substring (ind));
           }
        }
     }
     return remaining;
  }();
  if ((((block==null)?null:block.getType()) == (org.bukkit.Material.CAKE))){
    player.addPotionEffect(new org.bukkit.potion.PotionEffect (org.bukkit.potion.PotionEffectType.SPEED,200, 1));
    if (((remaining) == 0)){
      (function() {
        if (player != null ) {
           player.sendMessage ("You ate the last piece bro");
        }
       })();
    }
  }
};
