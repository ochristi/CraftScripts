/**
 * craftscript
 * 
 * removes all -1 (or less) "infinite" items
 * from (all/specified) online players
 * 
 * usage: /cs rem-1inv [regex] [?]
 * If regex pattern is omitted all players are  affected.
 * A non empty second argument will only print which players are matched.
 * 
 * @author ochristi aka o0c
 */

importClass(org.bukkit.craftbukkit.inventory.CraftItemStack);

// matcher
if (argv[1] != undefined) {
	var search = new RegExp(argv[1], "i");
} else {
	var search = new RegExp(".*", "i");
}

// debug (only prints the affected players without removing items)
var debug = argv[2] != undefined;
var affected = "";

// retrieve the current world
var world = player.getWorld().getWorld();
// retrieve all players from the world
var players = world.getPlayers().toArray();
// loop through all players to find the executing player
for ( var derp in players) {
	var currentPlayer = players[derp];
	// apply to all matched players
	if (search.test(players[derp].getName())) {
		// get the player's inventory
		var playerInv = currentPlayer.getInventory();
		// inv size should be 36, still...
		var invSize = playerInv.getSize();
		// loop through all slots
		for ( var slot = 0; slot < invSize; slot++) {
			// remove negative amount items
			if (playerInv.getItem(slot).getAmount() < 0) {
				if (!debug) {
					playerInv.clear(slot);
				} else {
					affected += players[derp].getName() + " ";
					break;
				}
			}
		}
	}
}

// print debug
player.print(affected);
