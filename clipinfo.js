/**
 * craftscript
 * 
 * prints some information about the currently loaded clipboard.
 * 
 * @author ochristi aka o0c
 */


// get the Clipboard from the session which is obtained from the context
var cb = context.getSession().getClipboard();

// prints some interesting values
player.print("§9current clipboard:");
// dimensions in (x, y, z)
player.print("§7dimensions §8= §a" + cb.getSize());
// offset relative to the player in (x, y, z)
player.print("§7offset §8= §a" + cb.getOffset());
// what is the origin telling us?
player.print("§7origin §8= §a" + cb.getOrigin());