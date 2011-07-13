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

/** World ***************************************************** */
player.print("current world: " + currentworld.getName());

/** Chunks ***************************************************** */
player.print("loaded chunks: " + currentworld.getLoadedChunks().length);

/** Time ***************************************************** */
player.print("time: " + currentworld.getTime());

/** Entities ***************************************************** */
var entities = currentworld.getEntities();
player.print("entities: " + entities.size());
var entityCount = new HashMap();
for ( var i = 0; i < entities.size(); i++) {
	var currentEntity = entities.get(i).toString();
	if (!entityCount.containsKey(currentEntity)) {
		entityCount.put(currentEntity, 1);
		// player.print("new " + currentEntity);
	} else {
		entityCount.put(currentEntity,
				parseInt(entityCount.get(currentEntity)) + 1);
		// player.print("another " + currentEntity);
	}
}
var entries = entityCount.entrySet();
var iter = entries.iterator();
var entityStr = "";
while (iter.hasNext()) {
	var next = iter.next();
	entityStr += next.getKey() + "@" + next.getValue() + "; ";
}
player.print(entityStr);

/** ... ***************************************************** */
