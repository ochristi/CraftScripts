/**
 * craftscript
 * 
 * utilites
 * 
 * @author ochristi aka o0c
 */

var world = player.getWorld().getWorld();
if (argv[1] != undefined) {
	/**
	 * prints the seed of the world to the player
	 * 
	 * since CraftBukkit #723
	 */
	if (argv[1].equalsIgnoreCase("seed"))
		player.print(world.getSeed());
}