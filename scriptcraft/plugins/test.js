exports.render  = function (mapView, mapCanvas, player) {
  //Instantiations;
  var mapId;
  var filename;
  var title;
  mapId=mapView.getId();
  filename='scriptcraft/plugins/images/' + mapId + '.jpg';
  title='scriptcraft/plugins/\nimages/' + mapId + '.jpg\n\nDoes not exist yet';
  if (new java.io.File (filename).exists()){
    mapCanvas.drawImage (0,0,org.bukkit.map.MapPalette.resizeImage (new javax.swing.ImageIcon(filename).getImage()) );
  }
  else {
    mapCanvas.drawText ( 10,10,org.bukkit.map.MinecraftFont.Font, title);
  }
};

//expression
  events.playerJoin( function (event) {
    console.log ("Player join completed");
    player=(event.getPlayer== null) ? null : event.getPlayer();
    fd = new org.bukkit.metadata.FixedMetadataValue (__plugin,false);
    if (player != null) {
      if (player.setMetadata != null ) {
        player.setMetadata ("_teleported_", fd );
      }
    }
  });
  events.playerRespawn( function (event) {
    console.log ("Player respawn completed");
    player=(event.getPlayer== null) ? null : event.getPlayer();
    fd = new org.bukkit.metadata.FixedMetadataValue (__plugin,false);
    if (player != null) {
      if (player.setMetadata != null ) {
        player.setMetadata ("_teleported_", fd );
      }
    }
  });
  events.serverLoad( function (event) {
    console.log ("Server reload completed");
    test();
    for (var _elementIndex=0; _elementIndex <server.getOnlinePlayers().length;_elementIndex++) {
      player = server.getOnlinePlayers()[_elementIndex];
      fd = new org.bukkit.metadata.FixedMetadataValue (__plugin,false);
      if (player != null) {
        if (player.setMetadata != null ) {
          player.setMetadata ("_teleported_", fd );
        }
      }
    };
  });


exports.makeRecipes = function () {
  //Instantiations;
  var meta;
  var stack;
  var result = (function() {   var s = new org.bukkit.inventory.ItemStack (org.bukkit.Material.TRIPWIRE_HOOK,1);  var m = s.getItemMeta();  m.setDisplayName ("ACACIA_DOOR_KEY");  s.setItemMeta(m);  return s; })();
  var recipe = new org.bukkit.inventory.ShapedRecipe(result);
  recipe.shape("O  "," T ","   ");
  recipe.setIngredient('O',org.bukkit.Material.ACACIA_PLANKS);
  recipe.setIngredient('T',org.bukkit.Material.TRIPWIRE_HOOK);
  server.addRecipe(recipe);
  var result = (function() {   var s = new org.bukkit.inventory.ItemStack (org.bukkit.Material.TRIPWIRE_HOOK,1);  var m = s.getItemMeta();  m.setDisplayName ("DARK_OAK_DOOR_KEY");  s.setItemMeta(m);  return s; })();
  var recipe = new org.bukkit.inventory.ShapedRecipe(result);
  recipe.shape("O  "," T ","   ");
  recipe.setIngredient('O',org.bukkit.Material.DARK_OAK_PLANKS);
  recipe.setIngredient('T',org.bukkit.Material.TRIPWIRE_HOOK);
  server.addRecipe(recipe);
  var result = (function() {   var s = new org.bukkit.inventory.ItemStack (org.bukkit.Material.TRIPWIRE_HOOK,1);  var m = s.getItemMeta();  m.setDisplayName ("OAK_DOOR_KEY");  s.setItemMeta(m);  return s; })();
  var recipe = new org.bukkit.inventory.ShapedRecipe(result);
  recipe.shape("O  "," T ","   ");
  recipe.setIngredient('O',org.bukkit.Material.OAK_PLANKS);
  recipe.setIngredient('T',org.bukkit.Material.TRIPWIRE_HOOK);
  server.addRecipe(recipe);
  var result = (function() {   var s = new org.bukkit.inventory.ItemStack (org.bukkit.Material.TRIPWIRE_HOOK,1);  var m = s.getItemMeta();  m.setDisplayName ("BIRCH_DOOR_KEY");  s.setItemMeta(m);  return s; })();
  var recipe = new org.bukkit.inventory.ShapedRecipe(result);
  recipe.shape("O  "," T ","   ");
  recipe.setIngredient('O',org.bukkit.Material.BIRCH_PLANKS);
  recipe.setIngredient('T',org.bukkit.Material.TRIPWIRE_HOOK);
  server.addRecipe(recipe);
  var result = (function() {   var s = new org.bukkit.inventory.ItemStack (org.bukkit.Material.TRIPWIRE_HOOK,1);  var m = s.getItemMeta();  m.setDisplayName ("JUNGLE_DOOR_KEY");  s.setItemMeta(m);  return s; })();
  var recipe = new org.bukkit.inventory.ShapedRecipe(result);
  recipe.shape("O  "," T ","   ");
  recipe.setIngredient('O',org.bukkit.Material.JUNGLE_PLANKS);
  recipe.setIngredient('T',org.bukkit.Material.TRIPWIRE_HOOK);
  server.addRecipe(recipe);
  var result = (function() {   var s = new org.bukkit.inventory.ItemStack (org.bukkit.Material.TRIPWIRE_HOOK,1);  var m = s.getItemMeta();  m.setDisplayName ("SPRUCE_DOOR_KEY");  s.setItemMeta(m);  return s; })();
  var recipe = new org.bukkit.inventory.ShapedRecipe(result);
  recipe.shape("O  ","   ","  T");
  recipe.setIngredient('O',org.bukkit.Material.SPRUCE_PLANKS);
  recipe.setIngredient('T',org.bukkit.Material.TRIPWIRE_HOOK);
  server.addRecipe(recipe);
};

