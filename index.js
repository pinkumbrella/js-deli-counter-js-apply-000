var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return "Welcome, "+name+". You are number "+katzDeliLine.length+" in line."
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  return "Currently serving "+katzDeliLine.unshift()+"."
}

function currentLine(katzDeliLine) {
  var lineLength = katzDeliLine.length
  if (lineLength === 0) {
    return "The line is currently empty."
  }
  

}