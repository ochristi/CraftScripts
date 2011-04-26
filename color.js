/**
 * craftscript
 * 
 * Allows to set signs texts with color.
 * The targeted block has to be a sign, note that blocks as a whole are seen,
 * therefore make sure there are no other blocks in line of sight.
 * Colors are supported which are set by # with a following 0-9a-f,
 * line breaks are made with an @, to set # or @, enter two of them.
 * For a color listing see:
 * http://www.minecraftwiki.net/wiki/Classic_server_protocol#Color_Codes
 * 
 * future: I might add the possibility to change single lines...
 * 
 * @author ochristi aka o0c
 */

importPackage(Packages.java.io);
importPackage(Packages.java.awt);
importPackage(Packages.com.sk89q.worldedit);
importPackage(Packages.com.sk89q.worldedit.blocks);
importPackage(Packages.com.sk89q.worldedit.util);

var blocks = context.remember();

// retrieves the targeted block
var trgt = new TargetBlock(player);
var targetVector = trgt.getTargetBlock();

// in case something is found ...
if (targetVector != null) {
	// retrieve the block type
	var targetBlock = blocks.getBlock(targetVector);
	var targetBlockType = blocks.getBlockType(targetVector);
	// ... and it is a sign
	if (targetBlockType == 63 || targetBlockType == 68) {
		if (argv.length > 1) {
			var newText = argv.slice(1).join(" ");
			// save wanted # and @ letters
			newText = newText.replace(/##/g,"\u1337");
			newText = newText.replace(/@@/g,"\u1350");
			// replace all # matching with §
			newText = newText.replace(/#(?=[0-9a-f])/gi,"§");
			// reinsert saved #
			newText = newText.replace(/\u1337/g, "#");
			// split the lines into an array
			var newTextArray = newText.split("@");
			// reinsert saved @
			for (var i in newTextArray) {
				newTextArray[i] = newTextArray[i].replace(/\u1350/g, "@");
			}
		}

		// make sure the array is not too short to prevent ArrayIndexOutOfBoundsException
		while (newTextArray.length < 4) {
			newTextArray.push("");
		}

		// sets the text to the (copied) sign object
		targetBlock.setText(newTextArray);

		// replaces the current sign with the updated text
		blocks.setBlock(targetVector, targetBlock);
	}
}