exports.test = function () {
  //Instantiations;
  var player;
  var block;
  var blockType;
  var count;
  var meta;
  var stack;
  var index;
  var inhand;
  var name;
  var chestplate;
  var boots;
  var blocks;
  var entity;
  var projectile;
  var shooter;
  var helmet;
  var attacker;
  var message;
  var words;
  var command;
  // Change renderer for all maps
  var renderers;
  var mapView;
  var count = 1;
  while (true) {
    mapView = server.getMap (count);
    if (mapView == undefined) {
      console.log ( 'Aborting at mapId=' + count );
      break;
    } else {
      renderers = mapView.getRenderers ();
      for (var j=0; j<renderers.length; j++ ){
        mapView.removeRenderer (renderers[j]);
      }
      mapView.addRenderer (render);
    }
    count = count + 1;
  }
  console.log ("Running test function");
  events.playerInteract( function (event) {
    player=(event.getPlayer== null) ? null : event.getPlayer();
    block=(event.getClickedBlock== null) ? null : event.getClickedBlock();
    blockType=(block==null)?null:block.getType();
    if (( parseInt((block== null)?null:block.location.x) !=594) ? false :( parseInt((block== null)?null:block.location.y) !=21) ? false :( parseInt((block== null)?null:block.location.z) !=484) ? false : true){
      count=(function () {
         var _sum=0;
         var _index;
         var _stack;
         var _stackType;
         var _inventory = player.getInventory().getContents();
         var _count = 0;
         for (var _i=0; _i<_inventory.length; _i++)  {
            _stack = _inventory[_i];
            _stackType = (_stack == null ) ? null : (_stack.getType == null) ? null : _stack.getType();
            // console.log ( _i + "): " + _stackType );
            if (_stackType == org.bukkit.Material.EMERALD ){
               _count = _count + _stack.getAmount();
            }
            if (_i == 8) { break; }
         }
         console.log ( "Got a hotbar quantity of:" + _count + " org.bukkit.Material.EMERALD" );
         return _count;})();
      if ((((function () {
         var _startTime = (player== null)? 0 : (player.getMetadata == null)?0:(player.getMetadata("scuba").length == 0)?0:player.getMetadata("scuba")[0].value();
         var _elapsedTime = (new Date().getTime()) - _startTime;
         console.log ( 'Elapsed Time: ' + _elapsedTime + ' ms');
         return _elapsedTime;
      }())) > 2000)){
        if (((count) >= 8)){
          if (player != null) { player.getInventory().addItem ((function() {   var s = new org.bukkit.inventory.ItemStack (org.bukkit.Material.DIAMOND_CHESTPLATE,1);  var m = s.getItemMeta();  m.setDisplayName ("SCUBA");  s.setItemMeta(m);  return s; })()); }
          (function () {
             var _sum=0;
             var _index;
             var _stack;
             var _stackType;
             var _inventory = player.getInventory().getContents();
             var _remaining = 8;
             var _count;
             var _newStack;
             for (var _i=0; _i<8; _i++)  {
                _stack = _inventory[_i];
                _stackType = (_stack == null ) ? null : (_stack.getType == null) ? null : _stack.getType();
                if (_stackType == org.bukkit.Material.EMERALD ){
                   if (_remaining == 0) break;
                   _count = _stack.getAmount();
                   if (_count >= _remaining) {
                      _count = _count - _remaining;
                      _remaining = 0;
                   } else {
                      _remaining = _remaining - _count;
                      _count = 0;
                   }
                   _newStack = new org.bukkit.inventory.ItemStack (org.bukkit.Material.EMERALD,_count);
                   player.getInventory().setItem (_i,_newStack);
                }
             }
          })();
          (function () {
            fd = new org.bukkit.metadata.FixedMetadataValue (__plugin,new Date().getTime());
            if (player != null) {
              if (player.setMetadata != null ) {
                 player.setMetadata ("scuba", fd );
              }
            }
          }());
        }
        else {
          (function() {
            if (player != null ) {
               player.sendMessage ("8 emeralds required to purchase");
            }
           })();
        }
      }
    }
    index=((blockType==null)?"":(blockType.toString==null)?"":blockType.toString()).indexOf("DOOR") + 1;
    if (((index) > 0)){
      inhand=(player== null) ? null : ( player.getItemInHand == null) ? null : player.getItemInHand();
      name=(function() {   var _value = (inhand== null) ? null : (inhand.getItemMeta == null) ? null : (inhand.getItemMeta() == null)?null:inhand.getItemMeta().getDisplayName();
        console.log ( 'Custom name: [' + _value + ']');
        return _value; })();
      if (((name) == (null))){
        event.cancelled = true;
      }
      else {
        index=(name).indexOf((blockType==null)?"":(blockType.toString==null)?"":blockType.toString()) + 1;
        if (((index) > 0)){
          (function() {
            if (player != null ) {
               player.sendMessage ("Welcome " + player.name);
            }
           })();
          exports.door=block;
          setTimeout (function () {
            (function () {
               if ((exports.door== null)?null:exports.door.location!= null) {
                 var _block=server.worlds[0].getBlockAt((exports.door== null)?null:exports.door.location);
                 var _myString = _block.toString();
                 var _isTop = _myString.indexOf ( "half=upper") > -1;
                 console.log ( "closedoor Is top: " + _isTop );
                 if (_isTop) {
                    var _loc=(function() { var _x = (exports.door== null)?null:exports.door.location.x;var _y = (exports.door== null)?null:exports.door.location.y+-1;var _z = (exports.door== null)?null:exports.door.location.z;var __loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return __loc; })();
                    _block = server.worlds[0].getBlockAt ( _loc );
                 }
                 var _state = _block.getState();
                 var _info  = _state.getData();
                 _info.setOpen (false);
                 _state.setData (_info);
                 _state.update();
               }
            })();
          },5000);
        }
        else {
          (function() {
            if (player != null ) {
               player.sendMessage ("You need an KEY for a " + blockType);
            }
           })();
          event.cancelled = true;
        }
      }
    }
  });
  server.worlds[0].dropItem (new org.bukkit.Location(server.worlds[0], 592, 20, 482),(function() {   var s = new org.bukkit.inventory.ItemStack (org.bukkit.Material.DIAMOND_CHESTPLATE,1);  var m = s.getItemMeta();  m.setDisplayName ("INVINCIBILITY");  s.setItemMeta(m);  return s; })());
  events.playerMove( function (event) {
    player=(event.getPlayer== null) ? null : event.getPlayer();
    if (( parseInt((player== null)?null:player.location.x) !=624) ? false :( parseInt((player== null)?null:player.location.y) !=19) ? false :( parseInt((player== null)?null:player.location.z) !=485) ? false : true){
      player.getInventory().setBoots(null);
      console.log ( 'Boots removed for player: ' + player.name );
      player.getInventory().setChestplate(null);
      console.log ( 'Chestplate removed for player: ' + player.name );
      player.getInventory().setHelmet(null);
      console.log ( 'Helmet removed for player: ' + player.name );
      player.getInventory().setLeggings(null);
      console.log ( 'Leggings removed for player: ' + player.name );
    }
    if (( parseInt((player== null)?null:player.location.x) !=591) ? false :( parseInt((player== null)?null:player.location.y) !=20) ? false :( parseInt((player== null)?null:player.location.z) !=491) ? false : true){
      player.getInventory().setBoots(null);
      console.log ( 'Boots removed for player: ' + player.name );
      player.getInventory().setChestplate(null);
      console.log ( 'Chestplate removed for player: ' + player.name );
      player.getInventory().setHelmet(null);
      console.log ( 'Helmet removed for player: ' + player.name );
      player.getInventory().setLeggings(null);
      console.log ( 'Leggings removed for player: ' + player.name );
    }
    if (! ((player== null)? null : (player.getMetadata == null)?null:(player.getMetadata("_teleported_").length == 0)?null:player.getMetadata("_teleported_")[0].value())){
      fd = new org.bukkit.metadata.FixedMetadataValue (__plugin,true);
      if (player != null) {
        if (player.setMetadata != null ) {
          player.setMetadata ("_teleported_", fd );
        }
      }
      player.teleport(new org.bukkit.Location(server.worlds[0], 594, 20, 483), org.bukkit.event.player.PlayerTeleportEvent.TeleportCause.PLUGIN);
    }
    chestplate=(player==null)?null:(player.getInventory == null)?null:(player.getInventory().getChestplate== null) ? null : player.getInventory().getChestplate();
    name=(function() {   var _value = (chestplate== null) ? null : (chestplate.getItemMeta == null) ? null : (chestplate.getItemMeta() == null)?null:chestplate.getItemMeta().getDisplayName();
      console.log ( 'Custom name: [' + _value + ']');
      return _value; })();
    if (((name) == ("INVINCIBILITY"))){
      player.setNoDamageTicks (600);
    }
    boots=(player==null)?null:(player.getInventory == null)?null:(player.getInventory().getBoots== null) ? null : player.getInventory().getBoots();
    name=(function() {   var _value = (boots== null) ? null : (boots.getItemMeta == null) ? null : (boots.getItemMeta() == null)?null:boots.getItemMeta().getDisplayName();
      console.log ( 'Custom name: [' + _value + ']');
      return _value; })();
    if (((name) == ("ICE BOOTS"))){
      blocks=(function() {   var _blocks = [];
        var _blockType;
        var _loc;
        for (var _x=((player== null)?null:player.location).x-1;_x<=((player== null)?null:player.location).x+1;_x++) {    for (var _y=((player== null)?null:player.location).y-1;_y<=((player== null)?null:player.location).y+1;_y++) {      for (var _z=((player== null)?null:player.location).z-1;_z<=((player== null)?null:player.location).z+1;_z++) {         _loc = new org.bukkit.Location(server.worlds[0], _x,_y,_z);         _blockType =  server.worlds[0].getBlockAt(_loc).getType();
               if (_blockType == (org.bukkit.Material.LAVA)) { _blocks.push (server.worlds[0].getBlockAt(_loc)); }
        }}}
        if (_blocks.length > 0) {
           console.log ( "found" + _blocks.length + " blocks " );
        }
        return _blocks;
       })();
      for (var _elementIndex=0; _elementIndex <blocks.length;_elementIndex++) {
        block = blocks[_elementIndex];
        blockType=(block==null)?null:block.getType();
        if (((blockType) == "LAVA")){
          block.setType(org.bukkit.Material.ICE);
        }
      };
    }
    if (( parseInt((player== null)?null:player.location.x) !=589) ? false :( parseInt((player== null)?null:player.location.y) !=20) ? false :( parseInt((player== null)?null:player.location.z) !=488) ? false : true){
      (function () {
         var _x1 = parseInt ( new org.bukkit.Location(server.worlds[0], 586, 19, 489).x );
         var _y1 = parseInt ( new org.bukkit.Location(server.worlds[0], 586, 19, 489).y );
         var _z1 = parseInt ( new org.bukkit.Location(server.worlds[0], 586, 19, 489).z );
         var _x2 = parseInt ( new org.bukkit.Location(server.worlds[0], 588, 18, 487).x );
         var _y2 = parseInt ( new org.bukkit.Location(server.worlds[0], 588, 18, 487).y );
         var _z2 = parseInt ( new org.bukkit.Location(server.worlds[0], 588, 18, 487).z );
         var _command = "fill " + _x1 + " " + _y1 + " " + _z1 + " " + _x2 + " " + _y2 + " " + _z2 + " minecraft:lava replace";
         console.log ( "command: " + _command );
         org.bukkit.Bukkit.dispatchCommand(org.bukkit.Bukkit.getConsoleSender(), _command );
      })();
    }
    if (( parseInt((player== null)?null:player.location.x) !=613) ? false :( parseInt((player== null)?null:player.location.y) !=20) ? false :( parseInt((player== null)?null:player.location.z) !=486) ? false : true){
        //Instantiations;
        var player;
        var block;
        var blockType;
        var count;
        var meta;
        var stack;
        var index;
        var inhand;
        var name;
        var chestplate;
        var boots;
        var blocks;
      // spawn org.bukkit.entity.EntityType.ZOMBIE
      var location = new org.bukkit.Location(server.worlds[0], 619, 20, 488);
      var entity = server.worlds[0].spawnEntity(location,org.bukkit.entity.EntityType.ZOMBIE);
    }
    if ((((function () {
       var _startTime = (player== null)? 0 : (player.getMetadata == null)?0:(player.getMetadata("preciousMetal").length == 0)?0:player.getMetadata("preciousMetal")[0].value();
       var _elapsedTime = (new Date().getTime()) - _startTime;
       console.log ( 'Elapsed Time: ' + _elapsedTime + ' ms');
       return _elapsedTime;
    }())) > 1500)){
      if (( parseInt(player.location.x) !=592) ? false :( parseInt(player.location.y) !=20) ? false :( parseInt(player.location.z) !=484) ? false : true){
        (function() {
          if (player != null ) {
             player.sendMessage ("You are in the doorway");
          }
         })();
        server.worlds[0].dropItem (player.location,new org.bukkit.inventory.ItemStack (org.bukkit.Material.IRON_INGOT,1));
        (function () {
          fd = new org.bukkit.metadata.FixedMetadataValue (__plugin,new Date().getTime());
          if (player != null) {
            if (player.setMetadata != null ) {
               player.setMetadata ("preciousMetal", fd );
            }
          }
        }());
      }
    }
  });
  makeRecipes();
  events.projectileHit( function (event) {
    entity=(event.getEntity== null) ? null : event.getEntity();
    if (( parseInt((entity== null)?null:entity.location.x) !=601) ? false :( parseInt((entity== null)?null:entity.location.y) !=25) ? false :( parseInt((entity== null)?null:entity.location.z) !=488) ? false : true){
      console.log ("Click on button");
      (function () {
         if (new org.bukkit.Location(server.worlds[0], 604, 21, 486)!= null) {
           var _block=server.worlds[0].getBlockAt(new org.bukkit.Location(server.worlds[0], 604, 21, 486));
           var _myString = _block.toString();
           var _isTop = _myString.indexOf ( "half=upper") > -1;
           console.log ( "closedoor Is top: " + _isTop );
           if (_isTop) {
              var _loc=(function() { var _x = new org.bukkit.Location(server.worlds[0], 604, 21, 486).x;var _y = new org.bukkit.Location(server.worlds[0], 604, 21, 486).y+-1;var _z = new org.bukkit.Location(server.worlds[0], 604, 21, 486).z;var __loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return __loc; })();
              _block = server.worlds[0].getBlockAt ( _loc );
           }
           var _state = _block.getState();
           var _info  = _state.getData();
           _info.setOpen (true);
           _state.setData (_info);
           _state.update();
         }
      })();
      setTimeout (function () {
        (function () {
           if (new org.bukkit.Location(server.worlds[0], 604, 21, 486)!= null) {
             var _block=server.worlds[0].getBlockAt(new org.bukkit.Location(server.worlds[0], 604, 21, 486));
             var _myString = _block.toString();
             var _isTop = _myString.indexOf ( "half=upper") > -1;
             console.log ( "closedoor Is top: " + _isTop );
             if (_isTop) {
                var _loc=(function() { var _x = new org.bukkit.Location(server.worlds[0], 604, 21, 486).x;var _y = new org.bukkit.Location(server.worlds[0], 604, 21, 486).y+-1;var _z = new org.bukkit.Location(server.worlds[0], 604, 21, 486).z;var __loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return __loc; })();
                _block = server.worlds[0].getBlockAt ( _loc );
             }
             var _state = _block.getState();
             var _info  = _state.getData();
             _info.setOpen (false);
             _state.setData (_info);
             _state.update();
           }
        })();
      },5000);
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
  events.entityTarget( function (event) {
    player=(event.getTarget== null) ? null : event.getTarget();
    helmet=(player==null)?null:(player.getInventory == null)?null:(player.getInventory().getHelmet== null) ? null : player.getInventory().getHelmet();
    name=(function() {   var _value = (helmet== null) ? null : (helmet.getItemMeta == null) ? null : (helmet.getItemMeta() == null)?null:helmet.getItemMeta().getDisplayName();
      console.log ( 'Custom name: [' + _value + ']');
      return _value; })();
    if (((name) == "INVISO")){
      event.cancelled = true;
    }
  });
  events.entityDamage( function (event) {
    attacker=(event.getDamager== null) ? null : event.getDamager();
    shooter=(attacker== null)? null : (attacker.getMetadata == null)?null:(attacker.getMetadata("_shooter_").length == 0)?null:attacker.getMetadata("_shooter_")[0].value();
    if (attacker instanceof org.bukkit.entity.Player){
      event.cancelled = true;
    }
    else if (shooter instanceof org.bukkit.entity.Player){
      console.log ("No damage because arrow shot by player" );
      event.cancelled = true;
    }
  });
  events.blockBreak( function (event) {
  });
  events.playerCommandPreprocess( function (event) {
    player=(event.getPlayer== null) ? null : event.getPlayer();
    message=(event.getMessage== null) ? null : event.getMessage();
    words=(message).split(" ");
    command=(words)[0].toLowerCase();
    index=(message).indexOf(" ") + 1;
    message=(message).substring (parseInt(((index) + 1) - 1));
    if (((command) == ("/whisper"))){
      for (var _elementIndex=0; _elementIndex <server.getOnlinePlayers().length;_elementIndex++) {
        neighbor = server.getOnlinePlayers()[_elementIndex];
        if (function () { var _near;var _players;var _distance;_near=false;
        _players=server.getOnlinePlayers();
        for (var _i=0; _i<_players.length;_i++) {
        _distance=(player== null)?null:player.location.distance(_players[_i].location);
        if(_distance <= 5){if (neighbor== _players[_i]){
        _near=true;break;}}}
        return _near;}()){
          command="say " + neighbor.name + " \"" + message + "\"";
          org.bukkit.Bukkit.dispatchCommand(org.bukkit.Bukkit.getConsoleSender(), command);
        }
      };
    }
    else if (((command) == ("/op"))){
      org.bukkit.Bukkit.dispatchCommand(org.bukkit.Bukkit.getConsoleSender(), message);
    }
    else {
      (function() {
        if (player != null ) {
           player.sendMessage ("Command ignored: " + command);
        }
       })();
    }
    event.cancelled = true;
  });
};
