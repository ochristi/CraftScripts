 /**
 * craftscript
 * prints the spawn point coordinated
 * @author ochristi aka o0c
 */

// retrieves the coordinates
var spawnLocation = player.getWorld().getWorld().getSpawnLocation();
var x = spawnLocation.getX();
var y = spawnLocation.getY();
var z = spawnLocation.getZ();

// defines the colors
var blue = "§9";
var red = "§c";

// string lists
var strings = ["(", x, ", ", y, ", ", z, ")"];
var colors =  [blue, red];

// compose colors and strings
var composed = "";
for (i in strings)
	composed += colors[i%2] + strings[i];

// print to player
player.print(composed);
