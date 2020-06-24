exports.test = function () {
  //Instantiations;
  var meta;
  var stack;
  self.getInventory().setItem (1,(function() {   var s = new org.bukkit.inventory.ItemStack (org.bukkit.Material.PAPER,1);  var m = s.getItemMeta();  m.setDisplayName ("clubs-2");  s.setItemMeta(m);  return s; })() );
};
