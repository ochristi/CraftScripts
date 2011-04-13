/**
 * craftscript
 * Lists all files in the schematics folder to the player.
 * If "full" is passed as second parameter the full list is printed.
 * @author ochristi aka o0c
 */

importPackage(Packages.java.io);

// full listing?
var full = argv[1] == "full";

// opens the schematics folder
var folder = new File("./schematics/");
// gets the file list ...
var filelist = folder.listFiles();
// ... and the amount of files
var amount = filelist.length;

// prints the amount
player.print(amount + " file(s) found:");

// all names to one string
var filelisting = "§7";

// loop over all files
for (var i = 0; i < amount; i++) {
	var file = filelist[i];
	var filename = new String(file.getName());
	if (file.isFile()) {
		if(full) {
			// prints all files if argument is "full"
			//player.print(i+1 + ": " + filename);
			player.print("§7" + (i+1) + ": §c" + filename.replace(/\.schematic$/i, "§9.schematic"));
		}
		else {
			filelisting += filename.replace(/\.schematic$/i, ", ");
		}
	}
}
// print the default output
if (!full) {
	filelisting = filelisting.replace(/, $/i, "");
	player.print(filelisting);
}