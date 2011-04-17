 /**
 * craftscript
 * stacks all items in players inventory
 */

importClass(java.util.HashSet);
importClass(org.bukkit.craftbukkit.inventory.CraftItemStack);

// retrieve the current world
var world = player.getWorld().getWorld();
// retrieve all players from the world
var players = world.getPlayers().toArray();
// loop through all players to find the executing player
for (var derp in players) {
	var currentPlayer = players[derp];
	// apply stacking only to the executing player
	if (currentPlayer.getName() == player.getName()) {
		// get the player's inventory
		var	playerInv = currentPlayer.getInventory();
		// inv size should be 36, still...
		var invSize = playerInv.getSize();
		// loop through all slots
		for (var slot = 0; slot < invSize; slot++) {
			// slot's item ...
			var item = playerInv.getItem(slot);
			// ... and type id
			var itemId = item.getTypeId();
			// apply only to non block stacks
			if (itemId > 255) {
				// get the initial amount
				var totalAmount = item.getAmount();
				// get all slot numbers with same item type
				var typeKeys = playerInv.all(itemId).keySet();
				// iterate trough the keys
				var iter = typeKeys.iterator();
				// drop initial item from iterator
				iter.next();
				// loop through the rest
				while(iter.hasNext()) {
					var nextSlot = iter.next();
					var nextItem = playerInv.getItem(nextSlot);
					// add all stack amounts ...
					totalAmount += nextItem.getAmount();
					// ... and clear them afterwards
					playerInv.clear(nextSlot);
				}
				// set the initial stack size to the sum of all
				item.setAmount(totalAmount);
			}
		}
		// done
		player.print("All items stacked to single full durability stacks.");
	}
}
