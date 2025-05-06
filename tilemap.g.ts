// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level 1":
            case "level1":return tiles.createTilemap(hex`160011000000000101010101000000000000000001010100000000000001000000010000000000000000010001000000000000010000000100000000000000000100010000000000000100000001000000000000000002040300000000000001000000010000000000000000020403000000000000010000000100000000000000000204030000000000000100000001000000000101010101040101010100000001000000010000000001000000000000000001000000010100010100000000010000000000000000010000000001000100000000000100000000000000000101010101010001010101010001000000000001010101010000000000000000000100010000000000000000010100000000000000000001010100000000000000000101000000000000000000000000000000000000000001010000000000000000000101010000000000010101010101010101000101010101000100000000000000000100000000000000000000000001010101010101010101`, img`
......................
......................
......................
......................
......................
......................
......................
......................
......................
......................
......................
......................
......................
......................
......................
......................
......................
`, [myTiles.transparency16,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile7], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "Modern Art":
            case "tile2":return tile2;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile3":return tile3;
            case "myTile1":
            case "tile4":return tile4;
            case "myTile2":
            case "tile5":return tile5;
            case "myTile4":
            case "tile7":return tile7;
            case "myTile3":
            case "tile6":return tile6;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
