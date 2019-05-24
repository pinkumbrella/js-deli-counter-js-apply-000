var katzDeliLine = [];
var number = 0
function takeANumber(name, katzDeliLine) {
  katzDeliLine.push(name)
  return "Welcome, "+name+". You are number"+katzDeliLine.length+" in line."
}

function nowServing(katzDeliLine) {
  return katzDeliLine.unshift()
}

function currentLine(katzDeliLine) {
  var lineLength = katzDeliLine.length
  if (lineLength === 0) {
    return "The line is currently empty."
  }
  

}