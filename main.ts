input.onPinPressed(TouchPin.P0, function () {
	
})
input.onButtonPressed(Button.A, function () {
	
})
input.onGesture(Gesture.Shake, function () {
	
})
// 동서(좌우)
basic.showNumber(input.acceleration(Dimension.X))
// 남북(상하)
basic.showNumber(input.acceleration(Dimension.Y))
// 위아래
basic.showNumber(input.acceleration(Dimension.Z))
basic.forever(function () {
	
})
