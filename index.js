var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return "Welcome, "+name+". You are number "+katzDeliLine.length+" in line."
}

function nowServing(katzDeliLine) {
  if (katz.length === 0) {
    return ""
  }
  return katzDeliLine.unshift()
}

function currentLine(katzDeliLine) {
  var lineLength = katzDeliLine.length
  if (lineLength === 0) {
    return "The line is currently empty."
  }
  

}