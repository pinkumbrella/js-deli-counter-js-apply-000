var katzDeliLine = [];
var number = 0
function takeANumber(name, katzDeliLine) {
  katzDeliLine.push(name)
  return "Welcome, "+name+". You are number"+katzDeliLine.length+" in line."
}

function nowServing(katzDeliLine) {
  return katzDeliLine[0]
}

function currentLine(katzDeliLine) {
  
}