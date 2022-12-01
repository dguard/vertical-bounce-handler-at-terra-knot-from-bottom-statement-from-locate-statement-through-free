// keep
(function(){


function Pencil() {
    let that = this
    // follow viewported-knot-at-knot-labirint

    // keep update-stack
    let knot

    let accuratePencil = new AccuratePencil()
    // keep
    that.fromAccuratePencil = function () {
        // keep !
        return accuratePencil
    }
    // keep !

    that.passThroughCrowd = function () {
        return that
    }
    that.joinLoop = function () {
        return that
    }
    that.compact = function () {
        return that
    }

    that.drawFromBottom = function () {
        that.draw()
    }

    let knotThrough
    that.intoPointerBelongingsCollection = function () {
        let pointerBelongingsCollectionOfFour = {
            pointerBelongingsAtTopLeft: knotThrough.throughKnot.fromBottomStatement.pointerBelongingsAtTopLeft,
            pointerBelongingsAtBottomLeft: knotThrough.throughKnot.fromBottomStatement.pointerBelongingsAtBottomLeft,
            pointerBelongingsAtBottomRight: knotThrough.throughKnot.fromBottomStatement.pointerBelongingsAtBottomRight,
            pointerBelongingsAtRightTop: knotThrough.throughKnot.fromBottomStatement.pointerBelongingsAtRightTop
        }

        // keep

        return pointerBelongingsCollectionOfFour
    }
    that.drawThrough = function (knotThroughInstance) {
        knotThrough = knotThroughInstance

        // keep
        // knotThroughInstance.spawnedPointerBelongings
        knotThrough.compute().constructPointerBelongingsFromBottom(knotThrough.spawnedPointerBelongings)
        // take computed pointerBelongings topLeft, bottomLeft, bottomRight, rightTop

        // keep
        return that
    }

    that.useKnot = function (knotInstance) {
        knot = knotInstance
    }

    that.useEchoLocator = function (echoLocator) {
        that.echoLocator = echoLocator
        // keep !
        that.echoLocator.usePointerBelongings(knot.pointerBelongings)
        that.echoLocator.useRelativeSize(knot)

        // keep
        that.echoLocator.connectTo(knot)
    }
    // keep !


    // keep bind-stack !

    let scene = this

    // queueKnot
    let dictQueueKnot = {}

    let queueKnot = []

    let chosenScene

    let takeOne = function (arr) {
        return arr.splice(arr.length - 1, 1)[0]
    }

    that.constructKnot = function () {
        return takeOne(dictQueueKnot[chosenScene])
    }

    that.rememberSample = function (scene, knot) {
        // keep
        if(dictQueueKnot[scene]) {
            // keep !
        } else {
            dictQueueKnot[scene] = []
        }
        dictQueueKnot[scene].push(knot)
    }

    that.useScene = function (providedScene) {
        chosenScene = providedScene
    }

    that.putKnotConnectedToBottomStatement = function (knotInstance) {
        // pencil verifies that it is connected to bottom-statement
        queueKnot.push(knotInstance)
    }

    that.provideScene = function () {
        return scene
    }

    let viewportPosition

    that.useViewport = function (viewportPointerBelongingsAtVerticalPosition, viewportPointerBelongingsAtDistance, viewportPointerBelongingsAtHorizontalPosition) {
        let localViewport = JSON.parse(JSON.stringify({
            atVerticalPosition: viewportPointerBelongingsAtVerticalPosition,
            atDistance: viewportPointerBelongingsAtDistance,
            atHorizontalPosition: viewportPointerBelongingsAtHorizontalPosition
        }))
        // keep

        viewportPosition = localViewport
    }

    that.draw = function () {
        // knotFromCubicProject

        // keep !

        // and there. it is program way, knot human way
        for(let i = 0; i < queueKnot.length; i++) {
            // chosen scene we take to ourself
            // it is a memory protection and a protection from high coupling
            queueKnot[i]['passThrough'](queueKnot[i]['spawnedPointerBelongings'])
        }

        // pointerBelongings
    }

    // bind !
}


function DraftFabrikk() {
    let that = this

    that.connectKnotToBottomStatement = function (bottomStatement, knotInstance) {

    }
    that.constructBottomStatement = function () {

    }

    that.constructViewport = function () {
        let viewportBelongingsAtVerticalPosition
        let viewportBelongingsAtDistance
        let viewportBelongingsAtHorizontalPosition
        // keep

        let localViewportBelongings = {
            viewportBelongingsAtVerticalPosition,
            viewportBelongingsAtDistance,
            viewportBelongingsAtHorizontalPosition
        }

        return localViewportBelongings
    }
}
// keep !
window['@pencil/draft-compact-knot-locate-draftar-from-front'] = {
    DraftFabrikk,
    Pencil
}

})()