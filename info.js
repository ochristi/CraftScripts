/**
 * craftscript
 * 
 * Prints some information to the player. Such as, the current World's name, the
 * amount of loaded chunks, time, entities (how many of which type) and
 * everything else what you suggest and can be done. :)
 * 
 * @author ochristi aka o0c
 */

importClass(Packages.java.util.HashMap);

var currentworld = player.getWorld().getWorld();

player.print("current world: " + currentworld.getName());
player.print("loaded chunks: " + currentworld.getLoadedChunks().length);
player.print("time: " + currentworld.getTime());
player.print("entities: " + currentworld.getEntities().size());
var ent = new HashMap();
for ( var i = 0; i < currentworld.getEntities().size(); i++) {
	var currentEntity = currentworld.getEntities().get(i).toString();
	if (!ent.containsKey(currentEntity)) {
		ent.put(currentEntity, 1);
		// player.print("new " + currentEntity);
	} else {
		ent.put(currentEntity, parseInt(ent.get(currentEntity)) + 1);
		// player.print("another " + currentEntity);
	}
}
var entries = ent.entrySet();
var iter = entries.iterator();
var entityStr = "";
while (iter.hasNext()) {
	var next = iter.next();
	entityStr += next.getKey() + "@" + next.getValue() + "; ";
}
player.print(entityStr);