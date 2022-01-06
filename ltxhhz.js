var ltOpt = {
  change: false,
  enemyNum: 60 * 1.2,
  initScale: [.8, .1, .1],
  godView: {
    enable: false,
    normalSpeed: false
  },
  safeMode: false,
  normalCameraZoom: [1, 1, .75, .65, .55, .45, .4, .3, .25],
  ready: false
}
let tools = document.getElementById('lt-tools'),
  start = document.getElementById('start'),
  normalSpeed = document.getElementById('normal-speed'),
  godView = document.getElementById('god-view'),
  safeMode = document.getElementById('safe-mode'),
  changeInit = document.getElementById('change-init')
let tadpole = document.getElementsByName('tadpole')[0],
  frog = document.getElementsByName('frog')[0],
  turtle = document.getElementsByName('turtle')[0]
tadpole.value = ltOpt.initScale[0]
frog.value = ltOpt.initScale[1]
turtle.value = ltOpt.initScale[2]
tadpole.onchange = frog.onchange = turtle.onchange = function (e) {
  console.log(this.name,this.value);
  var value=Number(this.value)
  switch (this.name) {
    case 'tadpole':
      ltOpt.initScale[0] = value
      break;
    case 'frog':
      ltOpt.initScale[1] = value
      break;
    case 'turtle':
      ltOpt.initScale[2] = value
      break
    default:
      break;
  }
  if (ltOpt.initScale[0] + ltOpt.initScale[1] + ltOpt.initScale[2] == 1) changeInit.disabled = false
  else changeInit.disabled = true
}
Object.defineProperty(ltOpt, 'ready', {
  set(v) {
    if (v == true) {
      start.disabled = false
      godView.disabled = false
      changeInit.disabled = false
      safeMode.disabled = false
    }
  }
})
start.onclick = function (e) {
  tools.style.display = 'none'
  ltOpt.change = false
  noAdGoToScene()
}
normalSpeed.onchange = function (e) {
  ltOpt.godView.normalSpeed = this.value
}
changeInit.onclick=function (e){
  tools.style.display = 'none'
  ltOpt.change = true
  noAdGoToScene()
}
godView.onclick = function (e) {
  tools.style.display = 'none'
  ltOpt.godView.enable = true
  noAdGoToScene()
}
safeMode.onclick = function (e) {
  tools.style.display = 'none'
  ltOpt.safeMode = true
  noAdGoToScene()
}