require(['gamephase'], function (GamePhase) {
    describe("defined possible game phases", function () {

        it ("At the beginning when a user enters the game there is the start screen, it's the 'start' phase", function() {
            expect(GamePhase.START).toBeDefined();
            expect(GamePhase.START).toBe(0);
        })

        it("after the start screen the map with your units appears, you can select all the elements for your bees " +
            "before the battle starts. it's the 'pre game' phase", function() {
            expect(GamePhase.PRE_GAME).toBeDefined();
            expect(GamePhase.PRE_GAME).toBe(1);
        })

        it("after you tweaked everything, the battle starts. Now you and your opponents act turn after turn." +
            "it's the 'running' phase", function() {
            expect(GamePhase.RUNNING).toBeDefined();
            expect(GamePhase.RUNNING).toBe(2);
        })

        it("after one side wins the game the 'game over' phase starts", function() {
            expect(GamePhase.GAME_OVER).toBeDefined();
            expect(GamePhase.GAME_OVER).toBe(3);
        })
    })
});