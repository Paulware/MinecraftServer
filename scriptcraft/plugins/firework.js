exports.firework = function () {
  //Instantiations;
  var player;
  var block;
  var projectile;
  var vector;
  var newLocation;
  var newVector;
  var _meta;
  exports.fireworks = [null,null,null,null,null,null,null,null,null,null];
  events.playerInteract( function (event) {
    projectile = []
    player=(event.getPlayer== null) ? null : event.getPlayer();
    block=player.getTargetBlock(null,200);
    for (var i=0; i<10; i++) {
      //console.log ( 'spawning firework: ' + i);
      newLocation=(function() { var _x = player.location.x + 1;var _y = player.location.y + 2 ;var _z = player.location.z + 0;var loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return loc; })();
      fireworks[i] = (server.worlds[0].spawnEntity(newLocation,org.bukkit.entity.EntityType.FIREWORK));
      vector = player.location.getDirection().normalize()
      newVector = vector.multiply(2.0);
      fireworks[i].setVelocity (newVector);
      fd = new org.bukkit.metadata.FixedMetadataValue (__plugin,newVector);
      fireworks[i].setMetadata ("_vector_", fd );
      
      meta = org.bukkit.Bukkit.getItemFactory().getItemMeta(org.bukkit.Material.FIREWORK_ROCKET);
      meta.setPower(0);
        
      meta.addEffect(org.bukkit.FireworkEffect.builder()
                       .withColor(org.bukkit.Color.AQUA)
                       .with(org.bukkit.FireworkEffect.Type.BALL)
                       .withTrail()
                       .build());      
      fireworks[i].setFireworkMeta(meta);      

    }
    
  });
  
  events.entityDeath( function (event) {
     console.log ( 'entity died: ' + entity);
  });

  
};
